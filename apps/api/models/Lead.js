const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
    enum: ['Newsletter', 'Lets Talk', 'Get Started', 'Contact Page']
  },
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  phone: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    default: 'New',
    enum: ['New', 'Contacted', 'Qualified', 'Lost']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Lead', LeadSchema);
