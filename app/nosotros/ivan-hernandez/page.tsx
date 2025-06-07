import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function IvanHernandezPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Iván de Jesús Hernández Osorio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Terapeuta Cuántico Integral y Especialista en Terapias Energéticas
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
                  alt="Iván de Jesús Hernández Osorio"
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
                    <span className="dark:text-gray-300">Terapia TuneUp (Acupuntura Cuántica)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Alineación Cuántica (Alphabiotismo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Radiónica y Radiestesia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Acupuntura Japonesa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Auriculoterapia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#39a6cf]"></div>
                    <span className="dark:text-gray-300">Reiki Usui (niveles I-IV)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Columna Derecha - Biografía */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">Biografía</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="mb-4 dark:text-gray-300">
                  Iván de Jesús Hernández Osorio es un terapeuta cuántico con amplia trayectoria en el acompañamiento
                  terapéutico holístico, especializado en técnicas de armonización energética, regulación bioinformática
                  y expansión del bienestar integral a nivel físico, emocional y espiritual.
                </p>
                <p className="mb-4 dark:text-gray-300">
                  Con una sólida preparación y visión integrativa, Iván combina tecnología de punta como la Cabina
                  Cuántica AQ®, con disciplinas ancestrales y alternativas de alta efectividad. Entre sus principales
                  herramientas terapéuticas destacan:
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4 text-[#1f749c] dark:text-[#39a6cf]">
                  Herramientas Terapéuticas
                </h3>
                <ul className="space-y-4">
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapia TuneUp (Acupuntura Cuántica):</span> estimulación de puntos
                    energéticos mediante frecuencias cuánticas, sin agujas.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Alineación Cuántica (Alphabiotismo Cuántico):</span> armonización del
                    eje cuerpo-mente mediante impulsos vibracionales.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Radiónica y Radiestesia:</span> técnicas avanzadas para la detección y
                    modulación de campos energéticos, utilizadas para evaluar desajustes vibracionales y dirigir
                    frecuencias específicas con propósitos terapéuticos.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4 text-[#1f749c] dark:text-[#39a6cf]">
                  Formación Alternativa
                </h3>
                <ul className="space-y-4">
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapeuta en Acupuntura Japonesa,</span> técnica de precisión enfocada
                    en el restablecimiento del flujo vital.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapeuta en Auriculoterapia,</span> estimulación reflexológica del
                    pabellón auricular para tratar múltiples desequilibrios.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapeuta en Reiki Usui,</span> niveles I, II, III y IV, canalizador de
                    energía universal para la autosanación y el balance interior.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Terapia de Hologramas Nivel I,</span> trabajo energético de alto nivel
                    enfocado en la reorganización del campo de información corporal.
                  </li>
                  <li className="dark:text-gray-300">
                    <span className="font-bold">Masaje de Reestructuración Bio-Informática Nivel I y II,</span> técnica
                    manual que libera memorias celulares y mejora la integración corporal.
                  </li>
                </ul>

                <p className="mt-8 dark:text-gray-300">
                  Iván es reconocido por su enfoque humano, intuitivo y profesional. Su misión es facilitar procesos de
                  sanación y transformación profunda, siempre desde el respeto, la escucha y la conexión con el
                  potencial innato de cada ser.
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
