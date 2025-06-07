import Link from "next/link"
import { Mountain } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#053c6d] text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Logo-Kryon.webp" alt="Logo-Kryon" className="w-8 h-8" />
              <span className="font-bold text-xl">KRYON</span>
            </div>
            <p className="text-sm text-white/80 mb-4">
              Tecnología cuántica avanzada para tu bienestar físico y mental.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61574038588564" target="_blank" prefetch={false} className="text-white hover:text-[#39a6cf] transition-colors">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/kryon-by-aq/?viewAsMember=true" target="_blank" prefetch={false} className="text-white hover:text-[#39a6cf] transition-colors">
              <svg data-testid="geist-icon" stroke-linejoin="round" viewBox="0 0 16 16" width="30" ><path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5 6.75V13H3V6.75H5ZM5 4.50008C5 5.05554 4.61409 5.5 3.99408 5.5H3.98249C3.38582 5.5 3 5.05554 3 4.50008C3 3.93213 3.39765 3.5 4.00584 3.5C4.61409 3.5 4.98845 3.93213 5 4.50008ZM8.5 13H6.5C6.5 13 6.53178 7.43224 6.50007 6.75H8.5V7.78371C8.5 7.78371 9 6.75 10.5 6.75C12 6.75 13 7.59782 13 9.83107V13H11V10.1103C11 10.1103 11 8.46616 9.7361 8.46616C8.4722 8.46616 8.5 9.93972 8.5 9.93972V13Z" fill="currentColor"></path></svg>
              </Link>
              { /*<Link href="#" target="_blank" prefetch={false} className="text-white hover:text-[#39a6cf] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-white hover:text-[#39a6cf] transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/terapias" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Terapias
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/empresas" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Empresas
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links 
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Más Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/testimonios" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-[#39a6cf] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          */}

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 text-[#39a6cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-white/80">quanticakryon@outlook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 text-[#39a6cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-white/80">+52 (99) 3754 8276</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 text-[#39a6cf]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/80">Villahermosa, Tabasco</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/60 mb-4 md:mb-0">
              &copy; {currentYear} REGARBO, S.A. de C.V. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
