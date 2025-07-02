// i18n.ts
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '../config.ts'

type Locale = 'es' | 'en'

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = locale || 'es' // Default to 'es' if locale is undefined

  if (!resolvedLocale || !locales.includes(resolvedLocale as Locale)) return notFound()
  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default
  }
})
