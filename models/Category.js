const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
      catName:{
          type:String,
          required:true
      }
}, {timestamps:true})

module.exports = mongoose.model('Category', CategorySchema)