import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Check } from "lucide-react"

export default function PulseraEnergeticaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Pulsera Energética KRYON</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Potencia tu energía y equilibrio con nuestra pulsera cuántica de alta tecnología
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/Pulsera-Cuantica.webp?height=600&width=800"
                alt="Pulsera Energética KRYON"
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
              <h2 className="text-3xl font-bold mb-6 text-[#053c6d] dark:text-[#39a6cf]">
                ¿Qué es la Pulsera Energética?
              </h2>
              <p className="text-lg mb-4 dark:text-gray-300">
                Es una pulsera moderna y de colores elegantes dando personalidad a tu estilo de vida con todos los
                beneficios de nuestra tecnología y con materiales de primera calidad, dándote a ti y a tu familia un
                bienestar durante todo el día.
              </p>
              <p className="text-lg mb-6 dark:text-gray-300">
                Con sus cinco frecuencias especiales desarrolladas para darte un equilibrio en todo tu cuerpo. Esto te
                ayuda a desarrollar durante el día el equilibrio, la flexibilidad, la fortaleza y bienestar general.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-[#053c6d] dark:text-white mr-4">$350 MXN</span>
                <Button className="bg-[#39a6cf] hover:bg-[#1f749c]">
                  <Link href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20adquirir%20una%20Pulsera%20Cu%C3%A1ntica." target="_blank">
                  Comprar ahora
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            ¿Cómo Funciona?
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-6 dark:text-gray-300">
                  Fácil y sencillo, tan solo con portarla en tu muñeca usted recibirá los beneficios terapéuticos de
                  nano-frecuencias, generando energía de muy baja densidad capaz de penetrar en la masa orgánica, y
                  desencadena a partir de la circulación de un flujo energético procesos de re-polarización y resonancia
                  acordes a las condiciones propias del estado del individuo, creando condiciones propicias para ir
                  mejorando los estados alterados de enfermedad, teniendo como resultado el equilibrio, la flexibilidad,
                  la fortaleza y el bienestar en todo tu cuerpo.
                </p>
                <div className="flex justify-center">
                  <Image
                    src="/Pulsera-Portada.webp?height=300&width=500"
                    alt="Funcionamiento de la Pulsera Energética"
                    width={500}
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            ¿Cuáles son los Beneficios de la Pulsera?
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg mb-6 dark:text-gray-300">
                  Los resultados son inmediatos y los cambios fisiológicos son graduales. Con la continuidad del uso de
                  la pulsera energética pronto logras avanzar en la reorganización de las funciones perdidas, o
                  alteradas, una vez alcanzado cierto grado de orden, este se sostiene por sí mismo, teniendo como
                  resultado el equilibrio, la flexibilidad, la fortaleza y el bienestar en todo tu cuerpo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">Resultados inmediatos</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">Equilibrio energético</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">Mayor flexibilidad</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">Fortaleza física</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">Bienestar general</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="dark:text-gray-300">Reorganización de funciones alteradas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frequencies */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            ¿Qué son las Frecuencias y Cuáles Son?
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg mb-8">
              <CardContent className="p-8">
                <p className="text-lg mb-6 dark:text-gray-300">
                  Es la manera más natural de comunicación entre los seres vivos del universo. Estamos interconectados.
                  Está relacionado con la frecuencia vibratoria de cada ser y todos pueden entrar en sintonía y entablar
                  una comunicación emocional por lo que está basada en el amor, la armonía y el equilibrio universal.
                </p>
                <ul className="space-y-4 dark:text-gray-300">
                    <li>
                    • Los cuantos de luz se encuentran en el interior de cualquier ser vivo, y en cualquier lugar.
                    </li>
                    <li>
                     • Los cuantos de luz son la forma más pequeña de vida en el universo que cohabitan con las células.
                    </li>
                    <li>• ¡Sin ellas simplemente no podemos vivir!</li>
                    <li>
                    • Nos hablan continuamente para comunicarnos la voluntad de la fuerza creadora universal. Son
                    indestructibles, solo se transforman.
                    </li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-bold mb-6 text-[#1f749c] dark:text-[#39a6cf]">Nuestras frecuencias</h3>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Inmune</h4>
                  <p className="dark:text-gray-300">
                    Mata todo tipo de bacterias, contaminación, ayuda al sistema gástrico, y a manejar el estrés.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">PH Solutions</h4>
                  <p className="dark:text-gray-300">
                    Sirve para nivelar el agua de nuestro cuerpo y para normalizar los niveles del Ph, la gran mayoría
                    de las enfermedades es debido a tener un Ph ácido inclusive los problemas gástricos, es una ayuda
                    excelente en todas las enfermedades crónico degenerativas (cáncer, diabetes, s.i.d.a., leucemia,
                    etc).
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Mi 528</h4>
                  <p className="dark:text-gray-300">
                    Produce una resonancia parecida a la nota Mi (solar), elimina todas las toxinas del cuerpo.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Joint Solutions</h4>
                  <p className="dark:text-gray-300">
                    Equilibra los niveles del calcio, ayuda al sistema óseo y enfermedades como: artritis, reumatismo,
                    osteoporosis y todos los padecimientos con dolores articulares.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-700 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Relieve</h4>
                  <p className="dark:text-gray-300">
                    Excelente para cualquier tipo de dolor, esta tarjeta elimina el dolor en cualquier área del cuerpo
                    donde se encuentre.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Use */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            ¿Quiénes deberían usarlas?
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-8">
                <ul className="space-y-4 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Todo el que realice esfuerzos mentales o físicos a menudo.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Cualquier persona que desee sentirse mejor.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Personas que pasan gran parte del día de pie o andando.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Deportistas. Es ideal para deportistas por sus beneficios, comodidad, peso y resistencia.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>Deportes de Agua. Ideal para la playa, piscina, pesca, vela...</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[#39a6cf] rounded-full p-2 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p>
                      Gente que trabaje en oficinas, con ordenadores o rodeada de cualquier campo electromagnético
                      producido por este tipo de dispositivos así como usuarios de teléfonos móviles.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#053c6d] text-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu energía?</h2>
            <p className="text-lg mb-8">
              Adquiere ahora tu Pulsera Energética KRYON y comienza a experimentar todos sus beneficios.
            </p>
            <Button size="lg" className="bg-[#39a6cf] hover:bg-[#1f749c]">
              Comprar con PayPal
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
