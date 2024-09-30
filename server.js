const express = require('express');
const app = express();
const path = require('path');

// Serve os arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
