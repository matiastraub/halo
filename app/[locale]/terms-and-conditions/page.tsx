import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function TermsAndConditions() {
  const t = useTranslations('TermsAndConditions')
  return (
    <div>
      <section className="py-20 code-section" id="privacy-policy">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
            {t('title')}
          </h2>
          <h3 className="mb-12 text-center text-xl text-[var(--gray-text-color)]">
            {t.rich('date', {
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </h3>

          <div className="max-w-4xl mx-auto text-left space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8 text-gray-700 leading-relaxed">
              <p>{t('desc')}</p>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-1')}</h4>
                <p>{t('text-1')}</p>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-2')}</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-2-1')}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-2-2')}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-2-3')}
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-3')}</h4>
                <p>{t('text-3')}</p>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-4')}</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-4-1')}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-4-2')}
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-5')}</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-5-1')}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-5-2')}
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {t('list-5-3')}
                  </li>
                </ul>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-6')}</h4>
                <p>{t('text-6')}</p>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-7')}</h4>
                <p>
                  {t.rich('text-7', {
                    privacyLink: (chunks) => (
                      <Link href="/privacy-policy" className="text-blue-600 underline">
                        {chunks}
                      </Link>
                    ),
                    emailLink: (chunks) => (
                      <a href="mailto:privacidad@halo.cl" className="text-blue-600 underline">
                        {chunks}
                      </a>
                    )
                  })}
                </p>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-8')}</h4>
                <p>{t('text-8')}</p>
              </section>

              <section>
                <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-9')}</h4>
                <p>{t('text-9')}</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
