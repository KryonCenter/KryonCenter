"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  ArrowDown,
  Star,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import axios from "axios";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Ana",
      location: "Villahermosa",
      content:
        "Salí de la cabina con una paz que no sentía desde hace años. Es increíble cómo en tan poco tiempo puede cambiar tu estado de ánimo completamente.",
      avatar: "/Ana-Testimonio.webp?height=100&width=100",
      rating: 5,
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      location: "Ciudad de México",
      content:
        "Después de mis entrenamientos, la terapia Regenerativa me ayuda a recuperarme mucho más rápido. ¡Es increíble la diferencia!",
      avatar:
        "/Carlos-Rodriguez-Deportista-Testimonio.webp?height=100&width=100",
      rating: 5,
    },
    {
      id: 3,
      name: "Laura Martínez",
      location: "Monterrey",
      content:
        "Implementamos las cabinas AQ en nuestra empresa y hemos visto una mejora notable en el bienestar y productividad de nuestros empleados.",
      avatar: "/Laura-Martinez-Testimonio.webp?height=100&width=100",
      rating: 5,
    },
  ];

  interface Article {
    id: number;
    title: string;
    description?: string;
    slug: string;
    cover?: {
      url: string;
      alternativeText?: string;
    };
  }

  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1337/api/articles?populate=cover&pagination[limit]=3"
        );
        setArticles(res.data.data || []); // Si res.data.data es undefined, usa array vacío
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTestimonial, autoplay]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#053c6d] to-[#1f749c] opacity-90 z-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Transforma tu energía, transforma tu vida.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              En KRYON, fusionamos la ciencia cuántica y el bienestar holístico
              para ayudarte a recuperar el equilibrio que mereces. A través de
              nuestra Cabina AQ®, terapias vibracionales y productos
              energéticos, activamos tu potencial interior para sanar, relajarte
              y reconectarte contigo mismo.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button size="lg" className="bg-[#39a6cf] hover:bg-[#1f749c]">
                <a
                  href="https://wa.me/529937548276?text=%C2%A1Hola%20Kryon!%20Me%20gustar%C3%ADa%20agendar%20una%20cita."
                  target="_blank"
                >
                  Agenda tu sesión
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-white/10"
              >
                <a href="/productos">Conoce nuestros productos</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce mt-16"
          >
            <ArrowDown size={32} />
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
              Descubre la Cabina Cuántica AQ®
            </h2>
            <div className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl">
              <div className="w-full h-full">
                <iframe
                  src="https://player.vimeo.com/video/1076962528?h=3c7c45753f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  className="w-full h-full" 
                  aspect-ratio="16:9"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  title="Cabina Cuantica KRYON"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
              Beneficios Destacados
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Reducción de estrés
                  </h3>
                  <p className="dark:text-gray-300">
                    Disminuye significativamente los niveles de cortisol, la
                    hormona del estrés, en pocos minutos.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Equilibrio energético
                  </h3>
                  <p className="dark:text-gray-300">
                    Restaura la armonía de tu campo bioenergético, mejorando tu
                    vitalidad y claridad mental.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Terapia no invasiva
                  </h3>
                  <p className="dark:text-gray-300">
                    Sin medicamentos, sin efectos secundarios. Una experiencia
                    completamente natural y segura.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-[#39a6cf] rounded-full p-3 mb-4 text-white">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#1f749c] dark:text-[#39a6cf]">
                    Resultados inmediatos
                  </h3>
                  <p className="dark:text-gray-300">
                    Siente la diferencia desde la primera sesión, con efectos
                    que se potencian con cada visita.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
              Nuestros Servicios
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                    Terapias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Terapia-Kryon.webp?height=200&width=400"
                    alt="Terapias cuánticas"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardDescription className="text-base dark:text-gray-300">
                    Cabina Cuántica AQ®, Gel Cuántico, Tune Up y terapias a
                    distancia para tu bienestar integral.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/terapias">
                    <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                      Conoce más
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                    Productos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Productos-Kryon.webp?height=200&width=400"
                    alt="Productos cuánticos"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardDescription className="text-base dark:text-gray-300">
                    Pulseras, geles, stickers cuánticos y botellas
                    estructuradoras para tu día a día.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/productos">
                    <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                      Ver productos
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                    Empresas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/Empresa-Kryon.webp?height=400&width=400"
                    alt="Soluciones para empresas"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardDescription className="text-base dark:text-gray-300">
                    Soluciones corporativas para mejorar el bienestar y
                    productividad de tus colaboradores.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href="/empresas">
                    <Button className="w-full bg-[#054891] hover:bg-[#053c6d]">
                      Soluciones corporativas
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className="flex-shrink-0 w-full dark:bg-gray-700"
                  >
                    <CardContent className="p-6 md:p-10 flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-lg mb-6 italic dark:text-gray-300">
                        {testimonial.content}
                      </p>
                      <div>
                        <h4 className="font-bold text-lg dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400">
                          {testimonial.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-700 rounded-full shadow-lg z-10 hidden md:flex"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-700 rounded-full shadow-lg z-10 hidden md:flex"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i === currentTestimonial
                      ? "bg-[#1f749c] dark:bg-[#39a6cf]"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  onClick={() => setCurrentTestimonial(i)}
                />
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/testimonios">
                <Button
                  variant="outline"
                  className="border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                >
                  Ver más testimonios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teasers 
      <section className="py-20 bg-white dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
              Artículos recientes
            </h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {!loading &&
              articles.slice(0, 3).map((articulo) => (
                <motion.div key={articulo.id} variants={fadeInUp}>
                  <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                    <CardContent className="p-0">
                      {articulo.cover && (
                        <Image
                          src={`http://localhost:1337${articulo.cover.url}`}
                          alt={articulo.cover.alternativeText || articulo.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                          priority
                        />
                      )}
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                        {articulo.title || "Título no disponible"}
                      </CardTitle>
                      <CardDescription className="text-base dark:text-gray-300">
                        {articulo.description || "Descripción no disponible"}
                      </CardDescription>
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
                </motion.div>
              ))}

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Energía cuántica"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                    ¿Qué es la energía cuántica?
                  </CardTitle>
                  <CardDescription className="text-base dark:text-gray-300">
                    Descubre los principios fundamentales de la energía cuántica
                    y cómo puede transformar tu bienestar.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="/blog/que-es-la-energia-cuantica"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                    >
                      Leer más
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Agua estructurada"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                    Beneficios del agua estructurada
                  </CardTitle>
                  <CardDescription className="text-base dark:text-gray-300">
                    Aprende sobre los beneficios del agua estructurada y cómo
                    puede mejorar tu salud a nivel celular.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href="/blog/beneficios-agua-estructurada"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                    >
                      Leer más
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-700">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cabina AQ"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-[#1f749c] dark:text-[#39a6cf]">
                    Cómo la Cabina AQ mejora tu estado físico y emocional
                  </CardTitle>
                  <CardDescription className="text-base dark:text-gray-300">
                    Conoce la tecnología detrás de la Cabina AQ y cómo puede
                    ayudarte a reducir el estrés rápidamente.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href="/blog/cabina-aq-mejora-estado" className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-[#1f749c] text-[#1f749c] dark:border-[#39a6cf] dark:text-[#39a6cf]"
                    >
                      Leer más
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
      */}
    </main>
  );
}
