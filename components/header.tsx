"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Mountain } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/terapias", label: "Terapias" },
    { href: "/productos", label: "Productos" },
    { href: "/empresas", label: "Empresas" },
    { href: "/testimonios", label: "Testimonios" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="Logo-Kryon.webp" alt="Logo-Kryon" />
            <span className="font-bold text-xl text-[#053c6d] dark:text-white">KRYON</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "text-[#39a6cf] dark:text-[#39a6cf]"
                    : "text-foreground/80 hover:text-[#39a6cf] dark:text-foreground/80 dark:hover:text-[#39a6cf]",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="ml-2">
              
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={cn(
                  "px-4 py-3 text-sm font-medium rounded-md transition-colors",
                  pathname === link.href
                    ? "bg-[#39a6cf]/10 text-[#39a6cf]"
                    : "hover:bg-[#39a6cf]/10 hover:text-[#39a6cf]",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
