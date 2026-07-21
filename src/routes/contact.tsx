import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/contact-form.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <div className="max-w-xl mx-auto px-5 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 mb-8 hover:text-emerald-800"
        >
          <ArrowLeft className="w-4 h-4" /> Back home
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-3">Get in touch</h1>
        <p className="text-stone-600 leading-relaxed mb-8">
          Questions about our programs, volunteering, or partnering with
          Wellspring Foundation? Send us a message and we'll get back to you.
        </p>

        {submitted ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 text-emerald-800 p-6 font-medium">
            Thanks for reaching out — we'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={fields.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={fields.message}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-stone-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-emerald-700 text-white font-semibold px-7 py-3 hover:bg-emerald-800 transition-colors"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
