// i18n.ts
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing.ts'

type Locale = 'es' | 'en'
export default getRequestConfig(async ({ requestLocale }) => {
  let locale: string | undefined = await requestLocale
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale
  }
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
