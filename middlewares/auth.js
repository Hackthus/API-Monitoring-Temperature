const passport = require('passport');
const passport_jwt  = require('passport-jwt') 
const User = require('../models/User');

passport.use(
  new passport_jwt.Strategy({
    jwtFromRequest : passport_jwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : "secret_key"
  },
    function(jwtpayload, done){
      return User.findById(jwtpayload.id)
      .then(User => { return done(null, User)})
      .catch(error => { return done(error)})
    }
))

 
 