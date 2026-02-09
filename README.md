# 🎮 Juegos para Amigos

Una aplicación web interactiva con juegos para disfrutar con tus amigos, creada con React, Vite y Tailwind CSS.

## 🎯 Juegos Incluidos

1. **🎭 Verdad o Reto** - Preguntas comprometedoras y desafíos divertidos
2. **🍺 Yo Nunca Nunca** - Descubre secretos jugando a las confesiones
3. **🕵️ El Impostor** - Encuentra al impostor entre los jugadores

## 🚀 Instalación y Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📦 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Crea una cuenta o inicia sesión
4. Click en "New Project"
5. Importa tu repositorio de GitHub
6. Vercel detectará automáticamente que es un proyecto Vite
7. Click en "Deploy"
8. ¡Listo! Tu app estará en línea en segundos

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 📦 Deploy en Netlify

### Opción 1: Deploy desde GitHub

1. Sube tu código a GitHub
2. Ve a [Netlify](https://netlify.com)
3. Crea una cuenta o inicia sesión
4. Click en "Add new site" → "Import an existing project"
5. Conecta tu repositorio de GitHub
6. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click en "Deploy"
8. ¡Listo!

### Opción 2: Deploy con Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Compilar el proyecto
npm run build

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

### Opción 3: Drag & Drop en Netlify

1. Compila el proyecto: `npm run build`
2. Ve a [Netlify Drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist` a la zona de drop
4. ¡Listo! Tu sitio estará en línea

## 🛠️ Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool ultra rápido
- **Tailwind CSS** - Framework de CSS utility-first
- **Responsive Design** - Funciona en móvil, tablet y desktop

## 📱 Características

✅ Diseño responsive (se adapta a móvil y PC)
✅ Interfaz moderna con animaciones suaves
✅ Fácil de usar, sin necesidad de registro
✅ Juegos ilimitados
✅ 100% gratis y open source

## 🎨 Personalización

Puedes personalizar los colores en `tailwind.config.js` y agregar más preguntas/retos editando los archivos en `src/components/`.

## 📄 Licencia

MIT - Siéntete libre de usar y modificar este proyecto

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar los juegos o agregar nuevos, no dudes en hacer un fork y enviar un pull request.

---

**¡Diviértete jugando con tus amigos! 🎉**
