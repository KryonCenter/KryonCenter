import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, Tag } from "lucide-react"

const articulos = [
  {
    id: 1,
    title: "¿Qué es la energía cuántica y cómo mejora tu bienestar?",
    excerpt:
      "Descubre los principios fundamentales de la energía cuántica y cómo puede transformar tu bienestar físico y mental.",
    image: "/placeholder.svg?height=300&width=600",
    date: "15 de marzo, 2023",
    author: "Dr. Ricardo Gaytán",
    category: "Ciencia Cuántica",
    slug: "que-es-la-energia-cuantica",
  },
  {
    id: 2,
    title: "Agua estructurada: el secreto para una salud celular óptima",
    excerpt:
      "Aprende sobre los beneficios del agua estructurada y cómo puede mejorar tu salud a nivel celular con nuestra tecnología cuántica.",
    image: "/placeholder.svg?height=300&width=600",
    date: "28 de abril, 2023",
    author: "Dra. Laura Martínez",
    category: "Salud",
    slug: "agua-estructurada",
  },
  {
    id: 3,
    title: "Cómo la Cabina AQ reduce el estrés en 5 minutos",
    excerpt:
      "Conoce la tecnología detrás de la Cabina AQ y cómo puede ayudarte a reducir el estrés rápidamente con resultados comprobados.",
    image: "/placeholder.svg?height=300&width=600",
    date: "10 de mayo, 2023",
    author: "Ing. Carlos Rodríguez",
    category: "Terapias",
    slug: "cabina-aq-reduce-estres",
  },
  {
    id: 4,
    title: "Tecnología cuántica para empresas: mejorando la productividad",
    excerpt:
      "Descubre cómo la implementación de tecnología cuántica en entornos laborales puede mejorar el bienestar y la productividad de los empleados.",
    image: "/placeholder.svg?height=300&width=600",
    date: "22 de junio, 2023",
    author: "Lic. Ana González",
    category: "Empresas",
    slug: "tecnologia-cuantica-empresas",
  },
  {
    id: 5,
    title: "Los beneficios de la pulsera cuántica en tu día a día",
    excerpt:
      "Conoce cómo la pulsera cuántica puede ayudarte a mantener un equilibrio energético óptimo durante tus actividades diarias.",
    image: "/placeholder.svg?height=300&width=600",
    date: "5 de julio, 2023",
    author: "Dr. Ricardo Gaytán",
    category: "Productos",
    slug: "beneficios-pulsera-cuantica",
  },
  {
    id: 6,
    title: "Terapia de Reconexión: sanando bloqueos emocionales",
    excerpt:
      "Aprende sobre la Terapia de Reconexión y cómo puede ayudarte a superar bloqueos emocionales para alcanzar un mayor bienestar.",
    image: "/placeholder.svg?height=300&width=600",
    date: "18 de agosto, 2023",
    author: "Psic. María Sánchez",
    category: "Terapias",
    slug: "terapia-reconexion-bloqueos-emocionales",
  },
]

const categorias = ["Ciencia Cuántica", "Salud", "Terapias", "Productos", "Empresas", "Bienestar"]

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubre artículos sobre tecnología cuántica, bienestar y salud para transformar tu vida.
          </p>
        </div>
      </section>

      {/* Contenido del Blog */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Artículos */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articulos.map((articulo) => (
                  <Card key={articulo.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <Image
                        src={articulo.image || "/placeholder.svg"}
                        alt={articulo.title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{articulo.date}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{articulo.author}</span>
                        </div>
                      </div>
                      <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">{articulo.title}</CardTitle>
                      <CardDescription className="text-base">{articulo.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={`/blog/${articulo.slug}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                        >
                          Leer más
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <Button
                  variant="outline"
                  className="border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                >
                  Cargar más artículos
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Buscador */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#053c6d] dark:text-[#39a6cf]">Buscar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar artículos..."
                      className="pl-10 border-[#1f749c] dark:border-[#39a6cf] focus:ring-[#39a6cf]"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categorías */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#053c6d] dark:text-[#39a6cf]">Categorías</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categorias.map((categoria, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/categoria/${categoria.toLowerCase().replace(/ /g, "-")}`}
                          className="flex items-center gap-2 text-[#1f749c] dark:text-[#39a6cf] hover:underline"
                        >
                          <Tag className="h-4 w-4" />
                          <span>{categoria}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Artículos Populares */}
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#053c6d] dark:text-[#39a6cf]">Artículos Populares</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {articulos.slice(0, 3).map((articulo) => (
                      <div key={articulo.id} className="flex gap-4">
                        <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={articulo.image || "/placeholder.svg"}
                            alt={articulo.title}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-[#1f749c] dark:text-[#39a6cf] line-clamp-2">
                            <Link href={`/blog/${articulo.slug}`} className="hover:underline">
                              {articulo.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{articulo.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="bg-[#053c6d] text-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-white">Suscríbete a nuestro Newsletter</CardTitle>
                  <CardDescription className="text-white/80">
                    Recibe los últimos artículos y novedades en tu correo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Tu correo electrónico"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
                    />
                    <Button className="w-full bg-[#39a6cf] hover:bg-[#1f749c]">Suscribirme</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
