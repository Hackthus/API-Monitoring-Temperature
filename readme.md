## Application Node.js avec Express et Socket.io
 Mise en place d'un serveur Nodejs capable de surveiller les
niveaux de température et d'humidité dans une salle de serveurs. Vo

## Resumé

    Cette application web utilise Node.js avec le framework Express pour gérer les opérations d'inscription et de connexion des utilisateurs, ainsi que pour simuler des capteurs et gérer les alertes associées. Elle inclut également une fonctionnalité en temps réel via WebSocket pour notifier les clients connectés des données des capteurs et des alertes.

## Fonctionnalités

   - Inscription : Permet aux utilisateurs de s'inscrire.
   - Connexion : Permet aux utilisateurs de se connecter.
   - Simulation de capteur : Génère des données de capteurs et des alertes.
   - Communication en temps réel : Utilise WebSocket pour transmettre les données et les alertes  en temps réel aux clients.

## Prérequis

    Node.js 
    MongoDB

## Commandes d'installation des différents Modules 

Commande pour initialiser le Projet : 
    npm init -y
Voici les commandes pour installer tous les modules utilisés pour le projet
Express : Framework web pour Node.js.
     npm install express
bcrypt : Bibliothèque pour hacher les mots de passe 
     npm install bcrypt 
jsonwebtoken : Bibliothèque pour créer et vérifier les JWT (JSON Web Tokens)
    npm install jsonwebtoken
express-validator : Middleware pour valider les données des requêtes HTTP
    npm install express-validator
mongoose : Bibliothèque ODM (Object Data Modeling) pour MongoDB et Nodejs
    npm install mongoose
passport : Middleware d'authentification pour Node.js.
    npm install passport
passport-jwt : Stratégie JWT pour Passport.
    npm install passport-jwt
socket.io : Bibliothèque pour ajouter des fonctionnalités WebSocket, permettant une communication  en temps réel entre les clients et le serveur.
    npm install socket.io
nodemon : 
    npm install nodemon

## Lancer le serveur
    npm start dev

## Requettes et Interaction avec la postman

Inscription

 URL : http://localhost:8000/api/users/inscription
 Méthode : POST
 body : {
  "email": "addresse mail",
  "password": "mot de passe"
}

Connexion

 URL : http://localhost:8000/api/users/connexion
 Méthode : POST
 body : {
  "email": "addresse mail",
  "password": "mot de passe"
}

Communication en temps réel avec Socket.io
 Aller à l'addresse suivante: http://localhost:8000 dans le navigateur 

 







## Resumé

    Cette application web utilise Node.js avec le framework Express pour gérer les opérations d'inscription et de connexion des utilisateurs, ainsi que pour simuler des capteurs et gérer les alertes associées. Elle inclut également une fonctionnalité en temps réel via WebSocket pour notifier les clients connectés des données des capteurs et des alertes.

## Fonctionnalités

   - Inscription : Permet aux utilisateurs de s'inscrire.
   - Connexion : Permet aux utilisateurs de se connecter.
   - Simulation de capteur : Génère des données de capteurs et des alertes.
   - Communication en temps réel : Utilise WebSocket pour transmettre les données et les alertes  en temps réel aux clients.

## Prérequis

    Node.js 
    MongoDB

## Commandes d'installation des différents Modules 

Commande pour initialiser le Projet : 
    npm init -y
Voici les commandes pour installer tous les modules utilisés pour le projet
Express : Framework web pour Node.js.
     npm install express
bcrypt : Bibliothèque pour hacher les mots de passe 
     npm install bcrypt 
jsonwebtoken : Bibliothèque pour créer et vérifier les JWT (JSON Web Tokens)
    npm install jsonwebtoken
express-validator : Middleware pour valider les données des requêtes HTTP
    npm install express-validator
mongoose : Bibliothèque ODM (Object Data Modeling) pour MongoDB et Nodejs
    npm install mongoose
passport : Middleware d'authentification pour Node.js.
    npm install passport
passport-jwt : Stratégie JWT pour Passport.
    npm install passport-jwt
socket.io : Bibliothèque pour ajouter des fonctionnalités WebSocket, permettant une communication  en temps réel entre les clients et le serveur.
    npm install socket.io
nodemon : 
    npm install nodemon

## Lancer le serveur
    npm start dev

## Requettes et Interaction avec la postman

Inscription

 URL : http://localhost:8000/api/users/inscription
 Méthode : POST
 body : {
  "email": "addresse mail",
  "password": "mot de passe"
}

Connexion

 URL : http://localhost:8000/api/users/connexion
 Méthode : POST
 body : {
  "email": "addresse mail",
  "password": "mot de passe"
}

Communication en temps réel avec Socket.io
 Aller à l'addresse suivante: http://localhost:8000 dans le navigateur 

 





