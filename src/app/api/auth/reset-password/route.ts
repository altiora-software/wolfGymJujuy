// src/app/api/auth/reset-password/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { token, password } = await req.json();

    if (!token || !password) {
      return NextResponse.json({ success: false, message: "Faltan datos." }, { status: 400 });
    }

    // Buscar el token en la base de datos
    const tokenRecord = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!tokenRecord || tokenRecord.expires < new Date()) {
      return NextResponse.json({ success: false, message: "Token inválido o expirado." }, { status: 400 });
    }

    // Encriptar nueva contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Actualizar contraseña del usuario
    await prisma.user.update({
      where: { id: tokenRecord.userId },
      data: { password: hashedPassword },
    });

    // Eliminar token de la base
    await prisma.passwordResetToken.delete({
      where: { token },
    });

    return NextResponse.json({ success: true, message: "Contraseña actualizada exitosamente." });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
