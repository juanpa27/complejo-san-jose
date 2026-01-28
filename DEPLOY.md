# 🚀 Guía de Deploy

## Opciones de Deploy

### 1. Vercel (Recomendado) ⭐

**Más fácil y optimizado para Next.js**

#### Opción A: Deploy desde GitHub
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Haz clic en "New Project"
4. Importa tu repositorio
5. Vercel detectará automáticamente Next.js
6. ¡Deploy automático!

#### Opción B: Deploy con CLI
```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

#### Configuración de Vercel
- **Framework Preset**: Next.js
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`
- **Install Command**: `pnpm install`

#### Variables de Entorno en Vercel
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `NEXT_PUBLIC_GA4_ID` (opcional)
   - Otras variables públicas

---

### 2. Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

**netlify.toml:**
```toml
[build]
  command = "pnpm build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### 3. Railway

1. Conecta tu repo en [railway.app](https://railway.app)
2. Railway detecta Next.js automáticamente
3. Deploy automático

---

### 4. DigitalOcean App Platform

1. Conecta tu repo en DigitalOcean
2. Selecciona Node.js
3. Build command: `pnpm build`
4. Run command: `pnpm start`

---

## 🔧 Configuración de Dominio

### Dominio Sugerido
`complejosanjose.com.py` o `complejosanjose.com`

### En Vercel:
1. Settings → Domains
2. Add domain
3. Sigue las instrucciones DNS

### Configuración DNS (ejemplo):
```
Type: A
Name: @
Value: 76.76.21.21 (IP de Vercel)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Redireccionamiento www
Decide entre:
- `complejosanjose.com` → `www.complejosanjose.com`
- `www.complejosanjose.com` → `complejosanjose.com`

Configura el canonical en `lib/seo.ts`

---

## ✅ Checklist Pre-Deploy

- [ ] Todas las imágenes optimizadas y cargadas
- [ ] Contenido en `content/site.json` verificado
- [ ] Información de contacto correcta (WhatsApp, teléfono)
- [ ] Enlaces de redes sociales configurados
- [ ] URL de Google Maps verificada
- [ ] Build local exitoso (`pnpm build`)
- [ ] Tests de lint pasando (`pnpm lint`)
- [ ] Type-check sin errores (`pnpm type-check`)
- [ ] Variables de entorno configuradas
- [ ] Dominio registrado y DNS configurado

---

## 🔍 Post-Deploy

### Verificaciones Importantes

1. **SEO Check**
   - Abre [https://www.opengraph.xyz/](https://www.opengraph.xyz/)
   - Verifica que las Open Graph tags se vean bien
   - Comparte en WhatsApp para verificar preview

2. **Google Search Console**
   - Agrega tu sitio en [search.google.com/search-console](https://search.google.com/search-console)
   - Envía el sitemap: `https://tudominio.com/sitemap.xml`
   - Solicita indexación

3. **Performance**
   - Corre Lighthouse en Chrome DevTools
   - Objetivo: Performance > 90, SEO > 95

4. **Mobile Test**
   - [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
   - Verifica en dispositivos reales

5. **Links**
   - Prueba todos los botones de WhatsApp
   - Verifica "Cómo llegar" abre Google Maps
   - Prueba en móvil real

---

## 📊 Analytics (Opcional - Fase 2)

### Google Analytics 4
1. Crea propiedad en [analytics.google.com](https://analytics.google.com)
2. Obtén tu `GA4_ID` (G-XXXXXXXXXX)
3. Agrega a `.env.local`:
   ```
   NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
   ```
4. Implementa en `app/layout.tsx` (código disponible en documentación)

### Meta Pixel (si harás ads)
Similar a GA4, obtén pixel ID y agrega script.

---

## 🐛 Troubleshooting

### Error: "Module not found"
```bash
rm -rf node_modules .next
pnpm install
pnpm build
```

### Error de Build en Vercel
- Verifica que `pnpm-lock.yaml` esté en el repo
- Asegúrate que `pnpm-workspace.yaml` esté presente

### Imágenes no cargan
- Verifica que las rutas en `site.json` coincidan con `/public/images/`
- Las rutas deben empezar con `/images/` (sin `public`)

---

## 📱 Contacto para Soporte

Si tienes problemas con el deploy, revisa:
1. Logs de build en tu plataforma
2. Consola del navegador (F12)
3. `pnpm build` localmente para reproducir

**¡El proyecto está listo para producción!** 🎉
