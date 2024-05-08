const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('./mydb.db');

app.use(bodyParser.urlencoded({ extended: true }));

// Crear tabla si no existe
db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)");

// Ruta para registrar nuevos usuarios
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], err => {
        if (err) {
            res.status(500).send('Error al registrar usuario');
        } else {
            res.send('Usuario registrado con éxito');
        }
    });
});

// Ruta para obtener todos los usuarios (NO seguro pero útil para pruebas)
app.get('/users', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            res.status(500).send('Error al obtener usuarios');
        } else {
            res.json(rows);
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
