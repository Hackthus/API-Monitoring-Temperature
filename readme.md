## Nodejs Application avec Express, Socket.io et MongoDB

## Description
    Mise en place d'un serveur Nodejs capable de surveiller les niveaux de température et d'humidité dans une salle de serveurs. 
    Cette application est construite en utilisant Nodejs, Express, Socket.io et MongoDB. Elle permet de gérer l'inscription et la connexion des utilisateurs, simule des capteurs, et gère les alertes associées. La communication en temps réel est assurée par Socket.io.

## Fonctionnalités

    Inscription des utilisateurs : Permet aux utilisateurs de s'inscrire.
    Connexion des utilisateurs : Permet aux utilisateurs de se connecter.
    Simulation de capteur : Génère des données de capteurs et des alertes.
    Communication en temps réel : Utilise WebSocket pour transmettre les données et les alertes en temps réel aux clients.

## Prérequis

    Node.js (version 12 ou supérieure)
    MongoDB

## Installation

Clonez le dépôt :
    https://github.com/Hackthus/API-Monitoring-Temperature.git
    cd API-Monitoring-Temperature

## Installez les dépendances :

    npm install

## Connectez-vous à MongoDB :

    Assurez-vous que MongoDB est installé et en cours d'exécution sur votre machine ou utilisez une base de données MongoDB hébergée.

Lancer le serveur

Démarrez le serveur :

    npm start

Le serveur est maintenant en cours d'exécution à l'adresse suivante :

    http://localhost:8000

## Utilisation des API avec Postman

# Inscription

    URL : http://localhost:8000/api/users/inscription

    Méthode : POST

    Corps de la requête :

{
  "email": "exemple@example.com",
  "password": "votre-mot-de-passe"
}

Réponse attendue :

    {
      "message": "Utilisateur créé avec succès !"
    }

# Connexion

    URL : http://localhost:8000/api/users/connexion

    Méthode : POST

    Corps de la requête :

{
  "email": "exemple@example.com",
  "password": "votre-mot-de-passe"
}
Réponse attendue :

    {
      "email": "exemple@example.com",
      "id": "id_utilisateur",
      "token": "votre_token_jwt"
    }

## Communication en temps réel avec Socket.io

    Connectez-vous à http://localhost:8000 dans votre navigateur.
    Utilisez l'outil de développement du navigateur pour écouter les événements WebSocket et afficher les données des capteurs et les alertes en temps réel.

## Structure du Projet

    config : Configuration de la base de données.
    middlewares : Middlewares de l'application.
    models : Modèles Mongoose pour MongoDB.
    routes : Fichiers de route pour les utilisateurs.
    validations : Fichiers de validation pour les données des utilisateurs.
    public : Fichiers statiques (HTML, CSS, JavaScript).
    sensorSimulator.js : Simulateur de capteurs.
    server.js : Point d'entrée principal de l'application.

Félicitations ! Vous avez maintenant installé et configuré votre application Node.js. Vous pouvez commencer à utiliser et à développer des fonctionnalités supplémentaires.
