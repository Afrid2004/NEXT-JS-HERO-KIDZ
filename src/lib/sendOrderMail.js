import { transporter } from "./mailer";

export const sendOrderMail = async (order) => {
  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  const products = order.items
    .map(
      (item) => `
<tr>
<td style="padding:14px;border-bottom:1px solid #eeeeee;">
${item.title}
</td>

<td align="center" style="padding:14px;border-bottom:1px solid #eeeeee;">
${item.quantity}
</td>

<td align="right" style="padding:14px;border-bottom:1px solid #eeeeee;font-weight:600;">
৳ ${(item.price * item.quantity).toLocaleString()}
</td>
</tr>
`,
    )
    .join("");

  await transporter.sendMail({
    from: `"Hero Kidz" <${process.env.EMAIL_USER}>`,
    to: order.email,
    subject: `🎉 Your Hero Kidz Order is Confirmed (#${order.trackingId})`,

    html: `
<!DOCTYPE html>
<html>

<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>

<body style="
margin:0;
padding:40px 15px;
background:#f5f7fb;
font-family:Arial,Helvetica,sans-serif;
color:#374151;
">

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="max-width:720px;margin:auto;">

<tr>

<td>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
background:#ffffff;
border-radius:20px;
overflow:hidden;
box-shadow:0 8px 30px rgba(0,0,0,.08);
">

<!-- Header -->

<tr>

<td
align="center"
style="
padding:45px 30px;
background:linear-gradient(135deg,#079992,#0a3d62);
color:white;
">

<img
src="https://i.postimg.cc/Y9y6rGKt/logo.png"
width="90"
style="display:block;margin:auto;margin-bottom:18px;"
/>

<h1 style="
margin:0;
font-size:30px;
font-weight:700;
">
Order Confirmed 🎉
</h1>

<p style="
margin-top:12px;
font-size:16px;
line-height:26px;
color:#f3f4f6;
">

Hi <strong>${order.username}</strong>,
<br/>
Thank you for shopping with <strong>Hero Kidz</strong>.
Your order has been placed successfully.

</p>

</td>

</tr>

<!-- Order Summary -->

<tr>

<td style="padding:35px;">

<h2 style="
margin-top:0;
font-size:22px;
color:#111827;
">

Order Summary

</h2>

<table
width="100%"
cellpadding="10"
style="
background:#fafafa;
border:1px solid #ececec;
border-radius:12px;
">

<tr>
<td><strong>Tracking ID</strong></td>
<td align="right">${order.trackingId}</td>
</tr>

<tr>
<td><strong>Order Date</strong></td>
<td align="right">
${new Date(order.createdAt).toLocaleDateString()}
</td>
</tr>

<tr>
<td><strong>Status</strong></td>
<td align="right">
<span style="
background:#fff4d6;
padding:6px 12px;
border-radius:20px;
font-size:13px;
font-weight:bold;
color:#946200;
">
${order.status.toUpperCase()}
</span>
</td>
</tr>

<tr>
<td><strong>Payment</strong></td>
<td align="right">${order.paymentMethod.toUpperCase()}</td>
</tr>

<tr>
<td><strong>Total Items</strong></td>
<td align="right">${totalItems}</td>
</tr>

<tr>
<td><strong>Total Amount</strong></td>
<td align="right" style="
font-size:22px;
font-weight:bold;
color:#079992;
">
৳ ${order.totalPrice.toLocaleString()}
</td>
</tr>

</table>

</td>

</tr>

<!-- Products -->

<tr>

<td style="padding:0 35px 35px;">

<h2 style="
font-size:22px;
margin-bottom:20px;
color:#111827;
">

Ordered Products

</h2>

<table
width="100%"
cellpadding="0"
cellspacing="0"
style="
border:1px solid #eeeeee;
border-radius:12px;
overflow:hidden;
">

<tr style="background:#f3f4f6;">

<th align="left" style="padding:15px;">
Product
</th>

<th align="center" style="padding:15px;">
Qty
</th>

<th align="right" style="padding:15px;">
Subtotal
</th>

</tr>

${products}

</table>

</td>

</tr>

<!-- Shipping -->

<tr>

<td style="padding:0 35px 35px;">

<h2 style="
font-size:22px;
margin-bottom:15px;
color:#111827;
">

Shipping Address

</h2>

<div style="
background:#fafafa;
border:1px solid #ececec;
padding:22px;
border-radius:14px;
line-height:28px;
">

<strong>${order.username}</strong>

<br>

${order.address}

<br>

${order.city}, ${order.postal}

<br>

${order.country}

<br><br>

📞 ${order.phone}

${order.note ? `<br><br><strong>Order Note:</strong><br>${order.note}` : ""}

</div>

</td>

</tr>

<!-- Button -->

<tr>

<td align="center" style="padding:0 35px 40px;">

<a
href="${process.env.NEXTAUTH_URL}/orders/${order._id}"
style="
display:inline-block;
padding:16px 34px;
background:linear-gradient(135deg,#079992,#0a3d62);
color:white;
font-size:16px;
font-weight:bold;
text-decoration:none;
border-radius:10px;
"> 

View My Orders

</a>

</td>

</tr>

<!-- Footer -->

<tr>

<td
align="center"
style="
background:#fafafa;
padding:35px;
font-size:14px;
color:#6b7280;
">

<strong style="
font-size:18px;
color:#111827;
">

Hero Kidz

</strong>

<br><br>

Thank you for trusting Hero Kidz ❤️

<br><br>

If you have any questions regarding your order,
please contact our support team.

<br><br>

© ${new Date().getFullYear()} Hero Kidz.
All Rights Reserved.

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`,
  });
};
