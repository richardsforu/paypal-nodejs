var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.json('hello world')
})
  
app.listen(3000,()=>{ 
    console.log('Server listening on port 3000');
})