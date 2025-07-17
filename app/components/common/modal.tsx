'use client'
import { useEffect, useRef, useState } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showCloseButton?: boolean
  closeOnBackdropClick?: boolean
  closeOnEscapeKey?: boolean
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscapeKey = true
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (closeOnEscapeKey && event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, closeOnEscapeKey])

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent) => {
    if (closeOnBackdropClick && event.target === event.currentTarget) {
      onClose()
    }
  }

  // Focus trap - focus first focusable element when modal opens
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      if (firstElement) {
        firstElement.focus()
      }
    }
  }, [isOpen])

  // Size classes
  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative w-full ${sizeClasses[size]} transform rounded-3xl bg-white shadow-2xl transition-all`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
            {title && (
              <h3
                id="modal-title"
                className="text-xl font-bold text-[var(--dark-text-color)] [font-family:var(--font-family-heading)]"
              >
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] transition-colors"
                aria-label="Close modal"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  )
}

// Example usage component
const ModalExample = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-6">Modal Examples</h2>

      {/* Basic Modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mr-4 rounded bg-[var(--primary-button-bg-color)] px-6 py-3 text-white hover:bg-[var(--primary-button-hover-bg-color)] transition-colors"
      >
        Open Basic Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Basic Modal"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-[var(--dark-text-color)]">
            This is a basic modal with a title and close button. You can click the backdrop or press
            ESC to close it.
          </p>
          <p className="text-[var(--dark-text-color)]">
            The modal prevents body scrolling and traps focus within the modal content.
          </p>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <button
        onClick={() => setIsConfirmModalOpen(true)}
        className="mr-4 rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600 transition-colors"
      >
        Open Confirmation Modal
      </button>

      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title="Confirm Action"
        size="sm"
        closeOnBackdropClick={false}
      >
        <div className="space-y-4">
          <p className="text-[var(--dark-text-color)]">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              onClick={() => setIsConfirmModalOpen(false)}
              className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Handle delete action
                console.log('Item deleted')
                setIsConfirmModalOpen(false)
              }}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {/* Form Modal */}
      <button
        onClick={() => setIsFormModalOpen(true)}
        className="rounded bg-green-500 px-6 py-3 text-white hover:bg-green-600 transition-colors"
      >
        Open Form Modal
      </button>

      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="Create New Item"
        size="lg"
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--dark-text-color)] mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent outline-none transition-colors"
              rows={4}
              placeholder="Enter description"
            />
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={() => setIsFormModalOpen(false)}
              className="rounded bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded bg-[var(--primary-button-bg-color)] px-4 py-2 text-white hover:bg-[var(--primary-button-hover-bg-color)] transition-colors"
            >
              Create
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Modal
export { ModalExample }
