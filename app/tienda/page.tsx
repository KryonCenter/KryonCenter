import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, ShoppingCart, Heart, Filter } from "lucide-react"

const productos = [
  {
    id: 1,
    title: "Pulsera Cuántica",
    description: "Alineación energética continua para tu día a día.",
    price: 350,
    rating: 5,
    image: "/placeholder.svg?height=300&width=500",
    category: "accesorios",
  },
  {
    id: 2,
    title: "Gel Cuántico",
    description: "Activación bioenergética localizada para zonas específicas.",
    price: 350,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=500",
    category: "cuidado-personal",
  },
  {
    id: 3,
    title: "Sticker Cuántico - Hogar",
    description: "Tecnología para estructurar energía en tu hogar.",
    price: 200,
    rating: 4,
    image: "/placeholder.svg?height=300&width=500",
    category: "hogar",
  },
  {
    id: 4,
    title: "Sticker Cuántico - Oficina",
    description: "Tecnología para estructurar energía en tu espacio de trabajo.",
    price: 200,
    rating: 4,
    image: "/placeholder.svg?height=300&width=500",
    category: "hogar",
  },
  {
    id: 5,
    title: "Sticker Cuántico - Dispositivos",
    description: "Tecnología para estructurar energía en tus dispositivos electrónicos.",
    price: 200,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=500",
    category: "tecnologia",
  },
  {
    id: 6,
    title: "Botella de Agua Cuántica",
    description: "Revitalización estructural de agua para una hidratación óptima.",
    price: 1500,
    rating: 5,
    image: "/placeholder.svg?height=300&width=500",
    category: "cuidado-personal",
  },
  {
    id: 7,
    title: "Set de Pulsera y Gel Cuántico",
    description: "Combo especial para potenciar tu bienestar energético.",
    price: 650,
    rating: 5,
    image: "/placeholder.svg?height=300&width=500",
    category: "paquetes",
  },
  {
    id: 8,
    title: "Collar Cuántico",
    description: "Protección y equilibrio energético para tu campo áurico.",
    price: 450,
    rating: 4.5,
    image: "/placeholder.svg?height=300&width=500",
    category: "accesorios",
  },
]

export default function TiendaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tienda</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Descubre nuestra línea de productos cuánticos para potenciar tu bienestar diario.
          </p>
        </div>
      </section>

      {/* Tienda */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          {/* Filtros y Búsqueda */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <Tabs defaultValue="todos" className="w-full md:w-auto">
              <TabsList className="bg-muted dark:bg-gray-800">
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="accesorios">Accesorios</TabsTrigger>
                <TabsTrigger value="cuidado-personal">Cuidado Personal</TabsTrigger>
                <TabsTrigger value="hogar">Hogar</TabsTrigger>
                <TabsTrigger value="tecnologia">Tecnología</TabsTrigger>
                <TabsTrigger value="paquetes">Paquetes</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                <span>Filtrar</span>
              </Button>
              <select className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
                <option value="relevancia">Relevancia</option>
                <option value="precio-bajo">Precio: Menor a Mayor</option>
                <option value="precio-alto">Precio: Mayor a Menor</option>
                <option value="calificacion">Calificación</option>
              </select>
            </div>
          </div>

          {/* Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productos.map((producto) => (
              <Card key={producto.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={producto.image || "/placeholder.svg"}
                    alt={producto.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full"
                  >
                    <Heart className="h-5 w-5 text-[#1f749c] dark:text-[#39a6cf]" />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">{producto.title}</CardTitle>
                  <CardDescription className="text-base">{producto.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-[#053c6d] dark:text-white">${producto.price} MXN</p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm">{producto.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#39a6cf] hover:bg-[#1f749c] flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Comprar con PayPal</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Paginación */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-[#39a6cf] text-white hover:bg-[#1f749c]">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Compra */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Información de Compra
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-4 mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Métodos de Pago</h3>
                  <p className="text-muted-foreground">
                    Aceptamos pagos a través de PayPal, garantizando transacciones seguras y protegidas.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-4 mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8 4-8-4V5l8 4 8-4v2zM4 13.8V7.2l8 4 8-4v6.6l-8 4-8-4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Envíos</h3>
                  <p className="text-muted-foreground">
                    Realizamos envíos a todo México. El tiempo de entrega es de 3 a 5 días hábiles.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-700 shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-4 mb-4">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">Garantía</h3>
                  <p className="text-muted-foreground">
                    Todos nuestros productos cuentan con garantía de satisfacción de 30 días.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                  ¿Cómo funcionan los productos cuánticos?
                </h3>
                <p>
                  Nuestros productos utilizan tecnología cuántica avanzada que interactúa con tu campo energético,
                  ayudando a restaurar el equilibrio y potenciar tu bienestar físico y mental.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                  ¿Cuánto tiempo duran los efectos?
                </h3>
                <p>
                  Los efectos varían según el producto y la persona. En general, los productos como pulseras y collares
                  proporcionan beneficios continuos mientras se usan, mientras que los stickers mantienen su eficacia
                  durante aproximadamente 6 meses.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                  ¿Tienen efectos secundarios?
                </h3>
                <p>
                  Nuestros productos son completamente seguros y no tienen efectos secundarios conocidos. Trabajan en
                  armonía con tu campo energético natural sin interferir con medicamentos u otros tratamientos.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                  ¿Puedo combinar varios productos?
                </h3>
                <p>
                  Sí, nuestros productos están diseñados para trabajar en sinergia. De hecho, combinar diferentes
                  productos puede potenciar los beneficios y proporcionar una experiencia más completa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#053c6d] text-white w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas ayuda para elegir?</h2>
            <p className="text-lg mb-8">
              Nuestros expertos en tecnología cuántica pueden ayudarte a encontrar los productos que mejor se adapten a
              tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-[#39a6cf] hover:bg-[#1f749c]">
                Contactar a un experto
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Ver guía de productos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
