import React from "react";
import {Inter} from 'next/font/google';
import Nav from "./components/Nav/Nav";
import Footer from './components/Footer/Footer';
import './global.scss'

const inter = Inter({ subsets: ['latin']});

export const metadata  = {
    tittle: 'repetition',
    description: 'my repetition'
}


const RootLayout = ({children}: any) => {
  return (
   <html lang="eng">
      <body className={inter.className}>
          <div className="container">
            <Nav />
            {children}
            <Footer />
          </div>
      </body>
   </html>
  )
}

export default RootLayout

