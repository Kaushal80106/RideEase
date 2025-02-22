const { selectFields } = require('express-validator/lib/field-selection')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,'Firstname must be atleast 3 char']
        },
        lastname:{
            type:String,
            minLength:[3,'Lastname must be altleast 3 character']
        }
    },
    email :{
       type:String,
       required:true,
        unique:true,
        lowercase:true,
        match:[/^\S+@\S+\.\S+$/,'please enter a valid email']
    },
    password:{
        type:String,
        required:true,
        select:false,

    },
    socketId:{
        type:String
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3,'color must be atleast 3 character']
        },
        plate:{
            type:String,
            required:true,
            minLength:[3,'plate must be atleast 3 character']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,"capacity must be atleast 1"]
        },
        vehicleType:{
          type:String,
          required:true,
          enum:['car','motorcycle','auto']  
        }
    },
    location:{
        lat:{
            type:Number,
        },
        log:{
            type:Number,
        }
    }
})

captainSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({_id:this._id}, process.env.JWT_SECTRET,{ expiresIn:'24h'})
  return token ;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain',captainSchema);


module.exports = captainModel