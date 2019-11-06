# Día 2

## Verificar Instalación

### Node
  ```
  node -v
  ```
  Resultado
  ```
  v10.15.1 o v12.13.0
  ```

### Angular-CLI
  ```
  ng --version
  ```
  Resultado
  ```
      _                      _                 ____ _     ___
     / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
    / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
   / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                 |___/


Angular CLI: 8.3.15
Node: 10.15.1
OS: darwin x64
Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.803.15
@angular-devkit/core         8.3.15
@angular-devkit/schematics   8.3.15
@schematics/angular          8.3.15
@schematics/update           0.803.15
rxjs                         6.4.0

  ```

## Que es Angular

Angular es un framework para la creación de páginas web SPA(Single Page Aplication) lo que quiere decir es que se carga todo a la vez en una misma página y Angular lo que hace es cambiar la vista al navegar y dar la apariencia de una web normal.

## Crear un proyecto

Nos ubicamos en la carperta donde queremos crear el proyecto y ejecutamos el siguiente comando en la consola.

```
ng new <nombre-del-proyecto>
```

Al crear el proyecto el CLI nos va a preguntar si queremos agregar `Angular Routing`, pero por le momento le decimos que no, tambien nos va a preguntar cual es el formato que vamos a manejar para nuestros estilos, vamos a seleccionar `CSS`.

```
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```

## Estructura del proyecto

![alt text](https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/project-structure.jpg "Estructura del Proyecto")

| Archivo/Carpeta    | Descripción   |
| -------------      | ------------- |
| e2e/               |               |
| node_modules/      |               |
| src/               |               |
| .editorconfig      | Archivo de configuracion de formato compatible con varios editores [Más Info](https://editorconfig.org/)|
| .gitignore         | Determina que archivos deben ser ignorados por git|
| angular.json       | Archivo de configuración del proyecto(s) Angular, incluye la configuración del `build`, `serve` y `test`                            |
| browserlist        |               |
| karma.conf.js      |               |
| package-lock.json  |               |
| package.json       |               |
| README.md          | Archivo de documentación por defecto   |
| tsconfig.app.json  |               |
| tsconfig..json     |               |
| tsconfig.spec.json |               |
| tslint.json        |               |

## Conceptos Importantes

### Modulos


### Componentes
Los componentes son lo elementos que se muestran en pantalla, pueden ser una pagina completa o un conjunto de elementos que Angular puede elegir y modificar según la logica y los datos de la aplicación.

### Directivas
### Pipes
### Decoradores
### Servicios

## Crear Proyecto con el CLI

* Nos Ubicamos en la carpeta donde queremos crear nuestro proyecto, abrimos la consola y ejecutamos el siguiente comando
  ```
  ng new <nombre-del-proyecto>
  ```

## Interpolación

# Proyecto
