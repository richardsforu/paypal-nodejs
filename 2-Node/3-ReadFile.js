let fs=require('fs');

fs.readFile('./menu.txt','UTF8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  // step2

  console.log('..... continue with other');