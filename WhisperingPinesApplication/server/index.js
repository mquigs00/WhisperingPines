const express = require('express');
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcrypt');

const app = express();
const jwt = require('jsonwebtoken');
app.use(cors())
app.use(express.json())

app.listen(3001, () => console.log('Server running on port 3001'));