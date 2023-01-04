const mongoose = require('mongoose')
const mongoosePaginate = require("mongoose-paginate-v2");

const Schema = mongoose.Schema


const universitySchema = new Schema({
    alpha_two_code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    web_pages:{
        type: Array,
        required: true
    },
    state_province:{
        type: String,
        required: false
    },
    domains:{
        type: Array,
        required:false
    },
    country: {
        type: String,
        required: true
    }
  })

  universitySchema.plugin(mongoosePaginate);

  const db =  mongoose.model('universities', universitySchema)

  module.exports = db