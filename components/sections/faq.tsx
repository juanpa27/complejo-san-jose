"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function FAQ() {
  const content = getContent();
  const { faq: faqContent } = content.content;
  const faqs = content.faq;
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".faq-item",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-cyan-100 rounded-full -translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-orange-100 rounded-full translate-x-1/2 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-cyan-100 rounded-full text-cyan-700 text-sm font-medium mb-4">
              {faqContent.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {faqContent.title} <span className="text-cyan-600">{faqContent.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 text-pretty">{faqContent.subtitle}</p>
          </div>

          {/* FAQ items */}
          <div className="space-y-4 mb-12">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-white hover:bg-gray-50 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className={`${openIndex === index ? "text-white/95" : "text-gray-600"}`}>
                      {faq.answer}
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-cyan-50 to-orange-50 p-8 rounded-2xl">
            <MessageCircle className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-gray-600 mb-6">Escríbenos por WhatsApp y con gusto te ayudamos</p>
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold shadow-lg shadow-orange-500/30"
            >
              <a
                href={`https://wa.me/${content.site.whatsapp}?text=Hola,%20tengo%20una%20consulta`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
