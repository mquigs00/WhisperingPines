const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors())
app.use(express.json())

app.post('/api/register', async(req, res) => {
    try {
        console.log('Incoming data:', req.body);
        const {firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, streetAddress, city, state, zipcode, password} = req.body   // extract all form values
        const hashedPassword = await bcrypt.hash(password, 10);                                  // hash password
        const insertComm = "INSERT INTO Users (firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const [result] = await pool.query(insertComm, [firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, hashedPassword]);
        console.log("Inserting user");
        res.status(201).json({success: true, userId: result.insertId});
        console.log("Response sent");
        
        
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({error: 'Server error'});
    }
});

app.get('/books', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM BookEditions');
        res.json(rows)
    } catch (err) {
        console.error('DB error:', err);
        res.status(500).send('Server error');
    }
});

app.listen(3001, () => console.log('Server running on port 3001'));