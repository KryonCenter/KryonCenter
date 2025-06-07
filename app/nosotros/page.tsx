import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NosotrosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Quiénes Somos</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce la historia y filosofía detrás de KRYON, donde la tecnología cuántica se une al bienestar.
          </p>
        </div>
      </section>

      {/* Historia y Propósito */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">Historia</h2>
              <p className="text-lg mb-4 dark:text-gray-300">
                KRYON nace como una iniciativa de armonía integral, fusionando tecnología cuántica con terapias
                energéticas no invasivas. Nos impulsó la necesidad de brindar una alternativa real, rápida y comprobada
                para el estrés, el desbalance emocional y el agotamiento físico.
              </p>
              <p className="text-lg dark:text-gray-300">
                Fundado por Ricardo Salvador Gaytán Borgoñón, nuestro centro ha sido pionero en la aplicación de
                principios cuánticos para la salud física y mental, ayudando a miles de personas a transformar sus vidas
                a través de terapias y productos revolucionarios.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Cabinas-Cuanticas.webp?height=800&width=700"
                alt="Historia de KRYON"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#1f749c] dark:text-[#39a6cf]">Misión</h3>
                <p className="dark:text-gray-300">
                  Transformar la vida de las personas a través del equilibrio bioenergético.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#1f749c] dark:text-[#39a6cf]">Visión</h3>
                <p className="dark:text-gray-300">Ser líderes en terapia cuántica en México y Latinoamérica.</p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#1f749c] dark:text-[#39a6cf]">Valores</h3>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                  <li>Integridad</li>
                  <li>Ciencia con consciencia</li>
                  <li>Conexión humana</li>
                  <li>Innovación vibracional</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Nuestro Equipo
          </h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-[#1f749c] dark:text-[#39a6cf]">
              Terapeutas en Energía Cuántica
            </h3>
            <div className="space-y-8">
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Ricardo Salvador Gaytán Borgoñón"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 p-6">
                      <h4 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                        Ricardo Salvador Gaytán Borgoñón
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Creador de la Cabina Cuántica AQ® | Terapeuta Cuántico
                      </p>
                      <p className="dark:text-gray-300 mb-3">
                        Creador y desarrollador de la Cabina Cuántica AQ®, un dispositivo innovador que combina
                        tecnologías de vanguardia con principios energéticos ancestrales para generar bienestar físico,
                        emocional y espiritual de forma no invasiva.
                      </p>
                      <p className="dark:text-gray-300">
                        Como terapeuta cuántico integral, Ricardo ha dedicado su trayectoria a diseñar y aplicar métodos
                        avanzados de armonización energética, convirtiéndose en referente dentro del ámbito de las
                        terapias complementarias y el bienestar holístico.
                      </p>
                      <div className="mt-4">
                        <Link href="/nosotros/ricardo-gaytan">
                          <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">Saber más</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Iván de Jesús Hernández Osorio"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 p-6">
                      <h4 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                        Iván de Jesús Hernández Osorio
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Terapeuta Cuántico Integral y Especialista en Terapias Energéticas
                      </p>
                      <p className="dark:text-gray-300 mb-3">
                        Terapeuta cuántico con amplia trayectoria en el acompañamiento terapéutico holístico,
                        especializado en técnicas de armonización energética, regulación bioinformática y expansión del
                        bienestar integral a nivel físico, emocional y espiritual.
                      </p>
                      <p className="dark:text-gray-300">
                        Combina tecnología de punta como la Cabina Cuántica AQ®, con disciplinas ancestrales y
                        alternativas de alta efectividad, incluyendo Terapia TuneUp, Alineación Cuántica, Radiónica y
                        Radiestesia.
                      </p>
                      <div className="mt-4">
                        <Link href="/nosotros/ivan-hernandez">
                          <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">Saber más</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Nadia Isabel Zavaleta Cruz"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 p-6">
                      <h4 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                        Nadia Isabel Zavaleta Cruz
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Terapeuta Cuántica en Bienestar Integral y Armonización Energética
                      </p>
                      <p className="dark:text-gray-300 mb-3">
                        Terapeuta cuántica enfocada en el acompañamiento integral del ser humano, con una visión
                        compasiva, sensible y profundamente conectada con el propósito de ayudar a restaurar la armonía
                        física, emocional y energética.
                      </p>
                      <p className="dark:text-gray-300">
                        Se distingue por su presencia cálida, su atención personalizada y su habilidad para generar
                        espacios seguros en los que cada persona puede reconectar consigo misma, liberar bloqueos y
                        reactivar su fuerza interior.
                      </p>
                      <div className="mt-4">
                        <Link href="/nosotros/nadia-zavaleta">
                          <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">Saber más</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-3">
                    <div className="col-span-1">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt="Kevin Eduardo Ascencio de la Flor"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 p-6">
                      <h4 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                        Kevin Eduardo Ascencio de la Flor
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Terapeuta Cuántico y Facilitador de Procesos de Bienestar Integral
                      </p>
                      <p className="dark:text-gray-300 mb-3">
                        Terapeuta cuántico comprometido con el equilibrio y la transformación del ser humano a través de
                        herramientas vibracionales de alta frecuencia. Su enfoque combina la sensibilidad terapéutica
                        con el uso de tecnología cuántica avanzada.
                      </p>
                      <p className="dark:text-gray-300">
                        Se distingue por su presencia empática, su escucha activa y su capacidad para guiar al usuario
                        en un proceso terapéutico respetuoso, consciente y restaurador, orientado a reconectar con la
                        vitalidad, claridad y fuerza interna.
                      </p>
                      <div className="mt-4">
                        <Link href="/nosotros/kevin-ascencio">
                          <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">Saber más</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
