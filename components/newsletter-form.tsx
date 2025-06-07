"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      // In a real app, you would send this to your API
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Hubo un error al procesar tu solicitud. Por favor intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-white/10 p-4 rounded-lg text-center">
        <p className="text-lg font-medium">¡Gracias por suscribirte!</p>
        <p className="mt-2">Pronto recibirás nuestras novedades en tu correo.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Tu correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
        />
        <Button type="submit" disabled={isSubmitting} className="bg-[#39a6cf] hover:bg-[#1f749c] text-white">
          {isSubmitting ? "Enviando..." : "Suscribirme"}
        </Button>
      </div>
      {error && <p className="text-red-300 text-sm">{error}</p>}
    </form>
  )
}
