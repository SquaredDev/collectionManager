const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
  id: {type:Number, required:true, unique:true },
  name: String,
  type: String,
  origin: {
    port:String,
    planet:String,
    system:String
  },
  buildYear: Date,
  launchYear: Date,
  registry: {type:Number, required:true, unique:true},
  crew: [
    {crewName:String,
    crewRank: String,
    officer: Boolean,
    crewId:{type:Number, unique:true},
    shipDestruct:{type:Boolean, defalt:false}
  }],
  dispacement:Number,
  capacity:{crew:Number,cargo:Number}
});
