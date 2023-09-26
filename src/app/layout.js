import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dropout Analysis',
  description: 'Unlocking the Secrets of Dropout Analysis: Discover Strategies to Improve Student Retention and Academic Success. Explore Effective Methods and Insights Today',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}  >
        <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
        <Navbar className='' />
        {children}
        <Footer />
      </body>
    </html>
  )
}
