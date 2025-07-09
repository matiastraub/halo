import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const t = useTranslations('PrivacyPolicy')
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
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="mb-6 text-gray-700 leading-relaxed text-justify">{t('desc')}</p>

              <div className="space-y-8">
                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-1')}</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        {t.rich('list-1-1', {
                          strong: (chunks) => <strong>{chunks}</strong>
                        })}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>
                        {t.rich('list-1-2', {
                          strong: (chunks) => <strong>{chunks}</strong>
                        })}
                      </span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-2')}</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-2-1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-2-2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-2-3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-2-4')}</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-3')}</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-3-1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-3-2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-3-3')}</span>
                    </li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-4')}</h4>
                  <p className="text-gray-700 leading-relaxed">{t('text-4')}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-5')}</h4>
                  <p className="text-gray-700 leading-relaxed">{t('text-5')}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-6')}</h4>
                  <p className="text-gray-700 mb-3">{t('text-6-intro')}</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-6-1')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-6-2')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{t('list-6-3')}</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    {t.rich('text-6-contact', {
                      a: (chunks) => (
                        <Link
                          href="mailto:privacidad@halo.cl"
                          className="text-blue-600 hover:underline"
                        >
                          {chunks}
                        </Link>
                      )
                    })}
                  </p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-7')}</h4>
                  <p className="text-gray-700 leading-relaxed">{t('text-7')}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-8')}</h4>
                  <p className="text-gray-700 leading-relaxed">{t('text-8')}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-9')}</h4>
                  <p className="text-gray-700 leading-relaxed">{t('text-9')}</p>
                </section>

                <section>
                  <h4 className="text-xl font-semibold mb-4 text-gray-800">{t('title-10')}</h4>
                  <p className="text-gray-700 mb-3">{t('text-10-intro')}</p>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-gray-700">
                      <strong>{t('text-10-email-label')}</strong>{' '}
                      <a href="mailto:privacidad@halo.cl" className="text-blue-600 hover:underline">
                        {t('text-10-email')}
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <strong>{t('text-10-address-label')}</strong> {t('text-10-address')}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
