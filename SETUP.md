# 🚀 Guía Completa de Setup

## Paso 1: Crear Cuenta en Supabase

1. Ve a [supabase.com](https://supabase.com)
2. Haz clic en "Sign Up"
3. Registrate con GitHub (recomendado) o email
4. Crea una nueva organización
5. Crea un nuevo proyecto:
   - Name: `productividad-app`
   - Database Password: Guarda esto de forma segura
   - Region: Elige la más cercana a ti
6. Espera a que el proyecto se cree (2-3 minutos)

## Paso 2: Obtener Credenciales de Supabase

1. En tu proyecto de Supabase, ve a **Settings → API**
2. Copia estos valores:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. En la pestaña **Service Role Key**, copia:
   - **Service Role Secret** → `SUPABASE_SERVICE_ROLE_KEY`

## Paso 3: Crear Base de Datos

1. Ve a **SQL Editor** en Supabase
2. Copia todo el contenido de `/database/schema.sql`
3. Pega en el SQL Editor
4. Haz clic en **"Run"** (triangulo verde)
5. Verifica que no haya errores

## Paso 4: Configurar Autenticación

1. Ve a **Authentication → Providers**
2. Asegúrate que **Email** esté habilitado
3. (Opcional) Habilita proveedores sociales:
   - Google
   - GitHub
   - Microsoft

## Paso 5: Clonar y Configurar Localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/productividad-app.git
cd productividad-app

# 2. Instalar dependencias
npm install

# 3. Crear archivo .env.local
cp .env.example .env.local

# 4. Llenar .env.local con tus credenciales
# NEXT_PUBLIC_SUPABASE_URL=https://tuproyecto.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
# SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
```

## Paso 6: Ejecutar Localmente

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## Paso 7: Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Crea un nuevo repositorio:
   - Name: `productividad-app`
   - Description: "Aplicación web para gestión de hábitos, finanzas y metas"
   - Public o Private (tu elección)
   - **NO** inicialices con README ni .gitignore
3. Haz clic en "Create repository"

## Paso 8: Subir Código a GitHub

```bash
cd productividad-app

# Inicializar git si no lo está
git init

# Agregar archivos
git add .

# Crear primer commit
git commit -m "Initial commit: Setup productividad-app"

# Agregar remote (reemplaza con tu usuario)
git remote add origin https://github.com/TU-USUARIO/productividad-app.git

# Cambiar nombre de rama principal a main
git branch -M main

# Subir código
git push -u origin main
```

## Paso 9: Desplegar en Vercel

### Opción A: Desde Vercel Dashboard

1. Ve a [vercel.com/dashboard](https://vercel.com/dashboard)
2. Haz clic en **"Add New..." → "Project"**
3. Haz clic en **"Import Git Repository"**
4. Autoriza Vercel con GitHub
5. Selecciona tu repositorio `productividad-app`
6. Haz clic en **"Import"**

### Opción B: Desde CLI

```bash
npm install -g vercel
cd productividad-app
vercel
```

## Paso 10: Configurar Variables de Entorno en Vercel

1. En Vercel Dashboard, ve a tu proyecto
2. Haz clic en **"Settings"**
3. Ve a **"Environment Variables"**
4. Agrega estas variables:

```
NEXT_PUBLIC_SUPABASE_URL = tu-url-supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY = tu-anon-key
SUPABASE_SERVICE_ROLE_KEY = tu-service-role-key
```

5. Haz clic en **"Save"**

## Paso 11: Deploy Automático

Vercel desplegará automáticamente cuando hagas `git push` a main.

Tu sitio estará en: `https://tu-proyecto.vercel.app`

## Paso 12: Configurar Dominio (Opcional)

1. En Vercel, ve a **"Settings → Domains"**
2. Agrega tu dominio
3. Sigue las instrucciones de DNS
4. Espera 24-48 horas para que propague

## ✅ Checklist Final

- [ ] Cuenta de Supabase creada
- [ ] Proyecto Supabase configurado
- [ ] Base de datos creada con schema.sql
- [ ] Credenciales obtidas
- [ ] `.env.local` configurado localmente
- [ ] `npm run dev` funciona localmente
- [ ] Repositorio GitHub creado
- [ ] Código subido a GitHub
- [ ] Proyecto Vercel creado
- [ ] Variables de entorno configuradas en Vercel
- [ ] Deploy completado exitosamente

## 🔗 URLs Importantes

- **Local**: http://localhost:3000
- **Production**: https://productividad-app.vercel.app (cambia por tu dominio)
- **Supabase Dashboard**: https://app.supabase.com
- **GitHub Repository**: https://github.com/tu-usuario/productividad-app
- **Vercel Dashboard**: https://vercel.com/dashboard

## 📞 Ayuda

Si tienes problemas:

1. **Verifica las credenciales**: Revisa que copiaste bien desde Supabase
2. **Limpia node_modules**: `rm -rf node_modules && npm install`
3. **Revisa los logs**: En Vercel ve a "Deployments" y abre los logs
4. **Consulta documentación**:
   - Supabase: https://supabase.com/docs
   - Next.js: https://nextjs.org/docs
   - Vercel: https://vercel.com/docs

## 🎉 ¡Felicidades!

Tu aplicación de productividad está lista para usar. ¡Ahora comienza a construir hábitos positivos!

---

**Próximos pasos:**
1. Explora la aplicación localmente
2. Personaliza colores y estilos
3. Invita a amigos a usarla
4. Comparte tu proyecto en redes sociales
