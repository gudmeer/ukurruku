# 🚀 Guía de Deploy - Paso a Paso

Esta guía te ayudará a publicar tu aplicación en internet de forma **GRATIS** usando Vercel o Netlify.

## 📋 Requisitos Previos

1. Tener el código del proyecto
2. Una cuenta de GitHub (gratis)
3. Una cuenta de Vercel o Netlify (gratis)

---

## 🌐 MÉTODO 1: Deploy con Vercel (Recomendado - Más Fácil)

### Paso 1: Sube tu código a GitHub

1. Ve a [GitHub.com](https://github.com) y crea una cuenta si no tienes
2. Click en el botón "+" arriba a la derecha → "New repository"
3. Ponle un nombre: `juegos-amigos`
4. Click en "Create repository"

5. En tu computadora, abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Primera versión de juegos para amigos"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/juegos-amigos.git
git push -u origin main
```

(Reemplaza `TU-USUARIO` con tu usuario de GitHub)

### Paso 2: Deploy en Vercel

1. Ve a [Vercel.com](https://vercel.com)
2. Click en "Sign Up" y elige "Continue with GitHub"
3. Click en "Add New..." → "Project"
4. Busca tu repositorio `juegos-amigos` y click en "Import"
5. Vercel detectará automáticamente que es un proyecto Vite
6. Click en "Deploy"
7. ¡Espera 1-2 minutos y listo! 🎉

Tu app estará disponible en una URL como: `https://juegos-amigos.vercel.app`

---

## 🎯 MÉTODO 2: Deploy con Netlify (También muy fácil)

### Opción A: Con GitHub (Recomendado)

1. Sube tu código a GitHub (sigue el Paso 1 de arriba)
2. Ve a [Netlify.com](https://netlify.com)
3. Click en "Sign up" y elige "GitHub"
4. Click en "Add new site" → "Import an existing project"
5. Click en "GitHub"
6. Selecciona tu repositorio `juegos-amigos`
7. Configuración de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
8. Click en "Deploy site"
9. ¡Listo! 🎉

Tu app estará en: `https://nombre-aleatorio.netlify.app`

### Opción B: Drag & Drop (Sin GitHub - Super Fácil)

1. En tu computadora, abre la terminal en la carpeta del proyecto
2. Ejecuta:
```bash
npm install
npm run build
```
3. Esto creará una carpeta llamada `dist`
4. Ve a [Netlify Drop](https://app.netlify.com/drop)
5. Arrastra la carpeta `dist` a la zona donde dice "Drag and drop your site output folder here"
6. ¡Listo! Tu sitio estará en línea en segundos 🎉

---

## 📱 Compartir con tus Amigos

Una vez deployed, recibirás una URL como:
- Vercel: `https://juegos-amigos.vercel.app`
- Netlify: `https://tu-sitio.netlify.app`

**¡Simplemente comparte ese link con tus amigos!** Ellos pueden:
- Abrirlo en su celular
- Abrirlo en su computadora
- Guardarlo en favoritos
- Agregarlo a su pantalla de inicio (en móvil)

---

## 🔄 Actualizar tu Sitio

Si haces cambios al código:

### Con Vercel o Netlify + GitHub:
1. Haz los cambios en tu código
2. Ejecuta:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```
3. ¡Vercel/Netlify actualizará automáticamente tu sitio en 1-2 minutos!

### Con Netlify Drag & Drop:
1. Haz los cambios
2. Ejecuta `npm run build`
3. Arrastra la nueva carpeta `dist` a Netlify
4. ¡Listo!

---

## 🎨 Personalizar el Dominio (Opcional)

### En Vercel:
1. Ve a tu proyecto en Vercel
2. Click en "Settings" → "Domains"
3. Agrega tu dominio personalizado (si tienes uno)

### En Netlify:
1. Ve a "Site settings" → "Domain management"
2. Click en "Add custom domain"

**Consejo**: Ambos servicios ofrecen dominios gratis que lucen profesionales:
- `tu-nombre.vercel.app`
- `tu-nombre.netlify.app`

---

## ❓ Solución de Problemas

### Error: "Build failed"
- Asegúrate de que `package.json` tenga todas las dependencias
- Verifica que el comando de build sea `npm run build`
- Revisa que la carpeta de publicación sea `dist`

### La página no carga
- Espera 2-3 minutos después del deploy
- Limpia la caché de tu navegador (Ctrl + F5)
- Verifica que los archivos `vercel.json` o `netlify.toml` estén en la raíz del proyecto

### Cambios no se ven
- Asegúrate de hacer `git push` después de tus cambios
- Limpia la caché del navegador
- Espera 1-2 minutos para que se actualice

---

## 💡 Consejos Finales

✅ Vercel es ideal si quieres actualizaciones automáticas con cada push a GitHub
✅ Netlify Drag & Drop es perfecto si quieres algo súper rápido sin Git
✅ Ambos servicios son **100% GRATIS** para proyectos personales
✅ Ambos incluyen HTTPS automático (seguro)
✅ Ambos son súper rápidos en todo el mundo (CDN global)

---

**¿Necesitas ayuda?** Abre un issue en GitHub o contacta al equipo de soporte de Vercel/Netlify. ¡Son muy amigables!

🎉 ¡Disfruta compartiendo tus juegos con tus amigos!
