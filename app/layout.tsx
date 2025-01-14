import React, { Suspense } from "react"
import NavBar from "./NavBar"
import AuthProvider from "./auth/Provider"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <AuthProvider>
      <NavBar />
   
         <main>
          {/* <Suspense fallback={<p>Loading...</p>}> */}
          {children}
          {/* </Suspense> */}
          </main>
          </AuthProvider>
          </body>
    </html>
  )
}




