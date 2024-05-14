# gdr_front-end

Repositorio privado sobre el Front-End/Web que utiliza el proyecto de "Guia de Restaurantes".

## Cómo clonar y preparar el proyecto

### 1) Clonar el repositorio:

**1.1:** Nos situamos en la ubicación donde se desee clonar el repositorio (con "cd [nombre de carpeta]" cambiamos la ubicación desde la terminal).

**1.2:** Usar el comando *"git clone [link SSH o HTTPS]"* para clonar el repositorio.

**1.3:** Al clonar el repositorio y situarnos en su directorio, por defecto nos sitúa en la rama principal (main). con el comando *"git checkout Dev"* pasamos a la rama de desarrollo.

### 2) Versión compatible de Node:

**2.1:** El proyecto corre en la versión *v17.9.1* de Node. Para visualizar la versión de Node utilizamos el comando *"node -v"*. En caso de tener la versión necesaria, continuar al paso 3. De lo contrario, continúe leyendo el paso 2 para ver cómo cambiar su versión de Node.

**2.2**: A continuación están los pasos a seguir en caso de no tenerla instalada: 

1. Instalamos la versión
   ```javascript
   nvm install 17.9.1
   ```
   >Nota: Si no instalamos ninguna otra versión de Node previamente, **la versión 17.9.1 se establecerá como versión por defecto**. Sin embargo, si ya instalamos alguna otra versión, la versión 17.9.1 se usará **sólo durante nuestra sesión actual**.
2. Cambiamos a la versión instalada
   ```javascript
   nvm use 17.9.1
   ```
   >*En caso de querer que esta versión sea nuestra versión por defecto, debemos ejecutar el siguiente comando:*
   ```javascript
   nvm alias default 17.9.1
   ```

### 3) Instalar carpeta node_modules:

**3.1** Para correr el proyecto, necesitamos una carpeta node_modules que cada desarrollador debe instalar. Para comenzar, abrimos la terminal y nos situamos en la carpeta del proyecto: *"/gdr_front-end"*.

**3.2** Una vez situados en la carpeta del proyecto, corremos el comando: *"npm install"* para instalar la carpeta node_modules.

## Cómo probar el proyecto

En el directorio del proyecto, se pueden correr:

### `npm start`

Corre la aplicación en el modo de development.\
Se abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

La página se recargará (localmente) cuando se hagan cambios.\
También se podrá ver cualquier error en la consola.
