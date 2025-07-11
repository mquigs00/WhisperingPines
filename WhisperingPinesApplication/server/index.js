const express = require('express');
const app = express();
const pool = require('./db');

app.get('/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM BookEditions');
        res.json(rows)
    } catch (err) {
        console.error('DB error:', err);
        res.status(500).send('Server error');
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
console.log('HOST: ', process.env.DB_HOST);
console.log('Dir name', __dirname)