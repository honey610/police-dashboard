const mongoose = require('mongoose');

const{Schema}=mongoose;

const efirSchema = new Schema({

  userName: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  incidentDetail: { type: String },
  createdAt: { type: Date, default: Date.now }
});




module.exports = mongoose.model('Efir', efirSchema);