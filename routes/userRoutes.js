const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { inscription, connexion } = require('../controllers/authController');
const passport = require('passport');
 

// Route pour inscription
router.post('/inscription', inscription) 

// Route pour connexion
router.post('/connexion' , connexion)
 
// Routes Protégées
router.use(passport.authenticate('jwt', { session : false }))

router.get('/admin', (req, res) => {
    res.send(" Page d 'administration ..")
});

 
module.exports = router;
