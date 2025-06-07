import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KRYON - Centro de Tecnología Cuántica y Bienestar",
  description:
    "Descubre el poder transformador de la terapia emocional, cuántica y energética para alcanzar un bienestar integral y una salud holística. Integra terapias zen, mindfulness para el estrés y técnicas de relajación avanzadas como meditación guiada, respiración consciente y alineación de chakras, diseñadas para restaurar tu equilibrio emocional, energía vital y armonía interior. Nuestro enfoque combina terapias alternativas innovadoras —desde sanación con cristales y reiki hasta tecnología cuántica de vanguardia— para impulsar tu crecimiento personal, liberación emocional y fortaleza mental. Supera el estrés, la ansiedad y traumas con sesiones en línea o presenciales, respaldadas por terapias complementarias como yoga terapéutico, musicoterapia y sanación del alma. Potencia tu autocuidado, resiliencia y conexión espiritual mientras trabajamos en tu alineación energética, limpieza del aura y regulación emocional. Ya sea para manejo del estrés, terapia de pareja, duelo o desarrollo espiritual, aquí encontrarás un espacio seguro con apoyo terapéutico profesional. Transforma tu realidad con herramientas de autoayuda, frecuencias cuánticas y medicina energética que promueven paz interior, vitalidad y prosperidad. ¡Tu camino hacia la plenitud, serenidad y calma duradera comienza ahora. Terapias del futuro, resultados tangibles.",
  keywords:
    "terapia emocional, terapia cuántica, terapia energética, terapia zen, bienestar, cuidado personal, salud holística, atención plena, relajación, reducción del estrés, terapia para el estrés, manejo del estrés, sanación emocional, equilibrio emocional, armonía interior, crecimiento personal, desarrollo personal, autoayuda, autocuidado, sanación cuántica, medicina cuántica, frecuencia cuántica, energía vital, equilibrio energético, sanación energética, alineación energética, terapias alternativas, terapias complementarias, terapia integral, terapia natural, terapia holística, mindfulness para el estrés, técnicas de relajación, meditación, meditación guiada, meditación para el estrés, respiración consciente, respiración profunda, relajación muscular progresiva, visualización creativa, terapia para la ansiedad, terapia para la depresión, terapia para traumas, terapia de duelo, terapia de pareja, terapia familiar, terapia individual, terapia en línea, terapia a distancia, sesiones de terapia, consulta terapéutica, bienestar mental, salud mental, equilibrio mental, mente sana, emociones positivas, inteligencia emocional, gestión emocional, control emocional, regulación emocional, liberación emocional, sanación profunda, transformación interior, paz interior, serenidad, calma, tranquilidad, reducir la ansiedad, aliviar la depresión, superar el estrés, desarrollo espiritual, conexión espiritual, consciencia plena, sanación del alma, terapias vibracionales, terapias de sonido, terapia con cristales, reiki, yoga terapéutico, pilates terapéutico, shiatsu, acupuntura, aromaterapia, musicoterapia, terapias innovadoras, terapias de vanguardia, terapias del futuro, tecnología cuántica, bienestar cuántico, productos cuánticos, dispositivos cuánticos, terapia de luz, terapia de color, sanación con luz, sanación con color, campo energético, aura, chakras, alineación de chakras, limpieza energética, protección energética, empoderamiento personal, fortaleza emocional, resiliencia, autoestima, autoconfianza, superación personal, motivación, inspiración, vitalidad, energía positiva, pensamiento positivo, ley de la atracción, manifestación, abundancia, prosperidad, felicidad, alegría, plenitud, satisfacción, propósito de vida, misión de vida, sentido de vida, conectar con el ser, amor propio, aceptación, perdón, compasión, gratitud, transformación personal, cambio de vida, creación de realidad, sincronicidad, intención, enfoque, claridad, sabiduría interior, intuición, conexión con la naturaleza, armonía con el universo, flujo de vida, confianza en el proceso, despertar espiritual, expansión de la conciencia, terapia para el dolor, terapia para el insomnio, terapia para enfermedades, mejora de la salud, calidad de vida, longevidad, antienvejecimiento, revitalización, restauración, terapia para niños, terapia para adolescentes, terapia para adultos, terapia para adultos mayores, terapias grupales, talleres terapéuticos, retiros de bienestar, retiros de relajación, retiros de mindfulness, terapeuta, psicólogo, psicoterapeuta, coach, mentor, guía espiritual, sanador, facilitador, espacio seguro, confidencialidad, apoyo emocional, acompañamiento terapéutico, bienestar integral.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.kryoncenter.com/",
    title: "KRYON - Centro de Tecnología Cuántica y Bienestar",
    description:
      "Transforma tu energía, transforma tu vida con tecnología cuántica avanzada para tu bienestar físico y mental.",
    images: [
      {
        url: "https://www.kryoncenter.com/Kryon-meta.webp", // Reemplazar con imagen real de la marca
        width: 1200,
        height: 630,
        alt: "KRYON - Tecnología Cuántica para el Bienestar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Analytics />
          <SpeedInsights />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
import { icons } from "lucide-react";
