'use client'
/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const ContactInfo = (props: { icon: string; title: string; content: string }) => {
  const { icon, title, content } = props
  return (
    <div className="mb-6 flex items-start">
      <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary-color)]">
        <i className={`${icon} text-white`} aria-hidden="true"></i>
      </div>
      <div>
        <span className="mb-2 text-lg font-semibold text-[var(--dark-text-color)]">{title}</span>
        <span className="text-[var(--dark-text-color)]">{content}</span>
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
      content: t('contactEmailContent')
    },
    {
      icon: 'fa-solid fa-phone',
      title: t('contactPhoneTitle'),
      content: t('contactPhoneContent')
    },
    {
      icon: 'fa-solid fa-map-marker-alt',
      title: t('contactAddressTitle'),
      content: t('contactAddressContent')
    }
  ]

  return contactItems.map((item, index) => (
    <ContactInfo
      key={`contact-info-${index}`}
      icon={item.icon}
      title={item.title}
      content={item.content}
    />
  ))
}

const ContactForm = (props: { t: (key: string) => string }) => {
  const { t } = props
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
          style={{ display: 'none' }}
        >
          {t('contactFormName')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors"
          placeholder={t('contactFormNamePlaceholder')}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
          style={{ display: 'none' }}
        >
          {t('contactFormEmail')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors"
          placeholder={t('contactFormEmailPlaceholder')}
        />
      </div>

      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
          style={{ display: 'none' }}
        >
          {t('contactFormCategory')}
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors bg-white"
        >
          <option value="">{t('contactFormCategoryPlaceholder')}</option>
          <option value="1">{t('contactFormCategory-1')}</option>
          <option value="2">{t('contactFormCategory-2')}</option>
          <option value="3">{t('contactFormCategory-3')}</option>
          <option value="4">{t('contactFormCategory-4')}</option>
          <option value="5">{t('contactFormCategory-5')}</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
          style={{ display: 'none' }}
        >
          {t('contactFormMessage')}
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors resize-vertical"
          placeholder={t('contactFormMessagePlaceholder')}
        />
      </div>

      <div className="flex justify-center lg:block">
        <button
          type="submit"
          className="inline-block rounded bg-[var(--primary-button-bg-color)] px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)] transition-colors"
        >
          {t('btnSendMessage')}
        </button>
      </div>
    </form>
  )
}

export default function SectContact() {
  const t = useTranslations('Contact')

  return (
    <section className="code-section" id="contact">
      <div className="container mx-auto px-6 lg:pt-24">
        <div className="flex flex-col items-stretch lg:flex-row">
          <div className="flex flex-1 items-center justify-center rounded-3xl bg-[var(--light-background-color)] p-6 lg:w-1/2">
            <img
              className="mx-auto rounded-3xl"
              src="images/business-strategy.webp"
              alt="Contact Us"
            />
          </div>
          <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
            <h2 className="mb-4 text-center text-3xl font-bold [font-family:var(--font-family-heading)] lg:text-left lg:text-5xl">
              {t('contactTitle')}
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
