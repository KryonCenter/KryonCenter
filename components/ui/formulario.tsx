'use client';
import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '@/components/ui/button';



const FormularioCotizacion = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    plan: '',
    mensaje: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading('Enviando cotización...');
    try {
      const response = await axios.post(
        'http://localhost:1337/api/cotizacions',
        {
          data: {
            nombre: formData.nombre,
            empresa: formData.empresa,
            email: formData.email,
            telefono: formData.telefono,
            plan: formData.plan,
            mensaje: formData.mensaje,
            fecha: new Date().toISOString()
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
  
      if (response.data && response.data.data && response.data.data.id) {
        toast.success('¡Enviado correctamente!', { 
          id: toastId,
          icon: '✅',
          style: {
            background: '#059669',
            color: '#fff'
          }
        });

        // Reset del formulario
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          plan: '',
          mensaje: ''
        });
      } else {
        throw new Error('Respuesta inesperada de la API');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error detallado:', error.response?.data || error.message);
      } else {
        console.error('Error desconocido:', error);
      }
      toast.error('Error al enviar', {
        id: toastId,
        icon: '❌',
        style: {
          background: '#dc2626',
          color: '#fff'
        }
      });
    }
  };


  return (
    <section className="py-20 bg-white w-full">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#053c6d] text-center">Solicita una Cotización</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campos del formulario */}
              <div className="space-y-2">
                <label htmlFor="nombre" className="text-sm font-medium">
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Tu nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              {/* Repetir para otros campos */}
              <div className="space-y-2">
                <label htmlFor="empresa" className="text-sm font-medium">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Nombre de tu empresa"
                  required
                  value={formData.empresa}
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
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="tu@email.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="telefono" className="text-sm font-medium">
                  Teléfono
                </label>
                <input
                  id="telefono"
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Tu número de teléfono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="plan" className="text-sm font-medium">
                Plan de interés
              </label>
              <select
                id="plan"
                className="w-full p-3 border border-gray-300 rounded-md"
                required
                value={formData.plan}
                onChange={handleChange}
              >
                <option value="">Selecciona un plan</option>
                <option value="plan30">Plan 30 (Hasta 30 personas)</option>
                <option value="plan60">Plan 60 (Hasta 60 personas)</option>
                <option value="plan120">Plan 120 (Hasta 120 personas)</option>
                <option value="personalizado">Plan personalizado</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="mensaje" className="text-sm font-medium">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="w-full p-3 border border-gray-300 rounded-md min-h-[120px]"
                placeholder="Cuéntanos más sobre tus necesidades"
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
              {loading ? 'Enviando...' : 'Enviar solicitud'}
            </Button>

            {submitSuccess && (
              <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
                ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioCotizacion;