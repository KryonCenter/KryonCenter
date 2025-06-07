import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r from-[#053c6d] to-[#1f749c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a transformar
            tu bienestar.
          </p>
        </div>
      </section>

      {/* Información de Contacto y Formulario */}
      <section className="py-20 bg-white w-full dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de Contacto */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#053c6d] dark:text-[#39a6cf]">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Correo Electrónico
                        </h3>
                        <p>quanticakryon@outlook.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Teléfono
                        </h3>
                        <p>+52 (99) 3754 8276</p>
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            className="text-[#1f749c] border-[#1f749c] dark:text-[#39a6cf] dark:border-[#39a6cf]"
                          >
                            <svg
                              className="h-5 w-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.119.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z" />
                            </svg>
                            <Link
                              target="_blank"
                              href="https://wa.me/529937548276"
                            >
                              Contactar por WhatsApp
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Ubicación
                        </h3>
                        <p className="mb-2">
                          86190, Primero de Mayo, Villahermosa, Tab.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white dark:bg-gray-800 shadow-lg transition-all hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#39a6cf] rounded-full p-3 text-white">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-[#1f749c] dark:text-[#39a6cf]">
                          Horarios de Atención
                        </h3>
                        <p className="mb-1">
                          Lunes a Viernes: 9:00 AM - 7:00 PM
                        </p>
                        <p>Sábados: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Redes Sociales */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#053c6d] dark:text-[#39a6cf]">
                Síguenos en Redes Sociales
              </h2>
              <Card className="bg-white dark:bg-gray-800 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <a
                      href="https://www.facebook.com/share/167b7YG4fg/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all">
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="bg-[#1877F2] rounded-full p-3 text-white">
                            <svg
                              className="h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1f749c] dark:text-[#39a6cf]">
                              Facebook
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              @KryonMexico
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/kryon-by-aq/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all">
                        <CardContent className="p-6 flex items-center gap-4">
                          <div
                            className="bg-[#0077B5] rounded-full p-3 text-whit
                          e"
                          >
                            <svg
                              data-testid="geist-icon"
                              height="16"
                              stroke-linejoin="round"
                              style={{ color: "white" }}
                              viewBox="0 0 16 16"
                              width="16"
                            >
                              <path
                                id="Subtract"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-[#1f749c] dark:text-[#39a6cf]">
                              LinkedIn
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              @KryonMexico
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-center dark:text-gray-300">
                      Conéctate con nosotros en redes sociales para mantenerte
                      al día con nuestras últimas novedades, promociones y
                      contenido exclusivo sobre bienestar cuántico.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#053c6d] dark:text-[#39a6cf]">
            Encuéntranos
          </h2>
          <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-[16/9] relative">
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Mapa de ubicación"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d702.4089901847133!2d-92.94343294732047!3d17.97753160467639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd778b9ee1225%3A0x8b43a2168a6ee15e!2sGimnasio%20de%20Box!5e0!3m2!1ses!2smx!4v1744308193394!5m2!1ses!2smx"
                    width="1030"
                    height="600"
                    style={{ border: 0, maxWidth: "1100px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
