# agent.md — Complejo San José (MVP Landing WhatsApp-first)

## 0) Objetivo del Proyecto
Construir una **landing page mobile-first** para **Complejo San José (Caaguazú, Paraguay)** enfocada en **conversión a WhatsApp** (reservas/consultas) y **SEO local** (Google).  
El MVP debe ser **rápido, estable, liviano**, fácil de mantener y preparado para evolucionar a:
- (Fase 2) Contenido dinámico (Supabase u otro CMS)
- (Fase 3) Reserva online (turnos, seña, calendario)

---

## 1) Alcance MVP (qué incluye / qué NO incluye)

### Incluye (MVP)
1. Landing única (Home) con secciones:
   - Hero + CTA WhatsApp fijo
   - Servicios (Pádel, Piscina, Fútbol/Vóley, Pesque y Pague, Quinchos)
   - Precios “desde/consultar” + paquetes/promos (si hay)
   - Ubicación + “Cómo llegar” (Google Maps)
   - Galería (imágenes reales)
   - FAQ (seña, cancelación, reglas, niños, conservadora, etc.)
   - Footer con horarios, redes y contacto
2. SEO local básico (title/description, OpenGraph, schema.org)
3. Performance real para 4G (imágenes optimizadas)
4. Analytics mínimo (GA4 + eventos de click a WhatsApp y Maps)
5. Deploy a Vercel + dominio (canonización con www o sin www)

### No incluye (por ahora)
- Panel admin
- Reservas con calendario/pagos
- Login/roles
- Subida dinámica de imágenes
- Multi-idioma

---

## 2) Stack Tecnológico (actual y seguro)

### Runtime
- **Node.js LTS** (recomendado: LTS vigente en tu momento de implementación)
- Package manager: **pnpm** (preferido) o npm

### Frontend / Framework
- **Next.js (App Router)** — recomendado para SEO y performance
- **React**: usar **la versión recomendada por el release estable de Next** (evitar combinaciones “no soportadas”)
- **TypeScript**: estricto

### UI / Styling
- **Tailwind CSS**
- Componentización propia (sin UI kit pesado para MVP)

### Animaciones (ligeras)
- **GSAP** (solo para microinteracciones puntuales)
- Reglas: no animar TODO; priorizar scroll suave, fades, parallax mínimo, y no afectar performance.

### Contenido (MVP)
- **JSON local** como “source of truth” de textos, links, precios y rutas de imágenes.

### Deploy
- **Vercel** (SSR/SSG/ISR según necesidad)

---

## 3) Estrategia de Rendering (SSG/ISR)
MVP recomendado:
- **SSG** (static) para home y páginas SEO (si existieran).
- Si en Fase 2 el contenido viene de DB: **ISR** (revalidate cada 10–60 min) para reflejar cambios sin redeploy.

Objetivo: **SEO + velocidad** + menor riesgo.

---

## 4) Diseño UX/UI (criterio y estándares)

### Principios de UI
- Mobile-first real: 360px como base
- Jerarquía clara (tipografía + espaciado)
- CTA visible siempre (sticky)
- Evitar “diseño cargado”; usar aire y bloques.

### Paleta sugerida (derivada del logo/banner)
> Ajustable, pero pensada para coherencia visual y contraste.
- **Primary (Teal agua)**: `#3EBEC8`
- **Secondary (Verde)**: `#94C021`
- **Accent (Amarillo sol)**: `#FFEC01`
- **Accent 2 (Naranja)**: `#F9B834`
- **Ink (Texto oscuro)**: `#1E1C17`
- **Sky (Fondo suave)**: `#B8D1DF` / `#70B3E8` (de banner)

Regla: usar **1 primary + 1 accent** por vista.  
No implementar dark mode. Mantener contraste WCAG (texto sobre fondos claros).

### Tipografía
- Headings: una sans moderna (ej. Inter / Manrope)
- Body: misma familia para consistencia
- Evitar fuentes “display” pesadas.

---

## 5) Contenido / Branding (fuentes)
- Logo: PNG provisto (ideal: pedir también **SVG** si es posible)
- Bio/servicios (Facebook):  
  - 2 canchas de pádel indoor  
  - Piscina  
  - Canchas de fútbol y voley  
  - Pesque y Pague  
  - Quinchos  
  - Amplio estacionamiento  
  - Tel contacto: 0987157138 (verificar formato final)
- Ubicación Google Maps: Caaguazú  
  (https://www.google.com/maps?q=GXJX+GJ3+Complejo+San+Jos%C3%A9,+Unnamed+Road,+Caaguaz%C3%BA...)

---

## 6) Estructura de Proyecto (App Router)

### Carpetas
- `app/`
  - `layout.tsx` (Shell, metadata base)
  - `page.tsx` (Landing)
  - `sitemap.ts` (opcional, recomendado)
  - `robots.ts` (recomendado)
  - `opengraph-image.tsx` (opcional si se genera)
- `components/`
  - `header/` (navbar, sticky CTA)
  - `sections/` (Hero, Services, Pricing, Location, Gallery, FAQ, Footer)
  - `ui/` (Button, Container, Badge, Card, etc.)
- `content/`
  - `site.json` (source of truth MVP)
- `lib/`
  - `content.ts` (loader + types)
  - `analytics.ts` (event helpers)
  - `seo.ts` (helpers para metadata/schema)
- `public/`
  - `images/brand/logo.png`
  - `images/hero/*`
  - `images/services/*`
  - `images/gallery/*`
- `styles/`
  - `globals.css` (Tailwind base)
- `types/`
  - `content.d.ts` (tipos de JSON)
- `tests/` (opcional MVP)
- `.github/` (dependabot / CI opcional)

---

## 7) Convenciones de Código (alto estándar)

### TypeScript
- `"strict": true`
- Tipos explícitos para content JSON
- No usar `any` (salvo wrappers aislados)

### React / Next
- Server Components por defecto
- Client Components solo cuando:
  - useState/useEffect
  - GSAP (animación en cliente)
  - listeners de eventos (click tracking)
- Componentes puros, props bien tipados.

### Naming
- Archivos: `kebab-case.tsx`
- Componentes: `PascalCase`
- Hooks: `useXxx`
- IDs de secciones: `#services`, `#pricing`, `#location`, etc. (para anchors)

### Lint / Format
- ESLint + Next config
- Prettier
- Reglas: no console.logs en prod.

---

## 8) JSON “Content-first” (para migrar fácil a Supabase)

### Reglas
- No guardar HTML dentro del JSON
- Guardar strings + arrays + rutas de imágenes
- Mantener `slug` estable por servicio: `padel`, `piscina`, `futbol`, `pesca`, `quinchos`

### Ejemplo recomendado de `content/site.json`
- `site` (nombre, ciudad, teléfono, whatsapp, mapsUrl, redes)
- `hours`
- `benefits`
- `services[]` (title, bullets, priceText, ctaMessage, gallery[])
- `promos[]`
- `faq[]`
- `seo` (title/description por página)

Objetivo: mañana reemplazar `content.ts` para leer desde Supabase sin tocar la UI.

---

## 9) Imágenes (MVP)
MVP: imágenes **locales en `/public`**.
- Formato preferido: WEBP
- Hero: ~1600px ancho
- Galería: 1000–1200px
- Peso ideal: 80–250KB por imagen (aprox)
- Usar `next/image` con `sizes` correcto para mobile.

---

## 10) SEO Local (mínimo viable, pero “pro”)

### Metadata base
- `title`: "Complejo San José en Caaguazú | Pádel, Piscina, Fútbol, Pesque y Pague"
- `description`: orientada a WhatsApp + ubicación.

### OpenGraph (WhatsApp share)
- `og:title`, `og:description`, `og:image` (una imagen “social preview”)
- Esto es CRÍTICO para que al compartir en WhatsApp se vea profesional.

### Schema.org
- `LocalBusiness` o `SportsActivityLocation`
  - name, address, geo, telephone, openingHours, url
  - `sameAs`: redes sociales

### Google Business Profile
- Requisito “no negociable” para SEO local:
  - fotos reales
  - horarios
  - link a landing
  - reseñas

---

## 11) Analytics / Medición (MVP)
- GA4 con eventos:
  - `click_whatsapp` (incluye `service_slug`)
  - `click_maps`
  - `click_call` (teléfono)
- Meta Pixel si harán anuncios Meta (fase ads)
- Evitar scripts pesados; cargar con estrategia `afterInteractive`.

---

## 12) Animaciones (GSAP) — reglas de uso
Objetivo: “premium” sin peso.
- 1) Hero: fade + slight translate (1 vez)
- 2) Services cards: stagger suave al entrar en viewport
- 3) Microinteracción CTA: hover/tap (scale mínimo)

Reglas:
- Respeta `prefers-reduced-motion`
- No usar parallax pesado
- No animar layout (evitar reflow)
- Limitar a 2–3 escenas GSAP en total.

---

## 13) Seguridad y mantenimiento (evitar “dramas”)
- Usar versiones **soportadas por Next** (no mezclar React/Next fuera de soporte)
- Mantener lockfile en repo
- `pnpm audit` / `npm audit` periódicamente
- Dependabot (o Renovate) recomendado
- No exponer keys en el cliente
- Solo variables públicas con prefijo `NEXT_PUBLIC_`

---

## 14) Variables de Entorno (plantilla)
Archivo: `.env.example`
- `NEXT_PUBLIC_GA4_ID=`
- `NEXT_PUBLIC_META_PIXEL_ID=` (si aplica)

---

## 15) Deploy + Dominio (Vercel)
- Canonical:
  - elegir `https://complejosanjose.com.py` o `https://www...` (uno)
  - redirigir el otro con 301
- SSL automático
- Revisar que el `og:image` sea accesible por URL pública

---

## 16) Definition of Done (DoD) — MVP listo para producción
1. Mobile (360px) perfecto: CTA sticky, tipografía, espaciados
2. WhatsApp links con mensaje prearmado por servicio
3. Botón “Cómo llegar” abre Google Maps
4. OpenGraph se ve bien al compartir en WhatsApp
5. Imágenes optimizadas y sin peso excesivo
6. Lighthouse mobile: performance decente (objetivo: “verde” razonable)
7. SEO metadata + schema
8. GA4 eventos WhatsApp/Maps funcionando
9. Deploy en Vercel con dominio + SSL OK
10. Contenido editable desde `content/site.json` sin tocar componentes

---

## 17) Backlog recomendado (post-MVP)
- Páginas SEO por servicio: `/padel-en-caaguazu`, etc.
- Migración contenido a Supabase + ISR
- Reserva con calendario + seña (Mercado Pago u opción local)
- Panel admin mínimo (solo owner)
- Galería con lightbox liviano

---

## 18) Contacto / Datos actuales (a confirmar)
- Nombre: Complejo San José
- Ciudad: Caaguazú
- Servicios: pádel indoor, piscina, fútbol/voley, pesque y pague, quinchos, estacionamiento
- Tel: 0987157138 (confirmar formato + WhatsApp)
- Maps: GXJX+GJ3 Complejo San José, Caaguazú (link provisto)

---

## 19) Checklist de Assets necesarios (del cliente)
- Logo PNG (ideal: también SVG)
- 10–15 fotos reales (mínimo 6 para salir)
- Horarios
- Precios (aunque sea “desde”)
- Reglas básicas (seña/cancelación/piscina/niños)
- Link de Instagram/Facebook
