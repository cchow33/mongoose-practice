// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const schema = mongoose.schema; 

const personSchema = new Schema({
  firstName: String,
  lastName: String,
  age: Number,
  address: addressSchema,
});

const addressSchema = new Schema ({
  city: String,
  street: String,
  apartment: Number, 
})

// Defining a model:
const Person = mongoose.model('Person', personSchema);

// Compiling a model from schema
const SomeModel = mongoose.model("SomeMode", SomeModelSchema);