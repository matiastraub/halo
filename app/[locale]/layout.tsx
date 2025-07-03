import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import '../main.css'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

type Props = Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Halo - IA que Ilumina tu Flujo de Trabajo',
  description:
    'Impulsa tu negocio con agentes de IA, automatización inteligente, capacitación en TI y soluciones tecnológicas a tu medida.'
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = params
  const messages = await getMessages({ locale })
  if (locale)
    return (
      <html lang={locale} className="h-full bg-white">
        <Script
          src="https://kit.fontawesome.com/8e98006f77.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        </body>
      </html>
    )
}
