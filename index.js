const express = require('express')
const app = express()

function rootcall(req, res){
    res.send("Thank you very much")
}

app.get('/', (req, res) =>{
    res.send("Thank you for calling me ");
} )

app.listen(3000, ()=> console.log('listening to port 3000'))