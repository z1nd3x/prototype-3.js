API de Frases Motivacionales!!!!

Este es un proyecto simple hecho con JavaScript utilizando Node.js y Express. Su objetivo es crear una API que permita leer, agregar y eliminar frases motivacionales.

¿Qué hace esta API?
Permite tres operaciones principales:

Ver frases motivacionales guardadas.

Agregar nuevas frases.

Eliminar frases por su ID.

Tecnologías utilizadas
Node.js para ejecutar JavaScript en el servidor.

Express.js para crear y manejar las rutas de la API.

JSON como formato para almacenar frases.

Postman para probar la API.

¿Cómo usar el proyecto?
1. Clonar el repositorio
bash
git clone https://github.com/tuusuario/api-frases.git
cd api-frases


2. Instalar dependencias
bash
npm install


3. Iniciar el servidor
bash
node index.js
Esto iniciará la API en http://localhost:3000.

Rutas disponibles
Método	/ Ruta	/ Descripción: <br>
GET	/frases	/ Devuelve todas las frases. <br>
POST	/frases	/ Agrega una nueva frase. <br>
DELETE	/frases/:id /	Elimina una frase por su ID. 
