'use client'
import React, { useState } from 'react'
import Alert from './Alert'
import { useTranslations } from 'next-intl'

export default function UnsubscribeForm(props: { email: string }) {
  const email = props.email
  const t = useTranslations('Unsubscribe')
  const [formData, setFormData] = useState({
    email: '',
    reason: '',
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

    // if (!formData.email.trim()) {
    //   newErrors.email = t('errorEmailRequired') || 'Email is required'
    // } else if (!validateEmail(formData.email)) {
    //   newErrors.email = t('errorEmailInvalid') || 'Please enter a valid email address'
    // }

    if (!formData.reason) {
      newErrors.reason = t('errorReasonRequired') || 'Please select a reason'
    }

    // if (!formData.message.trim()) {
    //   newErrors.message = t('errorMessageRequired') || 'Message is required'
    // }
    // else if (formData.message.trim().length < 10) {
    //   newErrors.message = t('errorMessageTooShort') || 'Message must be at least 10 characters long'
    // }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Check if form is valid for button state
  const isFormValid = (): boolean => {
    return !!(
      (email.trim() && validateEmail(email)) ||
      (formData.email.trim() && validateEmail(formData.email) && formData.reason)
    )
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      email: name === 'email' ? value : prev.email || email // Use provided email if not set
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
      const res = await fetch('/api/unsubscribe', {
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
          email: '',
          reason: '',
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
            htmlFor="email"
            className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
            style={{ display: 'none' }}
          >
            {t('UnsubscribeFormEmail')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email || formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors ${
              errors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder={t('UnsubscribeFormEmailPlaceholder')}
            disabled={true}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
            style={{ display: 'none' }}
          >
            {t('UnsubscribeFormReason')}
          </label>
          <select
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors bg-white ${
              errors.reason ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">{t('UnsubscribeFormReasonPlaceholder')}</option>
            <option value={t('UnsubscribeFormReason-1')}>{t('UnsubscribeFormReason-1')}</option>
            <option value={t('UnsubscribeFormReason-2')}>{t('UnsubscribeFormReason-2')}</option>
            <option value={t('UnsubscribeFormReason-3')}>{t('UnsubscribeFormReason-3')}</option>
            <option value={t('UnsubscribeFormReason-4')}>{t('UnsubscribeFormReason-4')}</option>
            <option value={t('UnsubscribeFormReason-5')}>{t('UnsubscribeFormReason-5')}</option>
          </select>
          {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason}</p>}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--dark-text-color)] mb-2"
            style={{ display: 'auto' }}
          >
            {t('UnsubscribeFormMessage')}
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
            placeholder={t('UnsubscribeFormMessagePlaceholder')}
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
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin mr-2" aria-hidden="true"></i>
                {t('btnSending') || 'Enviando...'}
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
