// App.tsx
'use client'
import { useEffect } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'

export default function ChatN8N() {
  const webhookUrl = '/api/chatbox'
  useEffect(() => {
    createChat({
      webhookUrl: webhookUrl,
      target: '#n8n-chat',
      chatInputKey: 'chatInput',
      loadPreviousSession: true,
      initialMessages: ['¡Hola! 👋', 'Mi nombre es Catalina. Estoy aquí para ayudarte'],
      i18n: {
        en: {
          title: 'Hola de Halo👋',
          subtitle: 'Estamos contigo 24/7.',
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu pregunta..',
          closeButtonTooltip: ''
        }
      }
    })
  }, [])

  return <div></div>
}
