// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Reemplazá este secret por el que usás para firmar el token
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "secret_key");

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  // Si no hay token, redirigir al login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    const role = payload.role as "ADMIN" | "TRAINER" | "USER";

    const pathname = request.nextUrl.pathname;

    // Protegemos según rol
    if (pathname.startsWith("/dashboard/admin") && role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith("/dashboard/trainer") && role !== "TRAINER") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    if (pathname.startsWith("/dashboard/user") && role !== "USER") {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error("Token inválido:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Solo aplicamos el middleware a las rutas necesarias
export const config = {
  matcher: [
    "/dashboard/admin/:path*",
    "/dashboard/trainer/:path*",
    "/dashboard/user/:path*",
  ],
};
