const EventEmitter = require('events');

class SensorSimulator extends EventEmitter {
    constructor() {
        super();
        this.temperatureThreshold = 30; // Seuil de température pour déclencher une alerte
        this.humidityThreshold = 70; // Seuil d'humidité pour déclencher une alerte
    }

    // Fonction pour simuler la génération de données
    generateRandomData() {
        const temperature = Math.floor(Math.random() * 20) + 20; // Température entre 20 et 40
        const humidity = Math.floor(Math.random() * 50) + 30; // Humidité entre 30 et 80
        return { temperature, humidity };
    }

    // Fonction pour démarrer la simulation
    start() {
        setInterval(() => {
            const data = this.generateRandomData();
            this.emit('data', data);

            if (data.temperature > this.temperatureThreshold) {
                this.emit('alert', { type: 'temperature', value: data.temperature, message: `Temperature too high: ${data.temperature}°C` });
            }
            if (data.humidity > this.humidityThreshold) {
                this.emit('alert', { type: 'humidity', value: data.humidity, message: `Humidity too high: ${data.humidity}%` });
            }
        }, 2000);
    }
}

module.exports = SensorSimulator;

