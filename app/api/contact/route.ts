import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "andriamiarintsoaniraina@gmail.com",
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch {
    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}