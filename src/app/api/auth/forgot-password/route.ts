// src/app/api/auth/forgot-password/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/lib/prisma";
import { randomUUID } from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ message: "Email requerido" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      // Por seguridad, no informar si el usuario existe o no
      return NextResponse.json({ message: "Si el correo está registrado, recibirás un enlace pronto." });
    }

    // Generar token único
    const token = randomUUID();

    // Guardar token en la base de datos
    await prisma.passwordResetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60), // 1 hora
      },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    // Enviar email con Resend
    await resend.emails.send({
      from: "Wolf Gym <noreply@tu-dominio.com>",
      to: [email],
      subject: "🔒 Recuperá tu contraseña - Wolf Gym",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #e63946;">Solicitud de cambio de contraseña</h2>
          <p>Hola ${user.name || "entrenador/a"},</p>
          <p>Recibimos una solicitud para cambiar tu contraseña. Hacé clic en el botón para continuar:</p>
          <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; background: #e63946; color: #fff; text-decoration: none; border-radius: 5px;">Cambiar contraseña</a>
          <p style="margin-top: 20px; color: #999; font-size: 12px;">Este enlace expirará en 1 hora.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Enlace enviado si el correo está registrado." });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}