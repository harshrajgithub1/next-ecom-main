import { NextResponse } from 'next/server'

export function middleware(req) {
    const path = req.nextUrl.pathname;
    const pbPath = path === "/login" || path === "/register" || path === "/reset-password" || path === "/forgot-password";
console.log(path);
    // Use the Cookies header from the request headers
    const tokenMatch = JSON.parse(sessionStorage.getItem('token'));
    const token = tokenMatch ? tokenMatch.access_token : '';

    if (pbPath && token) {
console.log(path);
return NextResponse.redirect(new URL(path, req.nextUrl));
    }
    if (!pbPath && !token) {
console.log(path);
return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/my-account', '/my-account/:path*', '/dashboard', '/dashboard/:path*'],
}