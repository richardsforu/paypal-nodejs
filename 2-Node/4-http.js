let http = require('http')

let prod={
    "id":"P001",
    "name":"Pen",
    "price":76,
    "description":"Red Ink"
 }

let server=http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'application/json'});
    
    setTimeout(() => {
        res.write(JSON.stringify(prod))
        //res.write('My First Server side code from node...')
        //res.write('Second Line')
        res.end() 
    },5000)
   
    // BL

    res.write("Test...")


})

// -------
server.listen(8080,()=>{
console.log('-- Server started on port 8080');
})

