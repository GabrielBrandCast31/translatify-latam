import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronDown, MessageCircle, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-kit-es-fixed.png";
import howImage from "@/assets/como-funciona-es.png";
import testimonialsImage from "@/assets/depoimentos-es.png";
import contentsImage from "@/assets/contenido-kit-es.png";
import guaranteeImage from "@/assets/garantia-es.png";
import kit1 from "@/assets/kits/kit-1.png";
import kit2 from "@/assets/kits/kit-2.jpg";
import kit3 from "@/assets/kits/kit-3.jpg";
import kit4 from "@/assets/kits/kit-4.jpg";
import kit5 from "@/assets/kits/kit-5.jpg";
import kit6 from "@/assets/kits/kit-6.jpg";
import kit7 from "@/assets/kits/kit-7.jpg";
import kit8 from "@/assets/kits/kit-8.jpg";
import kit9 from "@/assets/kits/kit-9.jpg";
import productImage from "@/assets/kits/kit-10.jpg";

const CHECKOUT_URL = "https://checkout.lowify.com.br/checkout.php?product_id=czlX3K";
const kits = [kit1, kit2, kit3, kit4, kit5, kit6, kit7, kit8, kit9];

const benefits = [
  "+10.000 TEMAS DE FIESTA",
  "100% EDITABLE EN CANVA",
  "TOPPERS DE PASTEL Y BANDERINES",
  "ARCHIVOS EN ALTA CALIDAD",
  "ACCESO INMEDIATO Y DE POR VIDA",
  "GRUPO EXCLUSIVO EN WHATSAPP",
  "ACTUALIZACIONES GRATUITAS",
];

const faqs = [
  ["¿Cómo recibiré el material?", "Después de confirmar el pago, recibirás el material en PDF directamente por WhatsApp y correo electrónico."],
  ["¿Necesito imprimir el material?", "Sí. Recomendamos imprimirlo para realizar el montaje de tu kit de fiesta."],
  ["¿En qué formato vienen los archivos?", "Todos los archivos están disponibles en PDF, PNG y también en formato Silhouette Studio 3, lo que garantiza una mejor calidad de corte e impresión."],
  ["¿Necesito Canva Pro?", "¡No! Puedes editar todo usando una cuenta gratuita de Canva."],
  ["¿Qué métodos de pago aceptan?", "Aceptamos PIX."],
  ["¿Tiene garantía?", "¡Sí! Ofrecemos una garantía de 7 días. Si no quedas satisfecho, te devolvemos el 100% de tu dinero."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kit Fiesta Digital | 10.000+ temas editables" },
      { name: "description", content: "Más de 10.000 temas de fiesta editables en Canva, listos para imprimir, recortar y armar." },
      { property: "og:title", content: "Kit Fiesta Digital | 10.000+ temas editables" },
      { property: "og:description", content: "Crea la fiesta de tus sueños con más de 10.000 temas editables." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Countdown() {
  const [seconds, setSeconds] = useState(299);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((value) => (value > 0 ? value - 1 : 299)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainder = (seconds % 60).toString().padStart(2, "0");
  return <span className="rounded bg-countdown px-2 py-1 font-mono text-xs tracking-wider">{minutes}:{remainder}</span>;
}

function BuyButton({ label = "QUIERO ACCEDER AHORA" }: { label?: string }) {
  return (
    <Button asChild className="h-12 w-full rounded-md bg-cta text-sm font-extrabold text-cta-foreground shadow-cta hover:bg-cta-hover">
      <a href={CHECKOUT_URL}>{label}</a>
    </Button>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-page pb-20 font-sans text-foreground">
      <div className="mx-auto w-full max-w-[430px] overflow-hidden bg-background shadow-page">
        <div className="flex h-10 items-center justify-center gap-3 bg-offer px-4 text-xs font-bold text-offer-foreground">
          <span>¡Oferta por tiempo limitado!</span><Countdown />
        </div>

        <img src={heroImage} alt="Kit Fiesta Digital con más de 10.000 temas" className="block h-auto w-full" />

        <section className="px-8 py-10 text-center">
          <h1 className="text-xl font-extrabold uppercase text-title">ALGUNOS DE NUESTROS KITS</h1>
          <p className="mt-6 text-base leading-snug text-copy">Todos incluyen plantillas <strong className="text-highlight">100% editables en Canva</strong>, listas para imprimir, recortar y armar.</p>
          <div className="mt-6 flex snap-x gap-2 overflow-x-auto rounded-lg pb-2">
            {kits.map((kit, index) => <img key={kit} src={kit} alt={`Ejemplo de kit de fiesta ${index + 1}`} className="aspect-square w-[82%] shrink-0 snap-center rounded-lg object-cover" loading={index > 1 ? "lazy" : "eager"} />)}
          </div>
          <p className="mt-3 text-sm font-semibold text-copy">¡Hay más de 10.000 temas de fiesta para elegir! 🎉</p>
        </section>

        <section className="bg-soft px-5 py-9 text-center">
          <h2 className="section-title">¿CÓMO FUNCIONA?</h2>
          <img src={howImage} alt="Cómo comprar, recibir, editar e imprimir el kit" className="mt-5 w-full rounded-lg" loading="lazy" />
        </section>

        <section className="px-5 py-10 text-center">
          <h2 className="section-title">TESTIMONIOS DE QUIENES YA COMPRARON</h2>
          <img src={testimonialsImage} alt="Testimonios en español de clientes" className="mt-6 w-full rounded-lg" loading="lazy" />
        </section>

        <section className="bg-soft px-5 py-10 text-center">
          <h2 className="section-title">¿QUÉ INCLUYE EL KIT?</h2>
          <img src={contentsImage} alt="Todo lo incluido en el Kit Fiesta Digital" className="mt-6 w-full rounded-lg" loading="lazy" />
        </section>

        <section className="px-7 py-10 text-center">
          <h2 className="text-xl font-extrabold text-title">TODO ESTO POR SOLO R$ 10,00</h2>
          <p className="mt-2 text-sm text-muted-foreground">¡Acceso inmediato, fácil de usar y listo para comenzar hoy!</p>
          <img src={productImage} alt="Kit con diez mil temas de fiesta" className="mx-auto mt-6 aspect-square w-full max-w-xs rounded-lg object-cover" loading="lazy" />
          <p className="mt-6 text-sm text-muted-foreground">Antes <span className="line-through">R$ 87,00</span>, ahora solo:</p>
          <div className="mt-1 text-5xl font-black text-price">R$ 10,00</div>
          <ul className="mx-auto my-7 max-w-xs space-y-3 text-left">
            {benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2 text-sm font-bold"><Check className="size-5 shrink-0 text-success" strokeWidth={3} />{benefit}</li>)}
          </ul>
          <BuyButton label="COMPRAR AHORA" />
          <div className="mt-5 flex items-center justify-center gap-2 text-xs leading-snug text-muted-foreground"><MessageCircle className="size-8 shrink-0 text-whatsapp" />Después de la compra, recibirás el material en PDF directamente por WhatsApp y correo electrónico.</div>
        </section>

        <section className="bg-soft px-7 py-10">
          <h2 className="section-title text-center">PREGUNTAS FRECUENTES</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map(([question, answer]) => <details key={question} className="group py-4"><summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold">{question}<ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="pt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p></details>)}
          </div>
        </section>

        <section className="px-5 py-9">
          <img src={guaranteeImage} alt="Garantía incondicional de 7 días" className="w-full" loading="lazy" />
        </section>

        <footer className="bg-footer px-7 py-8 text-center text-[11px] leading-relaxed text-footer-foreground">
          <ShieldCheck className="mx-auto mb-3 size-7" />
          <p>© 2026 Inspira & Rabisca. Todos los derechos reservados.</p>
          <p className="mt-3 opacity-80">Este material está protegido por derechos de autor. Queda prohibida su reproducción, distribución, intercambio o reventa, total o parcial, sin autorización previa del autor.</p>
        </footer>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-50 mx-auto w-full max-w-[430px] bg-background/95 px-8 py-3 shadow-sticky backdrop-blur-sm">
        <BuyButton />
      </div>
    </main>
  );
}