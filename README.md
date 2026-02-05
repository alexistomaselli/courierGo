<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# CourierGo - Global Tracking & Intelligence

App de gestión de mensajería con seguimiento en tiempo real y análisis inteligente.

View your app in AI Studio: https://ai.studio/apps/drive/18tEAVwv8WxBM7BBbNr9CQ6aIBDcxNwLA

## 🚀 Características

- 📦 Seguimiento de paquetes en tiempo real
- 🗺️ Visualización de rutas y ubicaciones
- 🤖 Análisis con Gemini AI
- 🌙 Modo oscuro
- 📱 Diseño responsivo

## 💻 Desarrollo Local

**Prerequisitos:** Node.js 20+

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alexistomaselli/courierGo.git
   cd courierGo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   
   Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Edita `.env.local` y agrega tu API key de Gemini:
   ```env
   GEMINI_API_KEY=tu_api_key_aqui
   ```
   
   Obtén tu API key en: https://ai.google.dev/

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   
   La app estará disponible en http://localhost:3000

5. **Build para producción:**
   ```bash
   npm run build
   ```

## 🐳 Deployment en EasyPanel

### Opción 1: Desde GitHub (Recomendado)

1. En EasyPanel, crear un nuevo servicio
2. Conectar tu repositorio de GitHub
3. Seleccionar la rama `dev`
4. Configurar variables de entorno:
   - `GEMINI_API_KEY`: Tu API key de Gemini
5. EasyPanel detectará automáticamente el `Dockerfile`
6. Puerto: `80` (nginx)
7. Deploy!

### Opción 2: Docker Manual

```bash
# Build
docker build -t couriergo --build-arg GEMINI_API_KEY=your_key .

# Run
docker run -p 80:80 couriergo
```

## 📁 Estructura del Proyecto

```
courierGo/
├── components/        # Componentes React reutilizables
├── pages/            # Páginas de la aplicación
├── context/          # Context API (State Management)
├── App.tsx           # Componente principal
├── constants.tsx     # Constantes de la app
├── translations.ts   # Traducciones i18n
├── types.ts          # Tipos TypeScript
├── Dockerfile        # Configuración Docker
├── nginx.conf        # Configuración Nginx
└── vite.config.ts    # Configuración Vite
```

## 🛠️ Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Server**: Nginx (producción)
- **Container**: Docker

## 🌐 Variables de Entorno

| Variable | Descripción | Requerido |
|----------|-------------|-----------|
| `GEMINI_API_KEY` | API Key de Google Gemini | ✅ Sí |

## 📝 Licencia

MIT

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor abre un issue o pull request.

## 📧 Soporte

Para preguntas y soporte, abre un issue en GitHub.
