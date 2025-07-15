import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const data = await req.json();
  const { email, quantity, message, country, address, productName } = data;

  try {
    await resend.emails.send({
      from: "contact@amazonia-natureza.org",
      to: "contact@amazonia-natureza.org",
      subject: `New Order Request: ${productName}`,
      html: `
        <h2>New Order Request</h2>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Quantity:</strong> ${quantity}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
