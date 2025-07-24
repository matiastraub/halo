'use client'
import { useSearchParams } from 'next/navigation'
import UnsubscribeForm from 'app/components/halo/UnsubscribeForm'
import { useTranslations } from 'next-intl'

export default function Unsubscribe() {
  const searchParams = useSearchParams()
  const email = searchParams.get('email') ?? ''
  const t = useTranslations('Unsubscribe')

  if (!email) {
    return (
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-center text-3xl font-bold"> {t('title')}</h1>
        <p className="text-center text-lg mt-4">{t('missingEmail')}</p>
      </div>
    )
  }

  console.log('email: ', email)

  return (
    <div>
      <section className="py-20 code-section" id="unsubscribe">
        <div className="container mx-auto px-6">
          <h1 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
            {t('title')}
          </h1>
          <h3 className="mb-12 text-center text-xl text-[var(--dark-text-color)]">
            {' '}
            <p>{t('desc')}</p>
          </h3>
          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8 text-gray-700 leading-relaxed">
              <UnsubscribeForm email={email} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
