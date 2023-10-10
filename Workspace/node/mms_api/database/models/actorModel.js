const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String
}, {
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  });

module.exports = mongoose.model('Actor', actorSchema);