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

export default Alert
