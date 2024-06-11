const joi  = require('joi');



function UserValidation(body){
    const UserValidationInscription = joi.object({
        email: joi.string().email().trim().required(),
        password: joi.string().min(8).max(30).trim().required() 
    })

    const UserValidationconnexion = joi.object({
        email: joi.string().email().trim().required(),
        password: joi.string().min(8).max(30).trim().required() 
    })


    return {
        UserValidationInscription : UserValidationInscription.validate(body),
        UserValidationconnexion : UserValidationconnexion.validate(body)
    } 
} 


module.exports  =  UserValidation 