import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es',
  pathnames: {
    '/privacy-policy': {
      en: '/privacy-policy',
      es: '/politica-de-privacidad'
    },
    '/terms-and-conditions': {
      en: '/terms-and-conditions',
      es: '/terminos-y-condiciones'
    }
  }
})

export type Locale = (typeof routing.locales)[number]

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
