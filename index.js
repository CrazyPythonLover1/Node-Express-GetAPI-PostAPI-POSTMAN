const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const users = [ 'asad', 'sabed', 'mainul', 'munna', 'faruqi', 'crazyPythonLover']

function rootcall(req, res){
    res.send("Thank you very much")
}

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruits: "banana", quantity:20, price:60});
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.query.sort)
    const name = users[id];
    res.send({id,name});
})

app.listen(3000, ()=> console.log('listening to port 3000'))