import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { cookies, nextUrl } = req;

  /**
   * STEP 1: GET COOKIES FROM THE INCOMING REQUEST
   */
  const token = cookies.get("afex-payment-cookie");
  const permissionsCookie = cookies.get("permissions")?.value;

  /**
   * STEP 2: DEFINE CONDITIONS FOR ROUTES MATCHING
   */
  const isAuthRoute = nextUrl.pathname.startsWith("/");

  /**
   * STEP 3: CLONE THE INCOMING URL TO ALLOW FOR REDIRECTS AND REWRITES
   */
  const url = nextUrl.clone();

  if (!token?.value && !isAuthRoute) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  /**
   * STEP 5: CHECK IF IT IS AN OPEN ROUTE WITHOUT PERMISSIONS
   */

  if (!!token?.value) {
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  } else {
    cookies.delete("");
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|icon.svg|assets|locales.*\\..*).*)",
};
