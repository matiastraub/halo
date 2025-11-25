import React, { useState, useCallback, JSX } from 'react'
import { useTranslations } from 'next-intl'

// Types and Interfaces
export interface FormFieldOption {
  value: string
  label: string
}

type DynamicFormFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'select'
  | 'textarea'
  | 'checkbox'
  | 'radio'
  | 'date'
  | 'password'

export interface FormField {
  name: string
  type: DynamicFormFieldType
  label: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  defaultValue?: string | number | boolean

  // Validation
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
  pattern?: string

  // Field-specific props
  options?: FormFieldOption[] // for select and radio
  rows?: number // for textarea
  step?: number // for number inputs

  // Custom validation
  customValidation?: (value: unknown, formData: Record<string, unknown>) => string | null

  // Error messages
  requiredMessage?: string
  invalidMessage?: string
  minLengthMessage?: string
  maxLengthMessage?: string
  minMessage?: string
  maxMessage?: string

  // Additional props
  description?: string
  className?: string
}

export interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  onClose: () => void
}

export interface DynamicFormProps {
  fields: FormField[]
  onSubmit: (data: Record<string, unknown>) => Promise<void>
  submitButtonText?: string
  submitButtonClass?: string
  formClassName?: string
  fieldClassName?: string
  errorClassName?: string
  loadingText?: string
  successMessage?: string
  errorMessage?: string
  resetOnSuccess?: boolean
  validateOnChange?: boolean
  showRequiredIndicator?: boolean
  t?: (key: string) => string // Translation function
}

// Alert Component
const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
  const alertClasses = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  }

  return (
    <div className={`p-4 mb-4 border rounded-lg ${alertClasses[type]}`}>
      <div className="flex justify-between items-start">
        <span className="flex-1">{message}</span>
        <button
          onClick={onClose}
          className="ml-4 text-xl leading-none hover:opacity-70 focus:outline-none"
          aria-label="Close alert"
        >
          ×
        </button>
      </div>
    </div>
  )
}

// Main Dynamic Form Component
const DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  submitButtonText = 'Submit',
  submitButtonClass = '',
  formClassName = '',
  fieldClassName = '',
  errorClassName = 'text-red-600 text-sm mt-1',
  loadingText = 'Submitting...',
  resetOnSuccess = true,
  validateOnChange = true,
  showRequiredIndicator = true
  //t = (key: string) => key
}) => {
  const t = useTranslations('DynamicForm')
  // Initialize form data
  const initializeFormData = useCallback((): Record<string, unknown> => {
    const initialData: Record<string, unknown> = {}
    fields.forEach((field) => {
      if (field.type === 'checkbox') {
        initialData[field.name] = field.defaultValue ?? false
      } else {
        initialData[field.name] = field.defaultValue ?? ''
      }
    })
    return initialData
  }, [fields])

  // State
  const [formData, setFormData] = useState<Record<string, unknown>>(initializeFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [alert, setAlert] = useState<{ type: AlertProps['type']; message: string } | null>(null)

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/\s/g, ''))
  }

  const validateField = (field: FormField, value: unknown): string | null => {
    // Required validation
    if (field.required) {
      if (field.type === 'checkbox' && !value) {
        return field.requiredMessage || `${field.label} ${t('isRequired')}`
      } else if (field.type !== 'checkbox' && (!value || !value.toString().trim())) {
        return field.requiredMessage || `${field.label} ${t('isRequired')}`
      }
    }

    // Skip other validations if value is empty and not required
    if (!value || (typeof value === 'string' && !value.trim())) {
      return null
    }

    // Type-specific validation
    switch (field.type) {
      case 'email':
        if (!validateEmail(value as string)) {
          return field.invalidMessage || t('validEmail')
        }
        break
      case 'tel':
        if (!validatePhone(value as string)) {
          return field.invalidMessage || t('validPhoneNumber')
        }
        break
      case 'number':
        if (isNaN(Number(value))) {
          return field.invalidMessage || t('validNumber')
        }
        break
    }

    // Length validation
    if (field.minLength && value.toString().length < field.minLength) {
      return (
        field.minLengthMessage ||
        t('minLengthChar').replace('%s', field?.minLength as unknown as string)
      )
    }
    if (field.maxLength && value.toString().length > field.maxLength) {
      return (
        field.maxLengthMessage ||
        t('maxLengthChar').replace('%s', field?.minLength as unknown as string)
      )
    }

    // Number range validation
    if (field.type === 'number') {
      const numValue = Number(value)
      if (field.min !== undefined && numValue < field.min) {
        return (
          field.minMessage || t('minLengthNumber').replace('%s', field.min as unknown as string)
        )
      }
      if (field.max !== undefined && numValue > field.max) {
        return (
          field.maxMessage || t('maxLengthNumber').replace('%s', field.max as unknown as string)
        )
      }
    }

    // Pattern validation
    if (field.pattern && !new RegExp(field.pattern).test(value.toString())) {
      return field.invalidMessage || t('invalidFormat')
    }

    // Custom validation
    if (field.customValidation) {
      const customError = field.customValidation(value, formData)
      if (customError) {
        return customError
      }
    }

    return null
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}
    let isValid = true

    fields.forEach((field) => {
      const error = validateField(field, formData[field.name])
      if (error) {
        newErrors[field.name] = error
        isValid = false
      }
    })

    setErrors(newErrors)
    return isValid
  }

  // Event handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    const newValue = type === 'checkbox' ? checked : value

    setFormData((prev) => ({
      ...prev,
      [name]: newValue
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }

    // Validate on change if enabled
    if (validateOnChange) {
      const field = fields.find((f) => f.name === name)
      if (field) {
        const error = validateField(field, newValue)
        if (error) {
          setErrors((prev) => ({
            ...prev,
            [name]: error
          }))
        }
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setAlert(null)

    try {
      await onSubmit(formData)

      setAlert({
        type: 'success',
        message: t('successMessage')
      })

      if (resetOnSuccess) {
        setFormData(initializeFormData())
        setErrors({})
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setAlert({
        type: 'error',
        message: error instanceof Error ? error.message : t('errorMessage')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Render field function
  const renderField = (field: FormField): JSX.Element => {
    const baseInputClasses = `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors ${
      errors[field.name] ? 'border-red-300' : 'border-gray-300'
    } ${field.disabled ? 'bg-gray-100 cursor-not-allowed' : ''} ${
      field.className || fieldClassName
    }`

    const commonProps = {
      id: field.name,
      name: field.name,
      required: field.required,
      disabled: field.disabled || isSubmitting,
      readOnly: field.readonly,
      onChange: handleChange
    }

    switch (field.type) {
      case 'select':
        return (
          <select
            {...commonProps}
            value={formData[field.name] as string | number | undefined}
            className={`${baseInputClasses} bg-white`}
          >
            {field.placeholder && <option value="">{field.placeholder}</option>}
            {field.options?.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )

      case 'textarea':
        return (
          <textarea
            {...commonProps}
            value={formData[field.name] as string | number | undefined}
            placeholder={field.placeholder}
            rows={field.rows || 4}
            minLength={field.minLength}
            maxLength={field.maxLength}
            className={`${baseInputClasses} resize-vertical`}
          />
        )

      case 'checkbox':
        return (
          <div className="flex items-start">
            <input
              {...commonProps}
              type="checkbox"
              checked={!!formData[field.name]}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
            />
            <label htmlFor={field.name} className="ml-2 text-sm text-gray-700">
              {field.label}
              {field.required && showRequiredIndicator && (
                <span className="text-red-500 ml-1">*</span>
              )}
            </label>
          </div>
        )

      case 'radio':
        return (
          <div className="space-y-2">
            {field.options?.map((option, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="radio"
                  id={`${field.name}-${index}`}
                  name={field.name}
                  value={option.value}
                  checked={formData[field.name] === option.value}
                  onChange={handleChange}
                  required={field.required}
                  disabled={field.disabled || isSubmitting}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor={`${field.name}-${index}`} className="ml-2 text-sm text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        )

      default:
        return (
          <input
            {...commonProps}
            type={field.type}
            value={formData[field.name] as string | number | undefined}
            placeholder={field.placeholder}
            min={field.min}
            max={field.max}
            step={field.step}
            minLength={field.minLength}
            maxLength={field.maxLength}
            pattern={field.pattern}
            className={baseInputClasses}
          />
        )
    }
  }

  return (
    <div className={formClassName}>
      {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}

      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.map((field, i) => (
          <div key={field.name + i}>
            {field.type !== 'checkbox' && (
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                {field.label}
                {field.required && showRequiredIndicator && (
                  <span className="text-red-500 ml-1">*</span>
                )}
              </label>
            )}

            {renderField(field)}

            {errors[field.name] && <p className={errorClassName}>{errors[field.name]}</p>}

            {field.description && <p className="mt-1 text-sm text-gray-500">{field.description}</p>}
          </div>
        ))}

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSubmitting
                ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
            } ${submitButtonClass}`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {loadingText}
              </>
            ) : (
              submitButtonText
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default DynamicForm
