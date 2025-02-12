import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req }); // Check if user is authenticated
  const protectedRoutes = ["/dashboard"]; // Define protected routes
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard(.*)"] };
