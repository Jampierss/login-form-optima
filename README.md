# Proyecto de Login y Formulario de Compra - Optima Inmobiliaria

Este proyecto consiste en una aplicación web que contiene dos secciones: un formulario de inicio de sesión (login) y un formulario de compra de propiedades para Optima Inmobiliaria. El formulario de compra es de múltiples páginas, con navegación mediante botones "Siguiente" y "Regresar".

## Contenido del Proyecto

El proyecto está estructurado en los siguientes archivos:

- `index.html`: Contiene el formulario de inicio de sesión (login) con un botón de "Sign in" y opciones para iniciar sesión con una cuenta de Google.

- `form.html`: Contiene el formulario de compra de propiedades. Este formulario está dividido en dos secciones que se pueden navegar usando los botones "Siguiente" y "Regresar". Los campos requeridos están marcados con el atributo "required" para garantizar que se completen adecuadamente.

- `css/index.css`: Contiene los estilos CSS para la página de inicio de sesión.

- `css/form.css`: Contiene los estilos CSS para el formulario de compra.

- `js/set-email.js`: Contiene un script que obtiene y almacena el correo electrónico ingresado en el formulario de inicio de sesión.

- `js/multipage-form.js`: Contiene un script que controla la navegación entre las secciones del formulario de compra.

- `js/crear.js`: Contiene un script que se ejecuta cuando se presiona el botón "Crear" en el formulario de compra. Guarda los datos del formulario en el almacenamiento local (localStorage) y redirecciona a la página "final.html".

- `js/validar-form.js`: Contiene un script que verifica si todos los campos requeridos del formulario de compra están llenos antes de pasar a la siguiente sección.

- `js/get-email.js`: Contiene un script que obtiene y muestra el correo electrónico almacenado previamente en el formulario de inicio de sesión.

## Instrucciones de Ejecución

1. Descarga todos los archivos del proyecto en una carpeta local en tu computadora.

2. Abre el archivo `index.html` en tu navegador para acceder al formulario de inicio de sesión.

3. Ingresa tu correo electrónico y contraseña o utiliza la opción de "Sign in with Google".

4. Una vez que hayas iniciado sesión correctamente, serás redirigido al formulario de compra (`form.html`).

5. Completa el formulario de compra ingresando todos los datos requeridos y usando los botones "Siguiente" y "Regresar" para navegar entre las secciones.

6. Cuando hayas completado el formulario, haz clic en el botón "Crear" para guardar los datos en el almacenamiento local y ser redirigido a la página "final.html".

## Notas

- Este proyecto es solo una demostración y no se conecta a un servidor real para autenticación o almacenamiento de datos. Los datos se almacenan en el almacenamiento local del navegador con fines ilustrativos.

- Las imágenes y enlaces externos utilizados en el proyecto pertenecen a sus respectivos propietarios y se utilizan con fines demostrativos.

## Autor

Proyecto creado por Jimmy Florian

¡Gracias por revisar este proyecto! Si tienes alguna pregunta o comentario, no dudes en contactarme.

