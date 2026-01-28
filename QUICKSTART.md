# 🚀 Inicio Rápido - Complejo San José

## Para Desarrolladores

### 1. Primera vez
```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

Abre http://localhost:3000

### 2. Editar contenido
Edita: `content/site.json`

### 3. Agregar imágenes
Coloca tus imágenes en:
- `/public/images/brand/` - Logo
- `/public/images/services/` - Fotos de servicios
- `/public/images/gallery/` - Galería

### 4. Verificar calidad
```bash
pnpm lint          # Verificar código
pnpm type-check    # Verificar tipos
pnpm format        # Formatear código
```

### 5. Build de producción
```bash
pnpm build
pnpm start
```

---

## Para Clientes / No Técnicos

### ¿Cómo editar el contenido?

**Archivo: `content/site.json`**

1. Abre el archivo en un editor de texto
2. Modifica los textos entre comillas
3. Guarda el archivo
4. Recarga la página

**Ejemplo - Cambiar teléfono:**
```json
"phone": "0987157138"  ← Cambia este número
```

**Ejemplo - Cambiar precio:**
```json
"priceText": "Desde Gs. 80.000 por hora"  ← Cambia este texto
```

### ¿Cómo agregar fotos?

1. Optimiza tus fotos (< 200KB, formato WEBP)
2. Colócalas en la carpeta correcta:
   - Logo → `public/images/brand/`
   - Servicios → `public/images/services/`
3. Actualiza la ruta en `site.json`:
   ```json
   "gallery": ["/images/services/tu-foto.webp"]
   ```

### ¿Cómo cambiar colores?

**Archivo: `app/globals.css`**

Busca las variables CSS:
```css
--primary: #3EBEC8;     ← Color principal
--secondary: #94C021;   ← Color secundario
```

Cambia los valores hexadecimales.

---

## Checklist Pre-Lanzamiento

- [ ] Logo real colocado en `/public/images/brand/logo.svg`
- [ ] Fotos de todos los servicios agregadas
- [ ] Información de contacto verificada en `site.json`
- [ ] Precios actualizados
- [ ] Links de redes sociales agregados
- [ ] Horarios correctos
- [ ] Build exitoso (`pnpm build`)
- [ ] Testeado en móvil

---

## Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Genera versión de producción |
| `pnpm start` | Inicia servidor de producción |
| `pnpm lint` | Verifica errores de código |
| `pnpm format` | Formatea el código |

---

## ¿Necesitas ayuda?

1. **Errores de código**: Ejecuta `pnpm lint` para ver qué está mal
2. **Cambios no aparecen**: Guarda el archivo y recarga (Ctrl/Cmd + R)
3. **Servidor no inicia**: Ejecuta `pnpm install` de nuevo

---

## Próximos pasos después del MVP

Ver archivo: `PROJECT_STATUS.md` → Sección "PRÓXIMOS PASOS RECOMENDADOS"

---

*¡Tu landing page está lista para personalizarse!* 🎉
