const express = require('express');
const app = express();
const dotenv = require('dotenv');
const dbConnection = require('./db/db');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const appointmentRouter = require('./routes/appointments');
const sparepartsRoutes = require('./routes/spareparts');
const repairsRoutes = require('./routes/repairs');

app.use(express.json());

dotenv.config();

app.use(bodyParser.json());

const PORT = process.env.PORT

app.use('/api/auth', authRouter);
app.use('/api/appointments', appointmentRouter);
app.use('/api/spareparts', sparepartsRoutes);
app.use('/api/repairs', repairsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

dbConnection();