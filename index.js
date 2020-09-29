const express = require('express')
const app = express()

function rootcall(req, res){
    res.send("Thank you very much")
}

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruits: "banana", quantity:20, price:60});
})

app.listen(3000, ()=> console.log('listening to port 3000'))