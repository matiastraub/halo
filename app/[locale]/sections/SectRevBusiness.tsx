import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function SectRevBusiness() {
  const t = useTranslations('Home')

  return (
    <section
      className="bg-gradient-to-b from-[#ffffff] to-[var(--light-background-color)] lg:py-2 code-section"
      id="s2nkd0i"
    >
      <div className="container mx-auto mb-24 px-6">
        <div className="flex flex-col-reverse items-center lg:flex-row">
          <div className="mt-12 w-full lg:mt-32 lg:w-[45%] lg:pr-14">
            <h1 className="mb-4 text-center text-4xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl xl:text-6xl">
              {t('revolutionizeBusinessProcesses')}
            </h1>
            <p className="mb-12 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              {t('haloEmpowerment')}
            </p>
            <div className="mb-12 flex items-center justify-center lg:items-start lg:justify-start">
              <Link
                href="#contact"
                className="items-center rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-semibold text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]"
              >
                {t('btnDiscoverOurSolutions')}
              </Link>
            </div>
            <div className="flex items-center pb-10">
              <Image
                src="/images/Emily.jpg"
                alt="Satisfied Client"
                width={72}
                height={72}
                className="mr-4 h-[72px] w-[72px] rounded-full object-cover"
              />
              <div>
                <i
                  className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"
                  aria-hidden="true"
                ></i>
                <p className="mb-2 inline text-lg text-[var(--dark-text-color)]">
                  {t('testimonialsText-1')}
                </p>
                <i
                  className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"
                  aria-hidden="true"
                ></i>
                <p>
                  <span className="font-semibold text-[var(--dark-text-color)]">
                    {t('testimonialsName-1')}
                  </span>
                  <span className="pl-2 font-semibold text-[var(--primary-color)]">
                    {t('testimonialsTitle-1')}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full h-full lg:w-[55%] lg:pl-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="images/business-automation.png" alt="Hero" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
