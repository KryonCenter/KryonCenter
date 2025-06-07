"use client";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Enviando cotización...");
    try {
      const response = await axios.post(
        "http://localhost:1337/api/contactos",
        {
          data: {
            nombre: formData.nombre,
            email: formData.email,
            asunto: formData.asunto,
            mensaje: formData.mensaje,
            fecha: new Date().toISOString(),
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.data && response.data.data.id) {
        toast.success("¡Enviado correctamente!", {
          id: toastId,
          icon: "✅",
          style: {
            background: "#059669",
            color: "#fff",
          },
        });

        // Reset del formulario
        setFormData({
          nombre: "",
          email: "",
          asunto: "",
          mensaje: "",
        });
      } else {
        throw new Error("Respuesta inesperada de la API");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Error detallado:",
          error.response?.data || error.message
        );
      } else {
        console.error("Error desconocido:", error);
      }
      toast.error("Error al enviar", {
        id: toastId,
        icon: "❌",
        style: {
          background: "#dc2626",
          color: "#fff",
        },
      });
    }
  };

  return (
    <section className="py-2 bg-white w-full">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-md"
                  placeholder="Tu nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-md"
                  placeholder="tu@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="asunto" className="text-sm font-medium">
                Asunto
              </label>
              <input
                id="asunto"
                type="text"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-md"
                placeholder="Asunto de tu mensaje"
                required
                value={formData.asunto}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="mensaje" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-700 rounded-md min-h-[150px]"
                placeholder="Escribe tu mensaje aquí..."
                required
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#054891] hover:bg-[#053c6d]"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar solicitud"}
            </Button>

            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
                ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo
                pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioContacto;
