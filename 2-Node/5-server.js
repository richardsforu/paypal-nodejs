let http=require('http')
let fs=require('fs')


const server=http.createServer(); 

server.listen(3000,()=>{
    console.log('server running at http://localhost:3000');
})

/*

// making response type as 'pdf'
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'application/pdf'});
   

    //Blockimg IO
    //let pdfFile=fs.readFileSync('./node-js.pdf');
    //res.write(pdfFile);  
    
    // Non blockinh IO

   fs.readFile('./node-js.pdf',(err,data)=>{
        res.write(data);
        res.end();
    })
   
    console.log('Ready for next request....');
})

*/

server.on('request',(req,res)=>{
  
    console.log('HTTP Request type: '+req.method);
    console.log('HTTP Request URl: '+req.url);

    let httpMethod=req.method;
    let httpUrl=req.url;

    console.log(req.params.name);

    
    if(httpMethod == 'GET' && httpUrl=='/'){
        console.log(req.query);
        console.log('You have sent GET request for /'); 
      console.log('hello '+req.params.name);
      res.write("GET Request")
        
    }

    if(httpMethod == 'GET' && httpUrl=='/api/products'){
        console.log('You have sent GET request for /'); 
      //  console.log('hello '+req.query.name);
      res.write("Listing all products")
        
    }

    if(httpMethod == 'POST' && httpUrl=='/'){
        console.log('You have sent POST request for /'); 
    }

    if(httpMethod == 'PUT' && httpUrl=='/'){
        console.log('You have sent PUT request for /'); 
    }

    if(httpMethod == 'DELETE' && httpUrl=='/'){
        console.log('You have sent DELETE request for /'); 
    }
    
    res.end();
  
});


 /*
 // Stream a video file with out chunks
server.on('request',(req,res)=>{
    res.writeHead(200,{'Content-Type':'video/mp4'});
    fs.readFile('./20191004_195205.mp4',(err,data)=>{
        if(err){
            console.log('error occured '+err);
            return;
        }

        res.write(data);
        console.log(data);
        
    })

});

*/

/*
server.on('request',(req,res)=>{

    res.writeHead(200,{'Content-Type':'video/mp4'});
    let readStream=fs.createReadStream('./20191004_195205.mp4');// EventEmitter

    readStream.on('data',(chunk)=>{
        res.write(chunk);
        console.log(chunk);
        
    });

    readStream.on('end',()=>{
        res.end();

    })


})

*/