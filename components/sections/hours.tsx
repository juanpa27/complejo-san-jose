"use client"

import { useEffect, useRef } from "react"
import { Clock, Calendar, Info } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const schedule = [
  {
    icon: Clock,
    label: "Lunes a Viernes",
    time: "6:00 AM - 11:00 PM",
    highlight: false,
  },
  {
    icon: Calendar,
    label: "Sábados y Domingos",
    time: "7:00 AM - 11:00 PM",
    highlight: true,
  },
  {
    icon: Info,
    label: "Feriados",
    time: "Horarios especiales - consultar",
    highlight: false,
  },
]

export function Hours() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hours-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".hours-card",
            start: "top 85%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="horarios"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-cyan-50 via-white to-orange-50 overflow-hidden"
    >
      {/* Decorative wave at top */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden transform rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-4">
            Horarios de Atención
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            Abiertos <span className="text-orange-500">todos los días</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Estamos disponibles para recibirte con la mejor atención
          </p>
        </div>

        {/* Schedule cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {schedule.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className={`hours-card relative p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2 ${
                  item.highlight
                    ? "bg-gradient-to-br from-orange-500 to-yellow-500 text-white shadow-xl shadow-orange-500/30"
                    : "bg-white shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    item.highlight
                      ? "bg-white/20 backdrop-blur-sm"
                      : "bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      item.highlight ? "text-white" : "text-white"
                    }`}
                  />
                </div>

                {/* Label */}
                <h3
                  className={`text-lg font-bold mb-2 ${
                    item.highlight ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </h3>

                {/* Time */}
                <p
                  className={`text-xl font-semibold ${
                    item.highlight ? "text-white/90" : "text-cyan-600"
                  }`}
                >
                  {item.time}
                </p>

                {/* Highlight badge */}
                {item.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-white rounded-full text-xs font-bold text-orange-500 shadow-lg">
                    Horario Extendido
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
