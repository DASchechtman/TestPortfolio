import NavBar from '@/components/navBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import H1 from '@/components/headers/h1'
import H2 from '@/components/headers/h2'
import H3 from '@/components/headers/h3'
import H4 from '@/components/headers/h4'
import H5 from '@/components/headers/h5'
import H6 from '@/components/headers/h6'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome!',
  description: 'Daniel Schechtman Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const classes = `${inter.className}`
  return <>
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Merienda&display=swap" rel="stylesheet"/>
      </head>

            <body className={classes}>
              <div className="RootGrid">
                <NavBar></NavBar>
                {children}
                <Footer></Footer>
              </div>
            </body>
          </html>
        </>
}
