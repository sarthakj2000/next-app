// import { NextRequest, NextResponse } from "next/server";


//for protecting routes we use this


import middleware from "next-auth/middleware"

export default middleware

// export function middleware(request:NextRequest){
//     return NextResponse.redirect(new URL("/new-page",request.url))
// }

export const config={
    //* zero or more parmeter
    //+ one or more
    //?: zero or one
    matcher:["/users/:id+"]
}