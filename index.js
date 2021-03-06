const express = require('express');
const app = express();
var router = express.Router();
const cors = require('cors');
const exphbs = require('express-handlebars');
const user = require('./rotues/user')
app.use(express.json())
app.use(cors())
app.use(router)
app.use('/',user)
app.use((req,res) => {
    res.status(404).send({message : '404 Route not found'})
})

const port  = process.env.PORT || 4001;

app.listen(port)

console.log('Server running at port ' , port)
module.exports.app = app