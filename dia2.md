# Día 2

* [Verificar la Instalación](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#verificar-instalaci%C3%B3n)
* [Que es Angular](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#que-es-angular)
* [Crear un proyecto](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#crear-un-proyecto)
* [Estructura del Proyecto](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#estructura-del-proyecto)
  * [Root](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#root)
  * [Source Folder](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#source-folder)
  * [App Folder](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#app-folder)
* [Conceptos Importantes](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#conceptos-importantes)
  * [Decoradores](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#decoradores)
    * [Decoradores de Clase](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#decoradores-de-clase)
    * [Decoradores de Propiedad](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#decoradores-de-propiedad)
  * [Modulos](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#modulos)
  * [Componentes](https://github.com/arias9306/capacitacion--angular/blob/master/dia2.md#Componentes)
* [Interpolación](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#interpolaci%C3%B3n)
+ [Proyecto](https://github.com/arias9306/capacitacion-angular/blob/master/dia2.md#proyecto)

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

Al crear el proyecto el CLI nos va a preguntar si queremos agregar `Angular Routing`, pero por eñ momento le decimos que no, tambien nos va a preguntar cual es el formato que vamos a manejar para nuestros estilos, vamos a seleccionar `CSS`.

```
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? CSS
```

## Estructura del proyecto

### Root

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/project-structure.jpg" alt="Estructura del Proyecto" />
</p>

| Archivo/Carpeta    | Descripción                                                                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| e2e/               | Este folder contiene todos los archivos usados para hacer pruebas end-to-end, que son pruebas para verificar el flujo completo de un sistema.                                                  |
| node_modules/      | En este folder se descargan todas la librerías usadas en el proyecto.                                                                                                                          |
| src/               | En este folder es donde vamos a agregar el código de nuestra aplicación.                                                                                                                       |
| .editorconfig      | Archivo de configuración de formato compatible con varios editores [Más Info](https://editorconfig.org/)                                                                                       |
| .gitignore         | Determina que archivos deben ser ignorados por git.                                                                                                                                            |
| angular.json       | Archivo de configuración del proyecto(s) Angular, incluye la configuración del `build`, `serve` y `test`.                                                                                      |
| browserlist        | El sistema de compilación utiliza este archivo para ajustar la salida de CSS y JS para admitir los navegadores especificados [Más Info](https://github.com/browserslist/browserslist#queries). |
| karma.conf.js      | Archivo de configuración de Karma (Herramienta de Testing). [Más Info](http://karma-runner.github.io/latest/index.html)                                                                        |
| package-lock.json  | Este archivo nos muestra información más detallada de los paquetes de npm que tenemos instalados en el proyecto.                                                                               |
| package.json       | En este archivo definimos toda las librerías/paquetes de terceros usadas en el desarrollo y en la ejecución del proyecto                                                                       |
| README.md          | Archivo de documentación por defecto                                                                                                                                                           |
| tsconfig.app.json  | Configuración predeterminada de TypeScript para el proyecto.                                                                                                                                   |
| tsconfig.json      | Configuración predeterminada de Typescript para los proyectos en el workspace.                                                                                                                 |
| tsconfig.spec.json | Configuración prederterminada de TypeSctipt para las pruebas.                                                                                                                                  |
| tslint.json        | Configuración de TSLint (Herramienta de análisis estático de código TS) de la aplicación. [Más Info](https://palantir.github.io/tslint/)                                                       |

### Source Folder

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/project-structure_1.jpg" alt="Estructura folder src" />
</p>

| Archivo/Carpeta | Descripción                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| app             | Dentro de este folder van los componentes y lógica de nuestro proyecto.                                                            |
| assets          | En este folder podemos incluir imágenes y otros archivos.                                                                          |
| environments    | Contiene opciones de configuración de compilación para diferentes environments. (prod, dev, QA, etc..).                            |
| favicon.ico     | El icono que se muestra en la pestaña de los navegadores.                                                                          |
| index.html      | La página principal de nuestro proyecto, este es el archivo que es entregado por el servidor, cuando se accede a nuestro proyecto. |
| main.ts         | Archivo de entrada al proyecto, es el que se encarga de arrancar el módulo principal.                                              |
| polyfills.ts    | Archivo que provee los polyfills para el soporte del navegador.                                                                    |
| styles.css      | Archivo de estilos globales para el proyecto.                                                                                      |
| test.ts         | Archivo de configuración de los test del proyecto.                                                                                 |

### App Folder

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/project-structure_2.jpg" alt="Estructura folder app" />
</p>

| Archivo/Carpeta       | Descripción                                                                                                                                                                                                                   |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| app.component.css     | En este archivo de definen los estilos que solo aplican al componente app.                                                                                                                                                    |
| app.component.html    | En este archivo se definen el template en HTML del componente app.                                                                                                                                                            |
| app.component.spec.ts | En este archivo se definen los test unitarios del componente app.                                                                                                                                                             |
| app.component.ts      | En este archivo se define la lógica del componente app.                                                                                                                                                                       |
| app.module.ts         | En este archivo se define el modulo principal del proyecto, denominado AppModule, es el encargado de decirle a Angular como ensamblar la aplicación. En este archivo se deben de declarar todos los componentes del proyecto. |

## Conceptos Importantes

### Decoradores

Los decoradores son funciones que modifican la definición de una clase o una propiedad, también conocidos como `Anotaciones` en otros lenguajes.

Angular define decoradores que adjuntan metadatos a clases o propiedades para que sepa qué significan esas clases o propiedades y cómo deberían funcionar.

#### Decoradores de Clase

El decorador de clase se ubica antes de la definición de la clase, declarando de que tipo es la clase y proporcionando los metadatos adecuados para el tipo de clase.

Angular cuenta con los siguientes decoradores:

- `@Component()`
- `@Directive()`
- `@Pipe()`
- `@Injectable()`
- `@NgModule()`

#### Decoradores de propiedad

El decorador de propiedad se ubica antes de la definición de la propiedad.

Ejemplos:

- `@Input`
- `@Output`

### Módulos

Los módulos son clases con el decorador `@NgModule()`,
los módulos nos sirven principalmente para organizar el código de las aplicaciones. En los módulos podemos declara componentes, directivas, pipes, servicios, tambien importar y exportar funcionalides de otros módulos.

```typescript
@NgModule({
  declarations: [AppComponent, AlertComponent],
  imports: [BrowserModule],
  exports: [AlertComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Las propiedades mas importantes del decorador `@NgModule()` son:

- `declarations`: En este array debemos declarar los componentes, directivas y pipes que pertencen al el módulo.
- `exports`: En este array declaramos los componentes, directivas y pipes que queremos que sean visibles y utilizables por otros módulos.
- `imports`: En este array declaramos los otros módulos que queremos usar en este módulo.
- `providers`: En este array se definen todos los servicios haciendolos accesibles para toda la aplicación. (Tambien se pueden definir los servicios a nivel global directamente en la clase, normalmente es la opción mas usada).
- `bootstrap`: En esta propiedad se define la vista principal, la que se encarga de alojar a las demás vistas.

### Componentes

Los componentes son las clases con del decorador `@Component()`,
los componentes son lo elementos que se muestran en pantalla, pueden ser una pagina completa o un conjunto de elementos que Angular puede elegir y modificar según la logica y los datos de la aplicación.

``` typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // lógica
}
```
Las propiedades mas importantes del decorador `@Component()` son:
- `selector`: Esta propiedada funciona como in selector de CSS que le dice a Angular que cree e inserte una instancia de este componente donde encuentre la etiqueta correspondiente en la plantilla HTML.
- `templateUrl`: En esta propiedad se establece la ruta relativa al template HTML de este componente. Alternativamente, puede proporcionar el template HTML directamente en la propiedad usando la propiedad `template` y usando las comillas back ticks con el HTML.

  Ejemplo:
  ```typescript
  @Component({
  selector: 'app-root',
  template: `
          <h1>Capacitación Angular</h1>
          <h2>Template en linea<h2>
  `,
  styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    // lógica
  }
  ```
- `styleUrls`: En este array definimos las rutas relativas de las hojas de estilos que se van a usar en el componente. Al igual que con el templateUrl se puede definir en el mismo archivo usando la propiedad `style`.


## Crear un Componente

Los componentes los podemos crear de 2 formas, una se podría decir que es a mano, eso significa crear archivo por archivo, lo cual implica que debemos crear una carpeta dentro de el app folder ya que ese es el estandar como lo vemos en la siguiente imagen, Ademas de agregar el componente al `AppModule` para poderlo usar en nuestro proyecto.

<p align="center">
    <img src="https://raw.githubusercontent.com/arias9306/capacitacion-angular/master/img/project-structure_3.jpg" alt="Componente nuevo" />
</p>

Pero realmente lo mas recomendable es usar el `Angular CLI`, con el siguiente comando podemos crear componenten en nuestro proyecto.

```
ng generate component <nombre-del-componente>
```
o podemos usar la versión corta
```
ng g c <nombre-del-componente>
```

# Proyecto
