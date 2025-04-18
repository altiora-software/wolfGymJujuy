// src/app/api/auth/reset/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";

const schema = z.object({
  token: z.string().min(6),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { token, password } = schema.parse(body);

    const user = await prisma.user.findFirst({ where: { resetToken: token } });
    if (!user) {
      return NextResponse.json({ message: "Token inválido o expirado" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null, // limpiamos el token una vez usado
      },
    });

    return NextResponse.json({ message: "Contraseña actualizada correctamente" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message || "Error interno" }, { status: 500 });
  }
}