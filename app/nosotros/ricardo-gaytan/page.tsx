import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function RicardoGaytanPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ricardo Salvador Gaytán Borgoñón</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creador de la Cabina Cuántica AQ® | Terapeuta Cuántico y Facilitador de Transformación Profunda
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
                  alt="Ricardo Salvador Gaytán Borgoñón"
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
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Hipnosis Terapéutica</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna Derecha - Biografía */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">Biografía</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="mb-4 dark:text-gray-300">
                  Ricardo Salvador Gaytán Borgoñón es el creador y desarrollador de la Cabina Cuántica AQ®, un
                  dispositivo innovador que combina tecnologías de vanguardia con principios energéticos ancestrales
                  para generar bienestar físico, emocional y espiritual de forma no invasiva.
                </p>
                <p className="mb-4 dark:text-gray-300">
                  Como terapeuta cuántico integral, Ricardo ha dedicado su trayectoria a diseñar y aplicar métodos
                  avanzados de armonización energética, convirtiéndose en referente dentro del ámbito de las terapias
                  complementarias y el bienestar holístico. Su enfoque se centra en activar el potencial autocurativo
                  del ser humano a través de la vibración, la consciencia y la reorganización bioinformática.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-[#1f749c] dark:text-[#39a6cf]">Especialidades</h3>
                <ul className="space-y-4">
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Cabina Cuántica AQ®:</span> tecnología desarrollada por él mismo,
                    utilizada para reducir el estrés, estimular la regeneración celular, armonizar el campo energético y
                    facilitar estados profundos de equilibrio.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapia TuneUp (Acupuntura Cuántica):</span> aplicación de frecuencias
                    sobre puntos energéticos específicos sin uso de agujas, para desbloquear flujos internos y liberar
                    tensiones emocionales.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Alineación Cuántica (Alphabiotismo Cuántico):</span> técnica enfocada en
                    restaurar la conexión cuerpo-mente mediante impulsos vibracionales que reordenan el sistema nervioso
                    y el eje vertebral.
                  </li>
                </ul>

                <p className="mt-8 dark:text-gray-300">
                  Además, Ricardo cuenta con máximas habilidades en hipnosis terapéutica, herramienta que emplea para
                  acceder al subconsciente, modificar patrones limitantes y facilitar la sanación emocional desde el
                  origen. Como alphabiotista certificado, su trabajo impulsa la expansión de la conciencia, el
                  empoderamiento personal y el equilibrio integral.
                </p>

                <p className="mt-4 dark:text-gray-300">
                  Su visión combina innovación, espiritualidad práctica y ciencia vibracional. Ricardo es un guía
                  respetuoso y profundo, que acompaña a cada persona desde la conexión, la empatía y la coherencia.
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
