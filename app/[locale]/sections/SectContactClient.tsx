'use client'
/* eslint-disable @next/next/no-img-element */
import { useTranslations } from 'next-intl'
import { useState } from 'react'

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
const Alert = ({
  type,
  message,
  onClose
}: {
  type: 'success' | 'error'
  message: string
  onClose: () => void
}) => {
  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50'
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800'
  const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200'
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400'
  const icon = type === 'success' ? 'fa-solid fa-check-circle' : 'fa-solid fa-exclamation-triangle'

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm rounded-lg border ${borderColor} ${bgColor} p-4 shadow-lg`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <i className={`${icon} ${iconColor}`} aria-hidden="true"></i>
        </div>
        <div className="ml-3">
          <p className={`text-sm font-medium ${textColor}`}>{message}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              type="button"
              className={`inline-flex rounded-md p-1.5 ${textColor} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-gray-50`}
              onClick={onClose}
            >
              <span className="sr-only">Dismiss</span>
              <i className="fa-solid fa-times h-3 w-3" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ContactForm = (props: { t: (key: string) => string }) => {
  const { t } = props
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = t('errorNameRequired') || 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = t('errorEmailRequired') || 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t('errorEmailInvalid') || 'Please enter a valid email address'
    }

    if (!formData.category) {
      newErrors.category = t('errorCategoryRequired') || 'Please select a category'
    }

    if (!formData.message.trim()) {
      newErrors.message = t('errorMessageRequired') || 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('errorMessageTooShort') || 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Check if form is valid for button state
  const isFormValid = (): boolean => {
    return !!(
      formData.name.trim() &&
      formData.email.trim() &&
      validateEmail(formData.email) &&
      formData.category
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setAlert(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData })
      })

      const data = await res.json()

      if (res.ok) {
        // Success
        setAlert({
          type: 'success',
          message:
            t('successMessageSent') ||
            "Your message has been sent successfully! We'll get back to you soon."
        })

        // Reset form
        setFormData({
          name: '',
          email: '',
          category: '',
          message: ''
        })
      } else {
        // Server error
        throw new Error(data.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setAlert({
        type: 'error',
        message: t('errorMessageNotSent') || 'Failed to send message. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeAlert = () => {
    setAlert(null)
  }

  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}

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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors ${
              errors.name ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder={t('contactFormNamePlaceholder')}
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder={t('contactFormEmailPlaceholder')}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors bg-white ${
              errors.category ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">{t('contactFormCategoryPlaceholder')}</option>
            <option value={t('contactFormCategory-1')}>{t('contactFormCategory-1')}</option>
            <option value={t('contactFormCategory-2')}>{t('contactFormCategory-2')}</option>
            <option value={t('contactFormCategory-3')}>{t('contactFormCategory-3')}</option>
            <option value={t('contactFormCategory-4')}>{t('contactFormCategory-4')}</option>
            <option value={t('contactFormCategory-5')}>{t('contactFormCategory-5')}</option>
          </select>
          {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
            style={{ display: 'auto' }}
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
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors resize-vertical ${
              errors.message ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder={t('contactFormMessagePlaceholder')}
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
        </div>

        <div className="flex justify-center lg:block">
          <button
            type="submit"
            style={{ cursor: isFormValid() ? 'pointer' : '' }}
            disabled={!isFormValid() || isSubmitting}
            className={`inline-flex items-center justify-center rounded px-[var(--button-padding-x)] py-[var(--button-padding-y)] text-lg font-medium transition-colors ${
              isFormValid() && !isSubmitting
                ? 'bg-[var(--primary-button-bg-color)] text-[var(--primary-button-text-color)] hover:bg-[var(--primary-button-hover-bg-color)] hover:text-[var(--primary-button-hover-text-color)]'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                {t('btnSending') || 'Sending...'}
              </>
            ) : (
              t('btnSendMessage')
            )}
          </button>
        </div>
      </form>
    </>
  )
}

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
