'use client'
import ContactForm from 'app/components/halo/ContactForm'
/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'

const ContactInfo = (props: { icon: string; title: string; content: string }) => {
  const { icon, title, content } = props
  return (
    <div className="mb-2 flex items-start">
      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-color)]">
        <i className={`${icon} text-white`} aria-hidden="true"></i>
      </div>
      <div>
        <span className="mb-2 text-lg font-semibold text-[var(--dark-text-color)]">{title}</span>
        <span className="text-[var(--dark-text-color)]"> {content}</span>
      </div>
    </div>
  )
}

type AllContactInfoProps = { t: (key: string) => string }

const AllContactInfo = (props: AllContactInfoProps) => {
  const { t } = props
  const contactItems = [
    {
      icon: 'fa-solid fa-envelope',
      title: t('contactEmailTitle'),
      content: t('contactEmailContent'),
      display: true
    },
    {
      icon: 'fa-solid fa-phone',
      title: t('contactPhoneTitle'),
      content: t('contactPhoneContent'),
      display: true
    },
    {
      icon: 'fa-solid fa-map-marker-alt',
      title: t('contactAddressTitle'),
      content: t('contactAddressContent'),
      display: false
    }
  ]

  return contactItems.map((item, index) => {
    return item.display === true ? (
      <ContactInfo
        key={`contact-info-${index}`}
        icon={item.icon}
        title={item.title}
        content={item.content}
      />
    ) : null
  })
}

// Simple Alert Component (Alternative to SweetAlert)

export default function SectContact(props: { visible?: boolean }) {
  const { visible } = props
  const t = useTranslations('Contact')
  if (!visible) {
    return null
  }
  return (
    <section className="code-section" id="contact">
      <div className="container mx-auto px-6 lg:pt-24">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
            <img className="mx-auto rounded-3xl" src="images/contactUs.png" alt="Contact Us" />
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-10">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
              {t.rich('contactTitle', {
                span: (chunks) => <span>{chunks}</span>
              })}
            </h2>
            <p className="mb-6 text-center text-xl text-[var(--dark-text-color)] lg:text-left">
              {t('contactDesc')}
            </p>
            <div className="mb-12">
              <AllContactInfo t={t} />
            </div>
            <div className="mb-12">
              <ContactForm t={t} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
