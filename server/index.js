require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const { config } = require('./config');
const { dataRouter } = require('./routers');

const app = express();

mongoose.connect(config.DB);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', dataRouter);
app.get('/ping', (req, res) => res.send('Pong'));


app.listen(config.PORT, () => {
    console.log(`App listen Port ${config.PORT}`);
})



