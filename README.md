# 🐕 API Walks

> API REST para registrar paseos de perros desarrollada con Node.js, Express y MongoDB.

[![Node.js](https://img.shields.io/badge/Node.js-v18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18+-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6+-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker&logoColor=white)](https://www.docker.com/)

---

## 📋 Descripción

**API Walks** es una API REST que permite gestionar paseos de perros. Incluye autenticación JWT, validación de datos y arquitectura MVC con Node.js y Express.

**Características principales:**
- ✅ CRUD completo de paseos
- ✅ Autenticación con JWT
- ✅ Validación de datos con schemas
- ✅ MongoDB con Mongoose
- ✅ Dockerizado

---

## 🛠️ Tecnologías

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Seguridad:**
- JWT (jsonwebtoken)
- bcrypt

**Herramientas:**
- Docker
- Postman

---

## 🚀 Instalación

### Requisitos
- Node.js v18+
- MongoDB
- npm

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/MathiasSuarez96/Api-Walks.git
cd Api-Walks

# Instalar dependencias
npm install

# Configurar .env
cp .env.example .env
# Edita el archivo .env con tus valores

# Ejecutar
npm run dev
```

### Con Docker 🐳

```bash
docker-compose up -d
```

---

## 🔐 Variables de Entorno

Crea un archivo `.env`:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/api-walks
JWT_SECRET=tu_secreto_seguro
JWT_EXPIRES_IN=7d
```

---

## 📡 Endpoints

### Autenticación

**POST** `/api/auth/register`
- Registrar usuario

**POST** `/api/auth/login`
- Login (devuelve token JWT)

### Paseos

**GET** `/api/walks`
- Obtener todos los paseos

**GET** `/api/walks/:id`
- Obtener paseo por ID

**POST** `/api/walks` 🔒
- Crear paseo (requiere autenticación)

**PUT** `/api/walks/:id` 🔒
- Actualizar paseo (requiere autenticación)

**DELETE** `/api/walks/:id` 🔒
- Eliminar paseo (requiere autenticación)

🔒 = Requiere header `Authorization: Bearer <token>`

---

## 💻 Ejemplo de Uso

### 1. Registrar usuario

```bash
POST http://localhost:3000/api/auth/register
Content-Type: application/json

{
  "username": "juan123",
  "email": "juan@mail.com",
  "password": "123456"
}
```

### 2. Login

```bash
POST http://localhost:3000/api/auth/login
Content-Type: application/json

{
  "email": "juan@mail.com",
  "password": "123456"
}
```

### 3. Crear paseo

```bash
POST http://localhost:3000/api/walks
Authorization: Bearer <tu_token>
Content-Type: application/json

{
  "dogName": "Max",
  "durationMinutes": 30,
  "date": "2025-11-12",
  "distanceKm": 2.5,
  "notes": "Paseo por el parque"
}
```

---

## 📁 Estructura del Proyecto

```
api-walks/
├── src/
│   ├── config/           # Configuración (DB)
│   ├── controllers/      # Lógica de controladores
│   │   ├── auth.controllers.js
│   │   └── walk.controllers.js
│   ├── middlewares/      # Middlewares
│   │   ├── auth.js
│   │   ├── validate.js
│   │   ├── error.js
│   │   └── notFound.js
│   ├── models/           # Modelos Mongoose
│   │   ├── user.model.js
│   │   └── walk.model.js
│   ├── routes/           # Rutas
│   │   ├── routes.js
│   │   ├── auth.routes.js
│   │   └── walks.routes.js
│   ├── schemas/          # Validaciones
│   │   ├── auth.schemas.js
│   │   └── walk.schemas.js
│   └── app.js
├── .env
├── docker-compose.yml
├── Dockerfile
├── package.json
└── index.js
```

---

## 🎯 Características Implementadas

- ✅ Registro e inicio de sesión de usuarios
- ✅ Autenticación JWT
- ✅ CRUD completo de paseos
- ✅ Validación de datos con schemas personalizados
- ✅ Validación de ObjectId de MongoDB
- ✅ Middleware de autenticación
- ✅ Manejo de errores centralizado
- ✅ Arquitectura MVC
- ✅ Dockerización

---

## 👤 Autor

**Mathias Suarez**

- GitHub: [@MathiasSuarez96](https://github.com/MathiasSuarez96)
- LinkedIn: [mathias-suarez26](https://www.linkedin.com/in/mathias-suarez26)
- Email: matisuar1898@gmail.com
- 📍 Montevideo, Uruguay

---

## 📝 Licencia

MIT License

---

⭐ Si te gustó el proyecto, dejá una estrella en GitHub

**Hecho con ❤️ en Uruguay**
