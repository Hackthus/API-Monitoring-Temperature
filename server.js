const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes'); 
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
require('./middlewares/auth'); 
const SensorSimulator = require('./sensorSimulator');
const Alert = require('./models/Data'); 

const app = express();

connectDB();
app.use(express.json());

app.use('/api/users', userRouter);

app.use(express.static(path.join(__dirname, 'public')));

// Création du Server Http
const server = http.createServer(app);
const io = socketIo(server);

// Démarrer la simulation
const sensorSimulator = new SensorSimulator();
sensorSimulator.start();

// Lorsque le serveur reçoit une connexion d'un client
io.on('connection', (socket) => {
    console.log('Un client est connecté');

    sensorSimulator.on('data', (data) => {
        socket.emit('sensorData', data);
        
        if (data.temperature >= 30) {
           console.log('Alerte ! La température dépasse 30°C.');
        }
    });

    sensorSimulator.on('alert', (alert) => {
        socket.emit('sensorAlert', alert);
    });

    sensorSimulator.on('alert', async (alert) => {
        socket.emit('sensorAlert', alert);
        
        // Enregistrer l'alerte dans la base de donnée
        try {
            const newAlert = new Alert(alert);
            await newAlert.save();
            console.log('Alerte enregistrée dans la base de données:', alert);
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement de l\'alerte dans la base de données:', error);
        }
    });

    socket.on('disconnect', () => {
        console.log('Un client est déconnecté');
    });
});

const IP_ADDRESS = process.env.IP_ADDRESS || 'localhost';
const PORT = process.env.PORT || 8000;

server.listen(PORT, IP_ADDRESS, () => {
    console.log(`Server is running on http://${IP_ADDRESS}:${PORT}`);
    console.log('Welcome to My Server, by H@ckthus!');
});
