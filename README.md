# Complejo San José - Landing Page

Landing page profesional para **Complejo San José** en Caaguazú, Paraguay. Diseñada con enfoque mobile-first, optimizada para conversión a WhatsApp y SEO local.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript (modo estricto)
- **Estilos**: Tailwind CSS 4
- **Gestión de paquetes**: pnpm
- **Lint & Format**: ESLint + Prettier
- **Deployment**: Vercel (recomendado)

## 📋 Requisitos

- Node.js 22+ LTS
- pnpm 10+

## 🛠️ Instalación

```bash
# Clonar repositorio
git clone <url-del-repositorio>
cd complejosanjose

# Instalar dependencias
pnpm install

# Copiar variables de entorno
cp .env.example .env.local
```

## 🧑‍💻 Desarrollo

```bash
# Modo desarrollo con Turbopack
pnpm dev

# Type checking
pnpm type-check

# Lint
pnpm lint

# Format
pnpm format
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🏗️ Build y Producción

```bash
# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start
```

## 📁 Estructura del Proyecto

```
complejosanjose/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con SEO
│   ├── page.tsx           # Página de inicio
│   ├── robots.ts          # Configuración de robots
│   └── sitemap.ts         # Sitemap dinámico
├── components/
│   ├── header/            # Componentes de encabezado
│   ├── sections/          # Secciones de la landing
│   └── ui/                # Componentes UI reutilizables
│       ├── button.tsx
│       ├── container.tsx
│       └── section.tsx
├── content/
│   └── site.json          # Source of truth del contenido
├── lib/
│   ├── content.ts         # Helpers para leer contenido
│   └── seo.ts             # Utilidades de SEO
├── types/
│   └── content.ts         # Tipos TypeScript
├── public/
│   └── images/
│       ├── brand/         # Logo y assets de marca
│       ├── hero/          # Imágenes del hero
│       ├── services/      # Imágenes de servicios
│       └── gallery/       # Galería
└── CLAUDE.md              # Documentación detallada del proyecto
```

## 🎨 Paleta de Colores

Basada en el branding del Complejo San José:

- **Primary (Teal)**: `#3EBEC8`
- **Secondary (Verde)**: `#94C021`
- **Accent Yellow**: `#FFEC01`
- **Accent Orange**: `#F9B834`
- **Ink (Texto)**: `#1E1C17`
- **Sky**: `#70B3E8`

## 📝 Editar Contenido

Todo el contenido del sitio se gestiona desde un único archivo JSON:

**`content/site.json`**

Edita este archivo para cambiar:
- Información del complejo
- Servicios y precios
- Horarios
- FAQs
- Promociones
- Metadata SEO

Los tipos TypeScript aseguran que el contenido sea válido.

## 🔄 Próximos Pasos (Post-MVP)

1. **Fase 2**: Migrar contenido a Supabase
2. **Fase 3**: Sistema de reservas online
3. **Fase 4**: Panel de administración
4. **Fase 5**: Galería interactiva con lightbox

Ver `CLAUDE.md` para roadmap completo.

## 📱 SEO & Performance

- ✅ Metadata completa (OpenGraph, Twitter Cards)
- ✅ Schema.org (LocalBusiness/SportsActivityLocation)
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Mobile-first responsive
- ✅ Imágenes optimizadas (next/image)

## 🚀 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno
3. Deploy automático en cada push

```bash
# O deploy manual
vercel
```

## 📞 Contacto

**Complejo San José**
- WhatsApp: 0987 157 138
- Ubicación: Caaguazú, Paraguay

---

**Desarrollado con ❤️ usando Next.js y TypeScript**
