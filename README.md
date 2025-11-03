# Proyecto Web SDAW – Ángeles

## 📌 Descripción del proyecto
Este proyecto consiste en una pequeña aplicación web compuesta por un archivo HTML, un script JavaScript y un servidor Node.js básico.
La aplicación muestra un botón que, al pulsarlo, lanza un mensaje emergente con el texto:

```
Hola Ángeles
```

El servidor está desarrollado en Node.js utilizando Express para servir el contenido estático.

---

## 📁 Estructura del proyecto

```
/SDAW_Angeles
├── index.html        # Página principal con un botón
├── script.js         # Lógica JS que muestra la alerta
├── server.js         # Servidor Node.js con Express
├── package.json      # Configuración del proyecto y dependencias
├── README.md         # Documentación del proyecto
└── .gitignore        # Archivos excluidos de Git
```

---

## 🛠️ Tecnologías utilizadas
- HTML5
- JavaScript
- Node.js
- Express.js
- Git & GitHub

---

## 🚀 Cómo ejecutar el proyecto

### 1. Instalar dependencias
```
npm install
```

### 2. Iniciar el servidor
```
npm start
```

### 3. Abrir en el navegador
```
http://localhost:3000
```

---

## 💻 Código relevante

### index.html
```html
<button onclick="saludar()">Saludar</button>
```

### script.js
```javascript
function saludar() {
    alert("Hola Ángeles");
}
```

### server.js
```javascript
app.use(express.static(__dirname));
```

---

## 🧰 Comandos Git utilizados

```
git init
git add .
git commit -m "Inicialización del proyecto SDAW"
git remote add origin <URL-del-repo>
git push -u origin main
```

---

## 📝 Conclusiones personales
Este proyecto me ha permitido practicar la estructura básica de una aplicación web, el uso de JavaScript en el navegador, la creación de un servidor Node.js con Express y la gestión del control de versiones con Git. También reforcé el uso de herramientas para documentación como readme.so.

---

## ✅ Créditos
Proyecto desarrollado por Ángeles para la asignatura SDAW.


### Notas adicionales
Este proyecto forma parte de la tarea de SDAW y sirve para practicar Git, Node.js y Express.
