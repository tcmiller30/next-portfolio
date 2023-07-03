import './globals.css'
import { montserrat } from './fonts.js'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-gray-900 text-slate-100`}>{children}</body>
    </html>
  )
}
