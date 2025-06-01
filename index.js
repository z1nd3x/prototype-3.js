const express = require ('express');
const app = express();
const port = 3000;

app.use(express.json());

let frases = [
  { id: 1, texto: "El conocimiento es poder" },
  { id: 2, texto: "Sigue adelante" }
];

// Obtener todas las frases
app.get('/frases', (req, res) => {
  res.json(frases);
});

// Agregar una nueva frase
app.post('/frases', (req, res) => {
  const nuevaFrase = {
    id: frases.length + 1,
    texto: req.body.texto
  };
  frases.push(nuevaFrase);
  res.status(201).json(nuevaFrase);
});

// Eliminar una frase
app.delete('/frases/:id', (req, res) => {
  const id = parseInt(req.params.id);
  frases = frases.filter(f => f.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});

