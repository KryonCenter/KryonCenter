import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimoniosIndividuales = [
  {
    id: 1,
    name: "María González",
    role: "Cliente",
    content:
      "Las terapias en la Cabina AQ han transformado mi vida. Mi nivel de estrés ha disminuido considerablemente y duermo mucho mejor.",
    avatar: "/Maria-Gonzales-Testimonio.webp?height=100&width=100",
    rating: 5,
    video: false,
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Deportista",
    content:
      "Después de mis entrenamientos, la terapia Regenerativa me ayuda a recuperarme mucho más rápido. ¡Es increíble la diferencia!",
    avatar: "/Carlos-Rodriguez-Deportista-Testimonio.webp?height=100&width=100",
    rating: 5,
    video: false,
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Profesora",
    content:
      "La terapia ZEN me ha ayudado a manejar el estrés del trabajo. Ahora puedo concentrarme mejor y tengo más paciencia con mis alumnos.",
    avatar: "/Ana-Martinez-Testimonio.webp?height=100&width=100",
    rating: 5,
    video: false,
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    role: "Ejecutivo",
    content:
      "Uso la pulsera cuántica todos los días y he notado una gran diferencia en mis niveles de energía. La recomiendo ampliamente.",
    avatar: "/Roberto-Sanchez-Testimonio.webp?height=100&width=100",
    rating: 4,
    video: false,
  },
]

const testimoniosEmpresas = [
  {
    id: 1,
    company: "PEMEX",
    representative: "Departamento de Recursos Humanos",
    content:
      "La implementación de las Cabinas AQ en nuestras instalaciones ha tenido un impacto positivo en el bienestar de nuestros empleados. Hemos visto una reducción significativa en los niveles de estrés reportados.",
    logo: "/Pemex-Logo.png?height=100&width=100",
    video: true,
  },
  {
    id: 2,
    company: "Universidad Autonoma de Tamaulipas",
    representative: "Facultad de Psicología",
    content:
      "Nuestra colaboración con el Centro KRYON ha sido muy valiosa para nuestra investigación sobre el impacto de la tecnología cuántica en el bienestar estudiantil. Los resultados han sido muy prometedores.",
    logo: "/UAT.jpg?height=100&width=100",
    video: false,
  },
]

export default function TestimoniosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Testimonios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conoce las experiencias de nuestros clientes con la tecnología cuántica del Centro KRYON.
          </p>
        </div>
      </section>

      {/* Testimonios Individuales */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">Testimonios de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimoniosIndividuales.map((testimonio) => (
              <Card key={testimonio.id} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonio.avatar || "/placeholder.svg"}
                        alt={testimonio.name}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1f749c]">{testimonio.name}</h3>
                      <p className="text-gray-600">{testimonio.role}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonio.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {testimonio.video ? (
                    <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center bg-[#053c6d]/10">
                        <Button size="sm" className="rounded-full w-12 h-12 flex items-center justify-center">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <Image
                        src="/placeholder.svg?height=200&width=350"
                        alt={`Video testimonio de ${testimonio.name}`}
                        width={350}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null}
                  <p className="italic">{testimonio.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios Empresas */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d]">Testimonios Corporativos</h2>
          <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
            {testimoniosEmpresas.map((testimonio) => (
              <Card key={testimonio.id} className="bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="md:col-span-1 flex items-center justify-center p-6 bg-gray-50">
                      <Image
                        src={testimonio.logo || "/placeholder.svg"}
                        alt={testimonio.company}
                        width={100}
                        height={100}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <h3 className="text-xl font-bold mb-1 text-[#1f749c]">{testimonio.company}</h3>
                      <p className="text-gray-600 mb-4">{testimonio.representative}</p>
                      <p className="italic">{testimonio.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Embajador Cuántico 
      <section className="py-20 bg-[#053c6d] text-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Conviértete en Embajador Cuántico</h2>
            <p className="text-lg mb-8">
              ¿Has experimentado los beneficios de nuestra tecnología cuántica? Comparte tu historia y ayuda a otros a
              descubrir el poder transformador de nuestras terapias y productos.
            </p>
            <Button size="lg" className="bg-[#39a6cf] hover:bg-[#1f749c]">
              Compartir mi experiencia
            </Button>
          </div>
        </div>
      </section>
      */}
    </main>
  )
}
