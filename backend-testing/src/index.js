const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Farmacia UntelsFarma Testing',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:9000',
            },
            {
                url: 'https://backend-testing-production.up.railway.app',
            },
        ]
    },
    apis: [`${path.join(__dirname, './routes/*.js')}`],
};

// settings
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(cors());
app.use(express.json());
app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

// Rutas
app.use('/api/products', require('./routes/product'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));
app.use('/api/category', require('./routes/category'));

// routes
app.get('/', (req, res) => {
    res.send('Bienvenido a mi API');
});

// mongodb conection
mongoose.connect(process.env.MONGODB_URI || "mongodb://ugcivm0jgqoomkxbebi5:IsJJT3j19EKXBSxc0lLI@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bmh1owwpizzrjpv?replicaSet=rs0")
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error(err));

app.listen(port, () => console.log(`Servidor escuchando en puerto: ${port}`));