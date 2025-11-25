'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useSearchParams } from 'next/navigation'

import DynamicForm, { FormField } from 'app/components/halo/DynamicForm'

import Alert from 'app/components/halo/Alert'
import Term from '../../../contracts/terms'

const termDemo = Term('demo')

export default function Demo() {
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const searchParams = useSearchParams()
  const company = searchParams.get('company') ?? ''
  const name = searchParams.get('name') ?? ''
  const lastname = searchParams.get('lastname') ?? ''
  const email = searchParams.get('email') ?? ''

  const formFields: FormField[] = [
    {
      name: 'company',
      type: 'text',
      label: 'Empresa',
      placeholder: 'Nombre Empresa',
      required: true,
      minLength: 2,
      defaultValue: company
    },
    {
      name: 'name',
      type: 'text',
      label: 'Nombre Contacto',
      placeholder: '',
      required: true,
      minLength: 2,
      defaultValue: name
    },
    {
      name: 'lastname',
      type: 'text',
      label: 'Apellido Contacto',
      placeholder: '',
      required: true,
      minLength: 2,
      defaultValue: lastname
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
      minLength: 2,
      defaultValue: email
    },
    {
      name: 'channel',
      type: 'select',
      label: 'Canal',
      required: false,
      options: [
        { value: 'Yapo', label: 'Yapo' }
        //        { value: 'sales', label: 'Sales' }
      ]
    },
    {
      label: 'Término y condiciones',
      name: 'textarea',
      type: 'textarea',
      required: true,
      defaultValue: termDemo
      // onChange: (val: string) => setTextAreaData(val)
    },
    {
      name: 'terms',
      type: 'checkbox',
      label: 'He leído los términos y condiciones',
      required: true
    }
  ]
  console.log('company: ', company)
  const handleSubmit = async (formData: Record<string, unknown>) => {
    // Your form submission logic
    console.log('Form data:', formData)
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData })
      })

      const data = await res.json()

      if (res.ok) {
        // Success
        setAlert({
          type: 'success',
          message: t('successMessage') || 'Tu mensaje ha sido enviado!!'
        })
        setTimeout(() => {
          window.location.href = 'https://halo.cl'
        }, 5000)
      } else {
        // Server error
        throw new Error(data?.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setAlert({
        type: 'error',
        message: t('errorMessageNotSent') || 'Failed to send message. Please try again later.'
      })
    } finally {
      //setIsSubmitting(false)
    }
  }

  const t = useTranslations('Demo')
  const closeAlert = () => {
    setAlert(null)
  }
  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}

      <section className="py-20 code-section" id="privacy-policy">
        <div className="container mx-auto px-6">
          <h1 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
            {t('title')}
          </h1>
          <p className="mb-12 text-center text-xl text-[var(--dark-text-color)]">{t('desc')}</p>
          <div className="max-w-4xl mx-auto text-left space-y-4">
            <DynamicForm
              fields={formFields}
              onSubmit={handleSubmit}
              submitButtonText="Enviar"
              resetOnSuccess={true}
            />
          </div>
        </div>
      </section>
    </>
  )
}
