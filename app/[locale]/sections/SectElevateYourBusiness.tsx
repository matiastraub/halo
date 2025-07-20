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
  for (let i = 1; i <= 4; i++) {
    lst.push(<List key={`list-elevate-${i}`} text={t(`elevateYourBusinessList-${i}`)} />)
  }
  return lst
}

export default function SectElevateYourBusiness() {
  const t = useTranslations('Home')
  return (
    <>
      <section>
        <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
          <div className="flex flex-col-reverse items-stretch lg:flex-row">
            <div className="lg:w-1/2 lg:pr-20">
              <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] sm:text-5xl lg:text-left">
                {t.rich('elevateYourBusinessTitle', {
                  span: (chunks) => <span>{chunks}</span>
                })}
              </h2>
              <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
                {t('elevateYourBusinessDesc')}
              </p>
              <ul className="mb-12 list-disc pl-8 text-xl">
                <AllList t={t} />
              </ul>
              <div className="flex justify-center lg:block">
                <Link
                  href="#services"
                  className="mb-12 inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
                >
                  {t('btnStartYourTransformation')}
                </Link>
              </div>
              <div className="flex items-center testimonials" style={{ display: 'none' }}>
                <img
                  src="images/testimonial03.jpg"
                  alt="Client Testimonial"
                  className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
                />
                <div>
                  <i
                    className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                    aria-hidden="true"
                  ></i>
                  <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                    {t('testimonialsText-3')}
                  </p>
                  <i
                    className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                    aria-hidden="true"
                  ></i>
                  <p>
                    <span className="font-semibold text-[var(--dark-text-color)]">
                      {t('testimonialsName-3')}
                    </span>
                    <span className="pl-2 font-semibold text-[var(--primary-color)]">
                      {t('testimonialsTitle-3')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-1 items-center justify-center rounded-[var(--button-rounded-radius)] bg-[var(--light-background-color)] p-6 lg:w-1/2">
              <img
                className="mx-auto rounded-[var(--button-rounded-radius)]"
                src="images/phone-sqr.jpg"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
