import Header from './header'
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import { Url } from 'next/dist/shared/lib/router/router';import { Nav } from 'react-bootstrap';
('https://fonts.googleapis.com/css2?family=Arimo:wght@500&display=swap');
 import favicon from '@/public/favicon.ico'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'New Truckers Driving Academy',
  description: 'Your Gateway to Professional Trucking in Calgary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}>
        <div className='min-vh-100 d-flex flex-column'>
          {/* <Header /> */}
          <Navbar />
          <div className='flex-grow-1 layoutpadding'>
            {children}
            </div>
          <Footer />
           </div>
      </body>


    </html>
  )
}
