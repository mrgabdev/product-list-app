import type { Metadata } from 'next'
import '@/assets/styles/index.scss'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const RedHatText = localFont({
  src: [
    {
      path: '../assets/fonts/RedHatText-VariableFont_wght.ttf',
      style: 'normal'
    },
    {
      path: '../assets/fonts/RedHatText-Italic-VariableFont_wght.ttf',
      style: 'italic'
    }
  ]
})

export const metadata: Metadata = {
  title: 'Product List',
  description: 'Product List with cart'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={RedHatText.className}>{children}</body>
    </html>
  )
}
