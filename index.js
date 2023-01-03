const router = require('./routes/universityRoutes')
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.use(bodyParser.json())


app.use('/', router)

mongoose
    .set("strictQuery", false)
    .connect('mongodb://localhost:27017/university?directConnection=true', {
  
            maxPoolSize: 50,
            wtimeoutMS: 2500,
            useNewUrlParser: true,
          
    })
    .then(result => {
        console.log('MongoDB Conectado')
    })
    .catch(error => {
        console.log(error)
    })

app.listen(9000, () => console.log(''))