import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, API routes, and system files from localization routing
  const isSystemRoute = pathname.startsWith("/_next") || 
                        pathname.startsWith("/api") || 
                        pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$/);

  if (isSystemRoute) {
    return NextResponse.next();
  }

  // Handle root route redirection
  if (pathname === "/") {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const targetMarket = cookieLocale && ["en", "tr", "pt", "fr", "it", "us", "uk", "ie"].includes(cookieLocale) 
      ? cookieLocale 
      : "en"; // default to global market 'en'

    const url = request.nextUrl.clone();
    url.pathname = "/" + targetMarket;
    return NextResponse.redirect(url);
  }

  // We add the original pathname to headers so server components can know it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|xml|txt)$).*)",
  ],
};
