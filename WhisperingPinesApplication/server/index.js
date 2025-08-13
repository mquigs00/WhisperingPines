const express = require('express');
const cors = require('cors');
const pool = require('./db');

const accountRoutes = require('./routes/accountRoutes');

const app = express();

app.use(cors())
app.use(express.json())

console.log("Calling /api/account");
app.use('/api/account', accountRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));