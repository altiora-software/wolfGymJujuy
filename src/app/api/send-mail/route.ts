import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("apikey");

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    const response = await resend.emails.send({
        from: "Plaza Chess <noreply@tu-dominio.com>",
        to: ["destinatario@email.com"], // Cambiar con el email destino
        subject: "📩 Nuevo mensaje de contacto - Plaza Chess",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f8f9fa; border-radius: 8px; overflow: hidden;">
            <!-- 🏆 Encabezado con Banner -->
            <div style="background: #222; padding: 10px; text-align: center;">
              <img src="https://i.imgur.com/LtXzdxY.png" alt="Plaza Chess Logo" style="width: 150px; margin-bottom: 10px;">
              <h2 style="color: #ffcc00; margin: 0;">¡Nuevo mensaje de contacto!</h2>
            </div>
      
            <!-- 💬 Contenido del Mensaje -->
            <div style="padding: 20px; background: #ffffff;">
              <p style="font-size: 16px; color: #333;">📢 <strong>Hola, has recibido un nuevo mensaje a través del formulario de contacto.</strong></p>
      
              <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <tr>
                  <td style="background: #ffcc00; padding: 8px; font-weight: bold; text-align: left; border-bottom: 2px solid #ddd;">Nombre</td>
                  <td style="padding: 8px; border-bottom: 2px solid #ddd;">${name}</td>
                </tr>
                <tr>
                  <td style="background: #ffcc00; padding: 8px; font-weight: bold; text-align: left; border-bottom: 2px solid #ddd;">Teléfono</td>
                  <td style="padding: 8px; border-bottom: 2px solid #ddd;">${phone}</td>
                </tr>
                <tr>
                  <td style="background: #ffcc00; padding: 8px; font-weight: bold; text-align: left; border-bottom: 2px solid #ddd;">Mensaje</td>
                  <td style="padding: 8px; border-bottom: 2px solid #ddd;">${message}</td>
                </tr>
              </table>
      
              <p style="font-size: 14px; color: #555; margin-top: 10px;">
                Puedes responder este mensaje directamente o contactar con el usuario a través del teléfono proporcionado. 📞
              </p>
            </div>
      
            <!-- 🔗 Footer con Redes Sociales -->
            <div style="background: #222; padding: 10px; text-align: center; color: #fff;">
              <p>Síguenos en redes sociales:</p>
              <p>
                <a href="https://wa.me/5493400582778" style="color: #ffcc00; text-decoration: none; margin-right: 10px;">📱 WhatsApp</a> | 
                <a href="https://instagram.com/plazachess.vc" style="color: #ffcc00; text-decoration: none; margin-right: 10px;">📸 Instagram</a> | 
                <a href="https://facebook.com/plazachess" style="color: #ffcc00; text-decoration: none;">📘 Facebook</a>
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
