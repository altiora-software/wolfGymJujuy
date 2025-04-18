import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password, name, role } = await req.json();

    if (!email || !password || !name || !role) {
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    // Verificar si ya existe
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Este correo ya está registrado." },
        { status: 400 }
      );
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Usuario creado correctamente.",
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || "Error del servidor." },
      { status: 500 }
    );
  }
}
