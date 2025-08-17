const express = require('express');
const cors = require('cors');
const pool = require('./db');

const accountRoutes = require('./routes/accountRoutes');
const catalogRoutes = require('./routes/catalogRoutes');
const registrarRoutes = require('./routes/registrarRoutes');

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api/account', accountRoutes);
app.use('/api/catalog', catalogRoutes);
app.use('/api/registrar', registrarRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));