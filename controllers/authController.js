 
const express  = require('express');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');
const UserValidation  = require('../validations/validation'); 
const User = require('../models/User');
const { body } = require('express-validator');
 
 
// Fonction pour Inrciption

exports.inscription = (req, res) => {

 const {body}  = req

 // Validation des données
  const {error}  = UserValidation(body).UserValidationInscription
  if(error) return res.status(401).json(error.details[0].message) 

 // Hasher le mot de passe
 
  bcrypt.hash(body.password, 10)
  .then(hash =>{
    delete body.password
    new User({email : body.email, password : hash})
    .save()
    .then((User)  => {
      console.log(User)
      res.status(201).json('Utilisateur créer avec succes ! ')
    } )
    .catch((error) => res.status(500).json(error))
 })
 .catch((error) => res.status(500).json(error))
 
}



// Fonction pour Connexion

exports.connexion = (req, res) => {
  const {email, password} = req.body
  
// Validation des données
const {error}  = UserValidation(req.body).UserValidationconnexion
if(error) return res.status(401).json(error.details[0].message) 

  // Rechercher le user la BD
User.findOne({email: email})
.then(User  => {
    if(!User) return res.status(404).json({msg : "Username or Password Incorrect !"})
    console.log(User) 
    bcrypt.compare(password, User.password)
    .then(match => {
        if(!match) return res.status(500).json({msg : "Server Error !"})
        res.status(200).json({
            email : User.email,
            id : User._id,
            token : jwt.sign({id : User._id}, 'secret_key', {expiresIn: '10h'}) 
        })
    })
    .catch((error) => res.status(500).json(error))

}) 


.catch((error) => res.status(500).json(error))
 
}