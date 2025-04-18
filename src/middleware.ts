import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const protectedPaths = ["/dashboard", "/admin", "/entrenador"];
  const { pathname } = request.nextUrl;

  // Solo proteger rutas específicas
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      jwt.verify(token, JWT_SECRET);
      return NextResponse.next(); // usuario autenticado
    } catch (err) {
      console.error("Token inválido:", err);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next(); // rutas públicas siguen
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*", "/entrenador/:path*"],
  };
  