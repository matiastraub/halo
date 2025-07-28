'use-client'
import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Home, Settings, User, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)

  // Menu items configuration
  const menuItems = [
    {
      id: 1,
      title: 'Servicios',
      icon: <Settings className="w-5 h-5" />,
      href: '#servicios',
      submenu: [
        { title: 'Agentes de IA', href: '#agentes-ia' },
        { title: 'Automatización', href: '#automatizacion' },
        { title: 'Capacitación TI', href: '#capacitacion' },
        { title: 'Consultoría', href: '#consultoria' }
      ]
    },
    {
      id: 2,
      title: 'Soluciones',
      icon: <Home className="w-5 h-5" />,
      href: '#soluciones',
      submenu: [
        { title: 'Para Empresas', href: '#empresas' },
        { title: 'Para Startups', href: '#startups' },
        { title: 'Para Desarrolladores', href: '#desarrolladores' }
      ]
    },
    {
      id: 3,
      title: 'Nosotros',
      icon: <User className="w-5 h-5" />,
      href: '#nosotros'
    },
    {
      id: 4,
      title: 'Contacto',
      icon: <Mail className="w-5 h-5" />,
      href: '#contacto'
    }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveSubmenu(null)
  }

  const toggleSubmenu = (itemId: number | null) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (event: { key: string }) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
        setActiveSubmenu(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="relative">
      {/* Header */}
      <header className="relative z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <Link href="/" className="text-blue-600 hover:text-blue-700 transition-colors">
                <div className="h-12 w-24 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                  HALO
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.title}
                </Link>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Comenzar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                />
                <X
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="text-lg font-bold text-gray-800">Menu</div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.id} className="px-4">
                  <div className="flex items-center">
                    {item.submenu ? (
                      <button
                        onClick={() => toggleSubmenu(item.id)}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-medium text-gray-700">{item.title}</span>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                            activeSubmenu === item.id ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="flex items-center space-x-3 w-full p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {item.icon}
                        <span className="font-medium text-gray-700">{item.title}</span>
                      </Link>
                    )}
                  </div>

                  {/* Submenu */}
                  {item.submenu && (
                    <div
                      className={`mt-2 ml-8 space-y-1 overflow-hidden transition-all duration-200 ${
                        activeSubmenu === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {item.submenu.map((subitem, index) => (
                        <Link
                          key={index}
                          href={subitem.href}
                          onClick={handleLinkClick}
                          className="block p-2 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-gray-800 transition-colors"
                        >
                          {subitem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Menu Footer */}
          <div className="border-t border-gray-200 p-4 space-y-3">
            <button
              onClick={handleLinkClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Comenzar
            </button>
            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            IA que Ilumina tu <span className="text-blue-600">Flujo de Trabajo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Impulsa tu negocio con agentes de IA, automatización inteligente, capacitación en TI y
            soluciones tecnológicas a tu medida.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
            Descubre Nuestras Soluciones
          </button>
        </div>
      </main>
    </div>
  )
}

export default MobileMenu
