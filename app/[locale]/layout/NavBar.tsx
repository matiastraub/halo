import Link from 'next/link'
import { useTranslations } from 'next-intl'
export default function NavBar() {
  const t = useTranslations('Nav')
  return (
    <nav className="container mx-auto py-10">
      <div className="flex items-center justify-between relative">
        <div className="pl-6 text-xl font-bold">
          <Link
            href="/"
            className="text-[var(--primary-color)] [font-family:var(--font-family-heading)] lg:text-3xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="../images/logo.avif" alt="Halo Logo" className="h-20" />
          </Link>
        </div>
        <button
          id="mobile-menu-button"
          data-collapse-toggle="navigation-menu"
          type="button"
          className="pr-6 text-[var(--dark-text-color)] lg:hidden"
          aria-controls="navigation-menu"
          aria-expanded="false"
          aria-label="Navigation Menu"
        >
          <i className="fa-regular fa-bars feather feather-menu" aria-hidden="true"></i>
        </button>
        <div
          id="navigation-menu"
          className="hidden absolute left-0 top-full mt-4 w-full bg-white pb-4 lg:static lg:mt-0 lg:flex flex-1 lg:items-center lg:justify-between lg:bg-transparent lg:pb-0"
        >
          <ul className="flex flex-col lg:px-6 lg:flex-row flex-1 lg:justify-center lg:items-center lg:space-y-0 lg:space-x-8">
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="#aboutUs" className="text-[var(--dark-text-color)]">
                {t('aboutUs')}
              </Link>
            </li>
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="#services" className="text-[var(--dark-text-color)]">
                {t('services')}
              </Link>
            </li>
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="#benefits" className="text-[var(--dark-text-color)]">
                {t('benefits')}
              </Link>
            </li>
            <li
              style={{ display: 'none' }}
              className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0"
            >
              <div className="group relative w-full">
                <button
                  type="button"
                  className="flex w-full items-center gap-1 text-[var(--dark-text-color)] lg:justify-center"
                >
                  <span>{t('resources')}</span>
                  <i
                    className="fa-regular fa-chevron-down ml-1 transition lg:group-hover:rotate-[180deg]"
                    aria-hidden="true"
                  ></i>
                </button>
                <div className="left-0 top-full z-50 hidden w-full text-black lg:absolute lg:w-[260px] lg:pt-2 lg:group-hover:block">
                  <div className="mt-2 bg-white p-1.5 lg:rounded-lg lg:border lg:border-gray-200 lg:shadow-sm">
                    <Link
                      className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                      href="/blog"
                    >
                      {t('blog')}
                    </Link>
                    <Link
                      className="block cursor-pointer border-b border-solid px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                      href="/case-studies"
                    >
                      {t('caseStudies')}
                    </Link>
                    <Link
                      className="block cursor-pointer px-3 py-1.5 hover:bg-[#1900410a] lg:py-3 lg:font-medium"
                      href="/faq"
                    >
                      {t('faq')}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li
              style={{ display: 'none' }}
              className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0"
            >
              <Link href="/careers" className="text-[var(--dark-text-color)]">
                {t('careers')}
              </Link>
            </li>
            <li className="flex items-center p-2 border-t border-gray-200 md:border-t-transparent md:p-0">
              <Link href="#contact" className="text-[var(--dark-text-color)]">
                {t('contactUs')}
              </Link>
            </li>
          </ul>
          <div className="flex flex-col mt-4 lg:flex-row items-center space-y-4 lg:mt-0 lg:space-y-0 lg:space-x-4 text-sm lg:text-base">
            <Link
              style={{ visibility: 'hidden' }}
              href="/dashboard"
              className="rounded bg-[var(--primary-button-bg-color)] px-4 py-2 text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)]"
            >
              {t('btnLogin')}
            </Link>
            <Link
              style={{ visibility: 'hidden' }}
              href="/login"
              className="px-4 py-2 text-[var(--dark-text-color)]"
            >
              {t('btnSignUp')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
