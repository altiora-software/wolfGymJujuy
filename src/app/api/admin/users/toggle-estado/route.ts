import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ success: false, message: "Falta el ID de usuario" }, { status: 400 });
    }

    // Buscar usuario
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ success: false, message: "Usuario no encontrado" }, { status: 404 });
    }

    // Alternar el estado (activo/inactivo)
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { activo: !user.activo },
    });

    return NextResponse.json({ success: true, user: updatedUser });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message || "Error interno" }, { status: 500 });
  }
}
