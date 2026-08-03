import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const privateRoutes = ["/cart", "/orders", "/checkout", "/dashboard"];
const authRoutes = ["/login", "/register"];

export async function proxy(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const reqPath = req.nextUrl.pathname;
  const isAuthorized = Boolean(token);
  const isPrivateRoute = privateRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) => reqPath.startsWith(route));
  // if user not logged in redirect to login
  if (!isAuthorized && isPrivateRoute) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${reqPath}`, req.url),
    );
  }

  // if user logged in then redirect to home
  if (isAuthorized && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Admin only
  if (reqPath.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${reqPath}`, req.url),
      );
    }
    if (token.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/login/:path*",
    "/register/:path*",
    "/cart/:path*",
    "/orders/:path*",
    "/checkout/:path*",
    "/dashboard/:path*",
  ],
};
