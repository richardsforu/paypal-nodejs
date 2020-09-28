console.log('--index.js');

// http call using fetch api
let textDiv=document.querySelector("#d1");
fetch('http://localhost:8080/api/products')
.then(response =>response.text())
.then(msg =>{
    textDiv.innerHTML=msg
    console.log(msg);
})
.then(err => console.log(err))



