import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function NadiaZavaletaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nadia Isabel Zavaleta Cruz</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Terapeuta Cuántica en Bienestar Integral y Armonización Energética
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
                  alt="Nadia Isabel Zavaleta Cruz"
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
                  Nadia Isabel Zavaleta Cruz es terapeuta cuántica enfocada en el acompañamiento integral del ser
                  humano, con una visión compasiva, sensible y profundamente conectada con el propósito de ayudar a
                  restaurar la armonía física, emocional y energética de quienes acuden a sus sesiones.
                </p>
                <p className="mb-4 dark:text-gray-300">
                  Está especializada en el uso terapéutico de la tecnología cuántica más avanzada y herramientas de
                  equilibrio bioenergético, entre las cuales destacan:
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-[#1f749c] dark:text-[#39a6cf]">
                  Especialidades Terapéuticas
                </h3>
                <ul className="space-y-4">
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Cabina Cuántica AQ®:</span> dispositivo de sanación vibracional que
                    promueve la relajación profunda, la regeneración celular y el equilibrio de las cargas bioeléctricas
                    del cuerpo.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapia TuneUp (Acupuntura Cuántica):</span> técnica de estimulación de
                    puntos energéticos mediante frecuencias, sin el uso de agujas, ideal para liberar tensiones físicas
                    y emocionales.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Alineación Cuántica (Alphabiotismo Cuántico):</span> método que trabaja
                    sobre el eje cuerpo-mente para reorganizar el sistema nervioso, promover el enraizamiento y
                    restablecer el flujo vital.
                  </li>
                </ul>

                <p className="mt-8 dark:text-gray-300">
                  Nadia se distingue por su presencia cálida, su atención personalizada y su habilidad para generar
                  espacios seguros en los que cada persona puede reconectar consigo misma, liberar bloqueos y reactivar
                  su fuerza interior. Su enfoque terapéutico integra intuición, tecnología energética y acompañamiento
                  respetuoso.
                </p>

                <p className="mt-4 dark:text-gray-300">
                  Con cada sesión, su intención es guiar al usuario hacia un estado de armonía integral, claridad
                  emocional y bienestar sostenido.
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
