import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import '../globals.css'
import '../main.css'
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'

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
  title: 'Halo - Un aura de IA responsable',
  description:
    'Impulsa tu negocio con agentes de IA, automatización inteligente, capacitación en TI y soluciones tecnológicas a tu medida.'
}

export default async function RootLayout(props: Props) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID

  const locale = props.params.locale

  const messages = await getMessages({ locale })
  if (locale)
    return (
      <html lang={locale} className="h-full bg-white">
        <head>
          <Script
            src="https://kit.fontawesome.com/8e98006f77.js"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          {GA_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
              </Script>
            </>
          )}
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <NextIntlClientProvider messages={messages} locale={locale}>
            <div className="frame-root">
              <div className="frame-content">
                <div className="[font-family:var(--font-family-body)]">
                  <div>
                    <header className="relative z-50 code-section" id="global-header">
                      <NavBar />
                    </header>
                  </div>
                  {props.children}
                  <div>
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </NextIntlClientProvider>
        </body>
      </html>
    )
}
