import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"

export default function HidroGelAQPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">HidroGel AQ</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Gel de efecto frío con tecnología cuántica para una recuperación muscular rápida y efectiva
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Gel-Cuantico.webp?height=600&width=800"
                alt="HidroGel AQ"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <Link href="/productos" className="flex items-center text-[#1f749c] dark:text-[#39a6cf] mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span>Volver a productos</span>
              </Link>
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">¿Qué es el HidroGel AQ?</h2>
              <p className="text-lg mb-6 dark:text-gray-300">
                Gel de efecto frío diseñado para recuperación muscular rápida y reducción del dolor causado por lesiones
                o fatiga. Incorpora la tecnología AQ para equilibrar la bioenergía y potenciar el rendimiento deportivo.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-[#053c6d] dark:text-white mr-4">$500 MXN</span>
                <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">
                  <Link href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20el%20Gel%20Cu%C3%A1ntico." target="_blank">
                  Comprar ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            ¿Cómo Funciona?
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-[#39a6cf] rounded-full p-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                        Relajación muscular instantánea
                      </h3>
                      <p className="dark:text-gray-300">
                        Proporciona relajación muscular instantánea gracias a su efecto refrescante y a la tecnología
                        cuántica AQ que penetra profundamente en los tejidos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#39a6cf] rounded-full p-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                        Aceleración de la regeneración
                      </h3>
                      <p className="dark:text-gray-300">
                        Acelera la regeneración de fibras musculares, reduciendo el tiempo de recuperación en más del
                        50% comparado con métodos tradicionales.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-[#39a6cf] rounded-full p-3 mt-1 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                        Aplicación post-entrenamiento
                      </h3>
                      <p className="dark:text-gray-300">
                        Ideal para usar después del entrenamiento o en casos de atrofia muscular, ayudando a reducir la
                        inflamación y el dolor mientras potencia la recuperación.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Características Técnicas */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Características Técnicas
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      <span className="font-bold">Efecto refrescante</span> que proporciona alivio inmediato en la zona
                      aplicada.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      <span className="font-bold">No deja residuos grasosos</span> en la piel, permitiendo una
                      aplicación limpia y cómoda.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      <span className="font-bold">Uso EXCLUSIVAMENTE EXTERNO</span> (evitar ojos, zonas sensibles o
                      heridas).
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">
                      <span className="font-bold">No requiere precauciones especiales</span> con el agua
                      post-aplicación.
                    </p>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Instrucciones de aplicación
                  </h3>
                  <p className="dark:text-gray-300">
                    Aplicar una cantidad generosa sobre la zona afectada o los músculos que desea tratar. Masajear
                    suavemente hasta que el gel sea absorbido. Para mejores resultados, aplicar después del
                    entrenamiento o actividad física, o cuando sienta dolor o fatiga muscular.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Beneficios
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Mejora el rendimiento físico
                  </h3>
                  <p className="dark:text-gray-300">
                    Optimiza la eficiencia en la recuperación, permitiéndote entrenar con mayor intensidad y frecuencia.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Favorece la hipertrofia muscular
                  </h3>
                  <p className="dark:text-gray-300">
                    Potencia el crecimiento muscular durante el descanso, maximizando los resultados de tu
                    entrenamiento.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Reduce el riesgo de lesiones
                  </h3>
                  <p className="dark:text-gray-300">
                    Al mejorar la recuperación muscular, disminuye la probabilidad de sufrir lesiones por sobrecarga o
                    fatiga.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Ideal Para
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Deportistas</h3>
                    <p className="dark:text-gray-300">
                      Perfecta para atletas que buscan optimizar su recuperación y rendimiento.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Personas con dolor muscular</h3>
                    <p className="dark:text-gray-300">
                      Alivia dolores musculares causados por actividad física o tensión.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Personas en rehabilitación</h3>
                    <p className="dark:text-gray-300">
                      Ayuda en procesos de recuperación de lesiones musculares o atrofia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1f749c] dark:text-[#39a6cf]">Personas con trabajo físico</h3>
                    <p className="dark:text-gray-300">
                      Ideal para quienes realizan trabajos que requieren esfuerzo físico constante.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
