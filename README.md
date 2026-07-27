# FrontendTest

Frontend en **Angular 16** para la gestión de usuarios (CRUD), construido con Tailwind CSS. Consume una API REST propia expuesta en `http://localhost:8080/api/usuario` para listar, crear, editar y eliminar usuarios.

## Características

- 📋 **Listado de usuarios**: tabla con cédula, nombres, email, empresa y rol.
- ➕ **Crear usuario**: formulario que carga dinámicamente las listas de empresas y roles disponibles.
- ✏️ **Editar usuario**: precarga los datos del usuario según su cédula (ruta `/editar/:cedula`) y permite actualizarlos.
- 🗑️ **Eliminar usuario**: elimina con confirmación previa.
- 💅 Interfaz estilizada con **Tailwind CSS**.

## Tecnologías

- [Angular](https://angular.io/) 16.2
- [TypeScript](https://www.typescriptlang.org/) 5.1
- [Tailwind CSS](https://tailwindcss.com/) 3.4
- [RxJS](https://rxjs.dev/) 7.8
- Angular `HttpClient` para el consumo de la API REST

## Estructura del proyecto

```
src/app/
├── components/
│   ├── header/              # Barra de navegación superior
│   └── usuario/              # Listado de usuarios (vista principal, ruta "")
├── createusuarios/           # Formulario de creación de usuario (ruta "create")
├── editarusuarios/           # Formulario de edición de usuario (ruta "editar/:cedula")
├── model/
│   └── usuario-model.ts      # Modelo de datos del usuario
├── services/
│   └── usuario.service.ts    # Servicio HTTP (get, save, update, delete, roles, empresas)
├── app-routing.module.ts     # Definición de rutas
└── app.module.ts             # Módulo raíz
```

## Modelo de datos

`UsuarioModel` contiene los siguientes campos:

| Campo            | Tipo   |
|-------------------|--------|
| cedula             | string |
| primerNombre       | string |
| segundoNombre      | string |
| primerApellido     | string |
| segundoApellido    | string |
| clave              | string |
| email              | string |
| empresa            | string |
| nit                | string |
| roles              | number |
| rol                | string |
| estado             | number |

## Endpoints consumidos

El servicio `UsuarioService` apunta por defecto a `http://localhost:8080/api/usuario` y expone:

| Método | Endpoint                | Acción                        |
|--------|--------------------------|--------------------------------|
| GET    | `/get`                   | Obtener todos los usuarios     |
| GET    | `/getUsuario/{cedula}`   | Obtener un usuario por cédula  |
| POST   | `/save`                  | Crear un usuario               |
| PUT    | `/update`                | Actualizar un usuario          |
| DELETE | `/delete/{cedula}`       | Eliminar un usuario            |
| GET    | `/getEmpresa`            | Listar empresas                |
| GET    | `/getRoles`              | Listar roles                   |

> ⚠️ Este frontend necesita que el backend correspondiente esté corriendo en `localhost:8080` para funcionar correctamente.

## Requisitos previos

- [Node.js](https://nodejs.org/) y npm
- [Angular CLI](https://angular.io/cli) 16.x (`npm install -g @angular/cli`)

## Instalación

```bash
git clone https://github.com/yhon117/frontendTest.git
cd frontendTest
npm install
```

## Uso

Levantar el servidor de desarrollo:

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recarga automáticamente al modificar los archivos fuente.

## Compilación

```bash
ng build
```

Los artefactos de compilación se generan en el directorio `dist/`.

## Pruebas

```bash
ng test
```

Ejecuta las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

## Autor

[yhon117](https://github.com/yhon117)
