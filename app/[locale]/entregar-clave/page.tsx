'use client'
//import ContactForm from 'app/components/halo/ContactForm'
import { useTranslations } from 'next-intl'
import DynamicForm, { FormField } from 'app/components/halo/DynamicForm'

const formFields: FormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Enter your name',
    required: true,
    minLength: 2
  },
  {
    name: 'lastname',
    type: 'text',
    label: 'LastName',
    placeholder: 'lastname',
    required: true,
    minLength: 2
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    minLength: 2
  },
  {
    name: 'category',
    type: 'select',
    label: 'Category',
    required: true,
    options: [
      { value: 'support', label: 'Support' },
      { value: 'sales', label: 'Sales' }
    ]
  }
]

export default function EntregarClave() {
  const handleSubmit = async (data: Record<string, unknown>) => {
    // Your form submission logic
    console.log('Form data:', data)
  }

  const t = useTranslations('EntregarClave')
  return (
    <section className="py-20 code-section" id="privacy-policy">
      <div className="container mx-auto px-6">
        <h1 className="mb-6 text-center text-6xl font-bold [font-family:var(--font-family-heading)]">
          Entregar Clave
        </h1>
        <p className="mb-12 text-center text-xl text-[var(--dark-text-color)]">
          {t('contactFormDesc')}
        </p>
        <div className="max-w-4xl mx-auto text-left space-y-4">
          <DynamicForm
            fields={formFields}
            onSubmit={handleSubmit}
            submitButtonText="Send Message"
            resetOnSuccess={true}
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* <ContactForm t={t} /> */}
        </div>
      </div>
    </section>
  )
}
