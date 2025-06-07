"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Cliente",
    content:
      "Las terapias en la Cabina AQ han transformado mi vida. Mi nivel de estrés ha disminuido considerablemente y duermo mucho mejor.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Deportista",
    content:
      "Después de mis entrenamientos, la terapia Regenerativa me ayuda a recuperarme mucho más rápido. ¡Es increíble la diferencia!",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Gerente de Recursos Humanos",
    content:
      "Implementamos las cabinas AQ en nuestra empresa y hemos visto una mejora notable en el bienestar y productividad de nuestros empleados.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex-shrink-0 w-full">
              <CardContent className="p-6 md:p-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">{testimonial.content}</p>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg z-10 hidden md:flex"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full shadow-lg z-10 hidden md:flex"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-[#1f749c]" : "bg-gray-300"}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  )
}
