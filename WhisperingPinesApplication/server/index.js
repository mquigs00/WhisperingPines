const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

const app = express();
const jwt = require('jsonwebtoken');
app.use(cors())
app.use(express.json())

app.post('/api/register', async(req, res) => {
    try {
        console.log('Incoming data:', req.body);
        const {firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, streetAddress, city, state, zipcode, password} = req.body;   // extract all form values
        const hashedPassword = await bcrypt.hash(password, 10);                                  // hash password
        const insertComm = "INSERT INTO Users (firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const [result] = await pool.query(insertComm, [firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, hashedPassword]);
        console.log("Inserting user");
        res.status(201).json({
            success: true,
            user: {
                userId: result.insertId,
                firstName,
                middleName,
                lastName,
                dateOfBirth,
                phoneNumber,
                emailAddress,
                balanceDue: 0.00
            },
        });
        console.log("Response sent");
        
        
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({error: 'Server error'});
    }
});

app.post('/api/login', async(req, res) => {
    try {
        console.log('Incoming data:', req.body);
        const {emailAddress, password} = req.body;
        const selectComm = "SELECT password FROM Users WHERE emailAddress = ?";
        const [result] = await pool.query(selectComm, [emailAddress]);
        console.log(result);
        
        // if any results came back for the given email address
        if (result.length > 0) {
            // if the given password matches the correct password
            if (await bcrypt.compare(password, result[0].password)) {
                console.log("Bcrypt.compare returned true, giving access token");
                const user = {email: emailAddress};
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                res.json({accessToken:accessToken});
            } else {
                console.log("Bcrypt compare returned false");
                res.status(403).json({
                success: false,
                message: "Incorrect username/password combination"
                })
            }
        } else {
            console.log("No user exists with that email");
            res.status(403).json({
                success: false,
                message: "Incorrect username/password combination"
            });
        }
    } catch(error) {
        console.error("Error logging in: " + error);
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