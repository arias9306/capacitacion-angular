# Día 8

## Peticiones Http

La mayoría de las aplicaciones front-end se comunican con los servicios de back-end a través del protocolo HTTP.

Para eso Angular no provee un Modulo llamado `HttpClientModule` el cual debemos importar en nuestro `app.module.ts`

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [BrowserModule, HttpClientModule],
	declarations: [AppComponent],
	bootstrap: [AppComponent]
})
export class AppModule {}
```

y ahora lo que debemos hacer es injectar el `HttpClient` en nuestros servicios para hacer las peticiones, el servicio de `HttpClient` no provee los métodos `GET`, `POST`, `PUT`, `DELETE`.

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
	constructor(private http: HttpClient) {}

	getConfig() {
		return this.http.get('http://example/v1/api/config');
	}
}
```

Los métodos del `HttpClient` retornan un observable y la manera de llamarlos es la siguiente.

```typescript
showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = data);
}
```

> Nota: El HttpClient no va a hacer la petición al server si no hasta que se subscriban a el.

## Deploy

Para generar el publicado de nuestra aplicación en Angular, debemos ejecutar el comando `ng build --prod` el argumento de `--prod` es para indicarle al `angular-cli` que el publicado que queremos generar es para producción por lo tanto el `angular-cli` se va a encargar de optimizar los archivos para hacerlos mas livianos en producción.

Una vez ejecutamos ese comnado una nueva carpeta llamada `dist` nos va a aparece en el VS o en la carpeta del proyecto, en esa carpeta `dist` encontramos los archivos que debemos de pasar a nuestro servidor web para ser desplegado..

En la siguiente página encontraran mas información sobre la configuración que se debe de hacer dependiendo del servidor en el que vayamos a desplegar ([aquí](https://angular.io/guide/deployment#fallback-configuration-examples))

[Deploy en Firebase](https://alligator.io/angular/deploying-angular-app-to-firebase/)

---

## Continuara...

---
