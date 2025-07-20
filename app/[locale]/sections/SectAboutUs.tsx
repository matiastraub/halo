/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const List = (props: { text: string }) => {
  const { text } = props
  return <li className="mb-3">{text}</li>
}

type AllListProps = { t: (key: string) => string }
const AllList = (props: AllListProps) => {
  const { t } = props
  const lst = []
  for (let i = 2; i <= 4; i++) {
    lst.push(<List key={`about-list-${i}`} text={t(`aboutUsList-${i}`)} />)
  }
  return lst
}

export default function SectAboutUs() {
  const t = useTranslations('AboutUs')
  return (
    <section className="code-section" id="aboutUs">
      <div className="container mx-auto px-6 lg:pt-24">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
            <img className="mx-auto rounded-3xl" src="images/hero-illustration.png" alt="Hero" />
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
              {t.rich('aboutUsTitle', {
                span: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-justify">
              {t('aboutUsDesc')}
            </p>
            <ul className="mb-12 list-disc pl-6 text-xl">
              <AllList t={t} />
            </ul>
            <div className="flex justify-center lg:block">
              <Link
                href="#contact"
                className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                {t('btnExploreOurServices')}
              </Link>
            </div>
            <div className="flex items-center" style={{ display: 'none' }}>
              <img
                src="images/testimonial02.jpg"
                alt="Happy Client"
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                data-landingsite-gallery-type="image"
                data-testimonial-image=""
                data-dont-replace=""
                data-media="{&amp;quot;id&amp;quot;:&amp;quot;2172939929&amp;quot;,&amp;quot;src&amp;quot;:&amp;quot;iStock&amp;quot;,&amp;quot;type&amp;quot;:&amp;quot;image&amp;quot;}"
              />
              <div>
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  {t('testimonialsText-2')}
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p>
                  <span className="font-semibold text-[var(--dark-text-color)]">
                    {' '}
                    {t('testimonialsName-2')}
                  </span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    {t('testimonialsTitle-2')}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
