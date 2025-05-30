// src/app/api/admin/usuarios/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const usuarios = await prisma.user.findMany({
      where: {
        role: "USER",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        activo: true,
        pagos: {
          select: {
            id: true,
            fechaPago: true,
            inicioMembresia: true,
            finMembresia: true,
          },
        },
        image: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ usuarios });
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}
