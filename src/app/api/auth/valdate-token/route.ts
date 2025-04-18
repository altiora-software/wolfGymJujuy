// src/app/api/auth/validate-token/route.ts
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { compareAsc } from "date-fns";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    const user = await db.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gte: new Date(),
        },
      },
    });

    if (!user) {
      return NextResponse.json({ valid: false, message: "Token inválido o expirado." }, { status: 400 });
    }

    return NextResponse.json({ valid: true });
  } catch (error) {
    return NextResponse.json({ valid: false, error: (error as Error).message }, { status: 500 });
  }
}