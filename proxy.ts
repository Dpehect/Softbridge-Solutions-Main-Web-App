import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const supportedMarkets = new Set(["en", "tr", "pt", "fr", "it", "us", "uk", "ie"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const targetMarket = cookieLocale && supportedMarkets.has(cookieLocale) ? cookieLocale : "en";
    return NextResponse.redirect(new URL(`/${targetMarket}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|xml|txt)$).*)"]
};
