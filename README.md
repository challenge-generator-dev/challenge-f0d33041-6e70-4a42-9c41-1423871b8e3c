# Implementación de Operaciones CRUD en Bases de Datos SQL y NoSQL

El sistema debe permitir a los usuarios realizar operaciones CRUD (crear, leer, actualizar, eliminar) en bases de datos SQL y NoSQL. Los usuarios interactúan con una tabla de productos en la interfaz de usuario, donde pueden editar y eliminar productos. La persistencia de datos se realiza utilizando DynamoDB y MongoDB.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construye operaciones CRUD en Bases de Datos SQL y NoSQL |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Configuración del Entorno y Conexión a la Base de Datos

**Objetivo:** Establecer la conexión con DynamoDB y MongoDB y configurar el entorno de desarrollo.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura el proyecto para utilizar TypeScript y React.
- Establece la conexión con DynamoDB y MongoDB.
- Crea las tablas necesarias en ambas bases de datos.

**Entregable:** Proyecto configurado con conexiones a DynamoDB y MongoDB, y tablas creadas.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar el código.

</details>

### Fase 2: Implementación de Operaciones CRUD en DynamoDB

**Objetivo:** Implementar las operaciones CRUD para DynamoDB.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa las funciones para crear, leer, actualizar y eliminar productos en DynamoDB.
- Asegúrate de que las operaciones se realicen correctamente y manejen posibles errores.

**Entregable:** Funciones implementadas para realizar operaciones CRUD en DynamoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar las funciones.

</details>

### Fase 3: Implementación de Operaciones CRUD en MongoDB

**Objetivo:** Implementar las operaciones CRUD para MongoDB.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa las funciones para crear, leer, actualizar y eliminar productos en MongoDB.
- Asegúrate de que las operaciones se realicen correctamente y manejen posibles errores.

**Entregable:** Funciones implementadas para realizar operaciones CRUD en MongoDB.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza IntelliJ IDEA Debugger para depurar las funciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son las operaciones CRUD y por qué son importantes en el manejo de bases de datos?
- **paraQueSirve**: ¿Para qué se utilizan las operaciones CRUD en el contexto de este reto?
- **comoSeUsa**: ¿Cómo se implementan las operaciones CRUD en DynamoDB y MongoDB?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir durante la implementación de las operaciones CRUD y cómo se manejan?

## Criterios de Evaluacion

- Configuración correcta del proyecto con TypeScript y React.
- Establecimiento de conexiones con DynamoDB y MongoDB.
- Creación de tablas necesarias en ambas bases de datos.
- Implementación correcta de las operaciones CRUD en DynamoDB.
- Implementación correcta de las operaciones CRUD en MongoDB.
- Manejo adecuado de errores durante las operaciones CRUD.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `api` | `api/` | practice | server | Node | DynamoDB, MongoDB |
| `client` | `client/` | chapter, support | client | React | - |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB, MongoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `cd api && npm install --no-audit --no-fund && npm run build` — componente `api` (practice).
3. `cd client && npm install --no-audit --no-fund && npm run build` — componente `client` (chapter, support).

### Contratos entre componentes

- `api` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Herramientas

- **IntelliJ IDEA Debugger**: Depura el componente con la run-config de IntelliJ IDEA (menu Run, carpeta .run/): pone breakpoints donde implementas el reto y arranca en modo debug.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
(cd api && npm install --no-audit --no-fund && npm run build) && (cd client && npm install --no-audit --no-fund && npm run build) && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
