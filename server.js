
const express = require('express');
const app = express();

const bodyParser = require ('body-parser');
app.use(bodyParser.json());

app.listen(3000,() => {
    console.log("server started at port 3000")
});

app.get('/', (request,response) => {
    response.send("hellooo");
})

app.post('/api/cars',  (request,response) => {
    const {name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send("car submitted")
})

const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( ()=> {console.log("connection successfull")})
.catch( (error)=> {console.log("error occured")});