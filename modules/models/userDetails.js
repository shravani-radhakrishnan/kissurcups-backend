const mongoose = require('mongoose');

const {schema} = mongoose ;

const pointSchema = new Schema({
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  }, { _id: false }); 

const addressSchema = new schema({
    houseNo:String,
    StreetName:String,
    landMark:String,
    addressLine:String,
    location: pointSchema,
},{ _id: false });

const userSchema = new schema({
userId:String,
name:String,
mobile:String,
email:String,
gender:String,
age:String
})

module.exports = connectedDbs.kissUrCups.model('user', userSchema);