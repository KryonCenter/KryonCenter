import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function KevinAscencioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Kevin Eduardo Ascencio de la Flor</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Terapeuta Cuántico y Facilitador de Procesos de Bienestar Integral
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <Link href="/nosotros" className="flex items-center text-[#1f749c] dark:text-[#39a6cf] mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Volver a Nosotros</span>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Columna Izquierda - Foto y Datos */}
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden shadow-xl mb-6">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Kevin Eduardo Ascencio de la Flor"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#1f749c] dark:text-[#39a6cf]">Especialidades</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Cabina Cuántica AQ®</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Terapia TuneUp (Acupuntura Cuántica)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Alineación Cuántica (Alphabiotismo)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna Derecha - Biografía */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">Biografía</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="mb-4 dark:text-gray-300">
                  Kevin Eduardo Ascencio de la Flor es terapeuta cuántico comprometido con el equilibrio y la
                  transformación del ser humano a través de herramientas vibracionales de alta frecuencia. Su enfoque
                  combina la sensibilidad terapéutica con el uso de tecnología cuántica avanzada, generando espacios de
                  sanación profunda y conexión interior.
                </p>
                <p className="mb-4 dark:text-gray-300">Especializado en la aplicación terapéutica de:</p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-[#1f749c] dark:text-[#39a6cf]">
                  Especialidades Terapéuticas
                </h3>
                <ul className="space-y-4">
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Cabina Cuántica AQ®:</span> dispositivo innovador que induce estados de
                    relajación profunda, libera tensiones acumuladas y armoniza el campo bioenergético del cuerpo en
                    pocos minutos.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapia TuneUp (Acupuntura Cuántica):</span> técnica que trabaja sobre
                    los meridianos energéticos mediante frecuencias moduladas, sin agujas, para equilibrar órganos,
                    emociones y mente.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Alineación Cuántica (Alphabiotismo Cuántico):</span> método preciso y no
                    invasivo que reorganiza el sistema nervioso y promueve la integración física, mental y emocional a
                    través de impulsos energéticos.
                  </li>
                </ul>

                <p className="mt-8 dark:text-gray-300">
                  Kevin se distingue por su presencia empática, su escucha activa y su capacidad para guiar al usuario
                  en un proceso terapéutico respetuoso, consciente y restaurador. Su práctica está orientada a acompañar
                  a cada persona en el retorno a su centro, reconectando con su vitalidad, claridad y fuerza interna.
                </p>

                <p className="mt-4 dark:text-gray-300">
                  Cada sesión que facilita es una invitación a recuperar la armonía natural del cuerpo, desbloquear
                  emociones contenidas y activar procesos de sanación sostenibles.
                </p>
              </div>

              <div className="mt-12">
                <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">Agendar una sesión</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
