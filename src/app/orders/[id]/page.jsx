import Image from "next/image";
import { getSingleOrder } from "@/actions/server/Order";
import Link from "next/link";

const OrderDetailsPage = async ({ params }) => {
  const { id } = await params;

  const order = await getSingleOrder(id);

  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="py-10">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-secondary">Order Details</h1>

          <p className="text-base-content/60 mt-2">
            Tracking ID:{" "}
            <span className="font-semibold">{order.trackingId}</span>
          </p>
        </div>

        <div className="flex gap-3">
          <span className="badge badge-warning badge-lg capitalize">
            {order.status}
          </span>

          <span className="badge badge-outline badge-lg uppercase">
            {order.paymentMethod}
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-base-100 border border-base-300 rounded-3xl overflow-hidden">
            <div className="px-8 py-6 border-b border-base-300">
              <h2 className="text-2xl font-bold">Ordered Products</h2>
            </div>

            <div className="divide-y divide-base-300">
              {order.items.map((item, index) => {
                console.log(item);
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-5 p-6"
                  >
                    <div className="w-28 h-28 rounded-2xl overflow-hidden bg-base-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <Link href={`/products/${item?.productId?.toString()}`}>
                        <h3 className="font-bold text-lg hover:underline">
                          {item.title}
                        </h3>
                      </Link>

                      <div className="flex flex-wrap gap-5 mt-3 text-sm text-base-content/70">
                        <span>Qty: {item.quantity}</span>

                        <span>Price: TK. {item.price.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">
                        TK. {(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="bg-base-100 border border-base-300 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-5">Order Information</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Tracking ID</span>

                <span className="font-semibold">{order.trackingId}</span>
              </div>

              <div className="flex justify-between">
                <span>Date</span>

                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>

                <span className="capitalize">{order.status}</span>
              </div>

              <div className="flex justify-between">
                <span>Payment</span>

                <span className="uppercase">{order.paymentMethod}</span>
              </div>
            </div>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-5">Shipping Address</h2>

            <div className="space-y-2 text-sm">
              <p>
                <strong>Name:</strong> {order.username}
              </p>

              <p>
                <strong>Email:</strong> {order.email}
              </p>

              <p>
                <strong>Phone:</strong> {order.phone}
              </p>

              <p>
                <strong>Address:</strong>
                <br />
                {order.address}
              </p>

              <p>
                {order.city}, {order.postal}
              </p>

              <p>{order.country}</p>

              {order.note && (
                <p className="pt-3">
                  <strong>Note:</strong>
                  <br />
                  {order.note}
                </p>
              )}
            </div>
          </div>

          <div className="bg-base-100 border border-base-300 rounded-3xl p-6">
            <h2 className="text-xl font-bold mb-5">Order Summary</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Items</span>

                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>

                <span className="text-success">Free</span>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between text-2xl font-bold">
                <span>Total</span>

                <span className="text-primary">
                  TK. {order.totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
