// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const schema = mongoose.schema; 

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const addressSchema = new Schema ({
  city: String,
  street: String,
  apartment: Number, 
})
