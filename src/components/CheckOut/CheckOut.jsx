"use client";

import { useSession } from "next-auth/react";
import React, { useMemo, useState } from "react";
import locations from "@/data/location.json";
import { createOrder } from "@/actions/server/Order";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CheckOut = ({ cartItems = [] }) => {
  const session = useSession();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  );

  const subTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  );

  const paymentMethods = [
    {
      method: "cod",
      title: "Cash On Delivery",
      desc: "Pay after receiving your order.",
      badge: "badge-success text-white",
      refr: "Recommended",
    },
    {
      method: "ssl",
      title: "SSLCommerz",
      desc: "Visa, MasterCard, American Express & More",
      badge: "badge-outline",
      refr: "Online",
    },
    {
      method: "bkash",
      title: "bKash",
      desc: "Pay instantly using your bKash wallet.",
      badge: "badge-secondary",
      refr: "Mobile",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const payloadData = {
      phone: form.phone.value,
      city: form.city.value,
      postal: form.postal.value,
      country: form.country.value,
      address: form.address.value,
      paymentMethod: form.payment.value,
      note: form.note.value,
    };
    try {
      const res = await createOrder(payloadData);
      if (res.success) {
        await Swal.fire({
          title: "Success!",
          text: "Order created successfully!",
          icon: "success",
        });
        router.push("/products");
      } else {
        await Swal.fire({
          title: "Failed!",
          text: "Fail to create order",
          icon: "error",
        });
      }
    } catch (error) {
      await Swal.fire({
        title: "Error!",
        text: error?.response?.data?.message || "Something went wrong",
        icon: "error",
      });
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <div className="bg-base-100 border border-base-300 rounded-3xl  p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-medium mb-2 block">Full Name</label>

                  <input
                    type="text"
                    name="username"
                    value={session?.data?.user?.name}
                    placeholder="John Doe"
                    readOnly
                    className="input input-bordered rounded-xl w-full"
                  />
                </div>

                <div>
                  <label className="font-medium mb-2 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={session?.data?.user?.email}
                    placeholder="john@example.com"
                    readOnly
                    className="input input-bordered rounded-xl w-full"
                  />
                </div>

                <div>
                  <label className="font-medium mb-2 block">Phone Number</label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+8801XXXXXXXXX"
                    className="input input-bordered rounded-xl w-full"
                  />
                </div>

                <div>
                  <label className="font-medium mb-2 block">City</label>
                  <select
                    name="city"
                    required
                    defaultValue=""
                    className="select select-bordered rounded-xl w-full focus:border-primary"
                  >
                    <option value="" disabled>
                      Select Your City
                    </option>

                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-medium mb-2 block">Postal Code</label>

                  <input
                    type="text"
                    name="postal"
                    required
                    placeholder="1207"
                    className="input input-bordered rounded-xl w-full"
                  />
                </div>

                <div>
                  <label className="font-medium mb-2 block">Country</label>

                  <input
                    type="text"
                    placeholder="Bangladesh"
                    name="country"
                    value={"Bangladesh"}
                    readOnly
                    className="input input-bordered rounded-xl w-full"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="font-medium mb-2 block">Full Address</label>

                  <textarea
                    placeholder="House, Road, Area..."
                    name="address"
                    className="textarea textarea-bordered rounded-xl w-full h-32"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Payment Method */}
            <div className="bg-base-100 border border-base-300 rounded-3xl  p-8">
              <h2 className="text-2xl font-bold text-secondary mb-2">
                Payment Method
              </h2>

              <p className="text-base-content/60 mb-6">
                Select your preferred payment option.
              </p>

              <div className="space-y-4">
                {/* payment methods */}
                {paymentMethods.map((item, idx) => {
                  return (
                    <label
                      key={idx}
                      className={`flex items-center justify-between rounded-2xl border-2 px-5 py-5 cursor-pointer transition-all duration-200 ${
                        item.method === paymentMethod
                          ? "border-primary bg-primary/10"
                          : "border-base-200 hover:border-primary"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="payment"
                          value={item.method}
                          checked={item.method === paymentMethod}
                          onChange={() => setPaymentMethod(item.method)}
                          className="radio radio-primary"
                        />

                        <div>
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="text-sm text-base-content/60">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <span className={`badge ${item.badge}`}>{item.refr}</span>
                    </label>
                  );
                })}
              </div>
            </div>
            {/* Order Notes */}
            <div className="bg-base-100 border border-base-300 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Order Notes
              </h2>

              <textarea
                name="note"
                className="textarea textarea-bordered rounded-xl w-full h-32"
                placeholder="Write any special instructions for your order..."
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-1">
            <div className="bg-base-100 border border-base-300 rounded-3xl p-8 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-secondary">
                  Order Summary
                </h2>
              </div>

              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between gap-4 border-b border-base-300 pb-4"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold line-clamp-2 text-sm">
                        {item.title}
                      </h4>

                      <p className="text-xs text-base-content/60 mt-1">
                        Qty: {item.quantity} x TK. {item.price.toLocaleString()}
                      </p>
                    </div>

                    <p className="font-bold whitespace-nowrap text-primary">
                      TK. {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-base">
                  <span className="text-base-content/70">Total Items</span>

                  <span className="font-semibold">{totalItems}</span>
                </div>

                <div className="flex justify-between text-base">
                  <span className="text-base-content/70">Subtotal</span>

                  <span className="font-semibold">
                    TK. {subTotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between text-base">
                  <span className="text-base-content/70">Shipping</span>

                  <span className="text-success font-semibold">Free</span>
                </div>

                <div className="divider my-2"></div>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-secondary">
                    Total
                  </span>

                  <span className="text-3xl font-extrabold text-primary">
                    TK. {subTotal.toLocaleString()}
                  </span>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg rounded-xl w-full mt-6"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
