# 📸 Imágenes del Proyecto

Esta carpeta contendrá todas las imágenes del sitio web.

## Estructura de carpetas:

### `/brand`
- **Logo**: `logo.png` o `logo.svg` (recomendado SVG)
- **OG Image**: `og-image.jpg` (1200x630px) - Para compartir en redes sociales

### `/hero`
- Imágenes principales del hero section
- Formato: WEBP
- Tamaño recomendado: 1600px de ancho
- Peso: 150-300KB

### `/services`
- `padel-1.webp`, `padel-2.webp`
- `piscina-1.webp`
- `futbol-1.webp`
- `pesca-1.webp`
- `quincho-1.webp`

Formato: WEBP
Tamaño: 1000-1200px de ancho
Peso: 80-150KB

### `/gallery`
- Imágenes para la galería del sitio
- Formato: WEBP
- Tamaño: 800-1000px de ancho
- Peso: 60-100KB

## 🔧 Optimización de Imágenes

### Herramientas recomendadas:
1. **Squoosh.app** - https://squoosh.app (online, gratis)
2. **TinyPNG** - https://tinypng.com (online, gratis)
3. **ImageOptim** - https://imageoptim.com (Mac)
4. **RIOT** - https://riot-optimizer.com (Windows)

### Convertir a WEBP:
```bash
# Con ImageMagick (instalar primero)
magick input.jpg -quality 85 output.webp

# Con cwebp (de Google)
cwebp -q 85 input.jpg -o output.webp
```

### Checklist de imágenes:
- [ ] Logo en PNG o SVG
- [ ] OG Image (1200x630px)
- [ ] Al menos 2 imágenes de cada servicio
- [ ] 6-10 imágenes para galería
- [ ] Todas las imágenes optimizadas (< 200KB)
- [ ] Formato WEBP preferido

## 📝 Naming Convention

Usar nombres descriptivos en minúsculas con guiones:
- ✅ `padel-cancha-indoor-1.webp`
- ✅ `piscina-vista-general.webp`
- ❌ `IMG_1234.jpg`
- ❌ `Foto Cancha.png`

## 🎨 Recomendaciones de Fotografía

1. **Iluminación natural** siempre que sea posible
2. **Mostrar personas** usando las instalaciones (vida real)
3. **Diferentes ángulos** de cada servicio
4. **Detalles importantes**: iluminación, césped, limpieza
5. **Fotos durante el día** y algunas nocturnas con iluminación
6. **Mostrar instalaciones completas**: estacionamiento, vestuarios, áreas de descanso

## 🚀 Próximos pasos

1. Obtener fotos profesionales o de buena calidad
2. Optimizarlas según las especificaciones
3. Colocarlas en las carpetas correspondientes
4. Actualizar referencias en `content/site.json` si es necesario
