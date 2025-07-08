'use client'
import { useState, useRef, useEffect } from 'react'
import { SendHorizonal } from 'lucide-react'

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola me llamo Catalina ! ¿En qué puedo ayudarte?' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement | null>(null)

  const sendMessage = async () => {
    if (!input.trim()) return
    const userMessage = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setLoading(true)
    setInput('')

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, userMessage] })
    })

    const data = await res.json()
    setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    setLoading(false)
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 w-96 max-h-[80vh] rounded-2xl shadow-xl border border-gray-200 bg-white flex flex-col overflow-hidden z-50">
      <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-gray-50 text-sm">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`px-4 py-2 rounded-xl max-w-[80%] ${
                msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white border text-gray-800'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-400">Escribiendo...</div>}
        <div ref={bottomRef}></div>
      </div>
      <div className="flex border-t items-center px-2 py-1 bg-white">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Escribe tu pregunta..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 text-blue-500 hover:text-blue-600"
          title="Enviar"
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  )
}
