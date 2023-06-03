const express = require('express');
const axios = require('axios');

const app = express();
const apiKey = 'c5d8fdb6800b72cf6b41150ec28f6deb';

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta para obtener los datos del clima de una ciudad
app.get('/weather/:city', async (req, res) => {
  const { city } = req.params;
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es`);
    res.json(response.data);
  } catch (error) {
    res.status(404).json({ message: 'Ciudad no encontrada' });
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
