const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Despliegue Automático</title>
        <style>
          body { font-family: Arial, sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; background-color: #f0f2f5; }
          .container { text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          h1 { color: #0078d4; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>¡Bienvenido!</h1>
          <hr>
          <p>Mi nombre es Walter Samuel Gómez Monroy</strong></p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
