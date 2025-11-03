// Servidor básico creado por Ángeles para la tarea de Git
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor arrancado en http://localhost:${PORT}`));
