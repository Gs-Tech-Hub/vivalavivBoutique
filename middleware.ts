import { NextRequest, NextResponse } from "next/server";

const ADMIN_LOGIN = "/admin/login";

export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isAdminRoute = pathname.startsWith("/admin");
  const isLoginPage = pathname === ADMIN_LOGIN;

  const hasSessionCookie = !!(
    req.cookies.get("__Secure-next-auth.session-token")?.value ||
    req.cookies.get("next-auth.session-token")?.value
  );

  console.log("[middleware] admin route check", {
    pathname,
    isAdminRoute,
    isLoginPage,
    hasSessionCookie,
  });

  if (isAdminRoute && !isLoginPage && !hasSessionCookie) {
    console.log("[middleware] redirecting unauthenticated admin request to login");
    return NextResponse.redirect(new URL(ADMIN_LOGIN, req.url));
  }

  if (isLoginPage && hasSessionCookie) {
    console.log("[middleware] redirecting logged-in user from login to admin");
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
