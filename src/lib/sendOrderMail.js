import { transporter } from "./mailer";

export const sendOrderMail = async (order) => {
  const products = order.items
    .map(
      (item) => `
        <tr>
          <td style="padding:8px;border:1px solid #eee;">${item.title}</td>
          <td style="padding:8px;border:1px solid #eee;">${item.quantity}</td>
          <td style="padding:8px;border:1px solid #eee;">৳${item.price}</td>
        </tr>
      `,
    )
    .join("");

  await transporter.sendMail({
    from: `"Hero Kidz" <${process.env.EMAIL_USER}>`,
    to: order.email,
    subject: `Order Confirmed - ${order.trackingId}`,

    html: `
<!DOCTYPE html>
<html>

<body style="background:#f6f8fb;padding:40px;font-family:Arial,sans-serif">

<table
style="max-width:700px;margin:auto;background:#fff;border-radius:12px;overflow:hidden">

<tr>
<td align="center" style="padding:30px">

<img
src="https://i.ibb.co.com/bgvsQT59/logo.png"
width="120"
/>

<h1 style="margin-top:20px;color:#333">
Thank You For Your Order 🎉
</h1>

<p>
Hi <b>${order.username}</b>,
</p>

<p>
Your order has been placed successfully.
</p>

</td>
</tr>

<tr>
<td style="padding:30px">

<h2>Order Information</h2>

<p><b>Tracking ID:</b> ${order.trackingId}</p>

<p><b>Status:</b> Pending</p>

<p><b>Payment:</b> ${order.paymentMethod.toUpperCase()}</p>

<p><b>Total:</b> ৳${order.totalPrice.toLocaleString()}</p>

</td>
</tr>

<tr>
<td style="padding:30px">

<h2>Products</h2>

<table
width="100%"
cellspacing="0"
style="border-collapse:collapse">

<tr style="background:#f3f4f6">
<th style="padding:10px;border:1px solid #eee">
Product
</th>

<th style="padding:10px;border:1px solid #eee">
Qty
</th>

<th style="padding:10px;border:1px solid #eee">
Price
</th>

</tr>

${products}

</table>

</td>
</tr>

<tr>
<td style="padding:30px">

<h2>Shipping Address</h2>

<p>
${order.address}
</p>

<p>
${order.city},
${order.postal}
</p>

<p>
${order.country}
</p>

<p>
Phone: ${order.phone}
</p>

</td>
</tr>

<tr>
<td
style="padding:30px;text-align:center;background:#f9fafb;color:#666">

Thanks for shopping with Hero Kidz ❤️

</td>
</tr>

</table>

</body>

</html>
`,
  });
};
