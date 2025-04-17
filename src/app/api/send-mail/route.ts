import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("apikey"); // ✅ reemplazar por tu API Key real

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const response = await resend.emails.send({
      from: "Wolf Gym <noreply@wolfgym.com>", // ✅ configurar dominio real en Resend
      to: ["destinatario@email.com"], // ✅ cambiar por el correo real
      subject: "💪 Nuevo mensaje de contacto - Wolf Gym",
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: auto; background: #121212; border-radius: 10px; overflow: hidden; color: #fff;">
          <!-- 🔥 Encabezado -->
          <div style="background: #000; padding: 20px; text-align: center;">
            <img src="https://i.imgur.com/ihv7uX0.png" alt="Wolf Gym Logo" style="width: 120px; margin-bottom: 10px;" />
            <h2 style="margin: 0; color: #ff3c3c;">Nuevo Mensaje Recibido</h2>
          </div>

          <!-- 💬 Contenido -->
          <div style="padding: 24px; background: #1a1a1a;">
            <p style="font-size: 16px; color: #ccc;">
              📨 <strong>Alguien quiere ponerse en contacto con el equipo de Wolf Gym.</strong>
            </p>

            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="background: #ff3c3c; padding: 10px; font-weight: bold;">Nombre</td>
                <td style="padding: 10px; background: #222;">${name}</td>
              </tr>
              <tr>
                <td style="background: #ff3c3c; padding: 10px; font-weight: bold;">Teléfono</td>
                <td style="padding: 10px; background: #222;">${phone}</td>
              </tr>
              <tr>
                <td style="background: #ff3c3c; padding: 10px; font-weight: bold;">Mensaje</td>
                <td style="padding: 10px; background: #222;">${message}</td>
              </tr>
            </table>

            <p style="margin-top: 20px; font-size: 14px; color: #999;">
              Recordá responder directamente por teléfono o mail. 💬
            </p>
          </div>

          <!-- 📲 Footer -->
          <div style="background: #000; padding: 16px; text-align: center; font-size: 14px; color: #fff;">
            <p style="margin: 0;">Seguinos en redes y activá tu mejor versión:</p>
            <p style="margin: 8px 0;">
              <a href="https://wa.me/5493885123456" style="color: #ff3c3c; margin: 0 10px;">WhatsApp</a> | 
              <a href="https://instagram.com/wolfgymjujuy" style="color: #ff3c3c; margin: 0 10px;">Instagram</a> | 
              <a href="https://facebook.com/wolfgymjujuy" style="color: #ff3c3c;">Facebook</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, response });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
