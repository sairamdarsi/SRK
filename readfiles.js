const fs = require('fs');

//fs.readFile('test.txt',(err,data) => {
  //  console.log(data.toString())
  //});

//fs.appendFile('newTest.txt', 'Hello World', (err)=>{
    //if(err) {
       // console.log(err);
//    }()
// });

//fs.writeFile('empty.txt', 'New Content to b e overrided',(err,file) => {
    //if (err)throw err;
    //console.log('File Created')
//});

//fs.appendFile('empty.txt', '\nThis file is no longer empty', (err) => {
   // if(err) throw err;
    //console.log('Content Appended')
//});

//fs.rename('empty.txt', 'notempty.txt',(err) => {
    //if(err) throw err;
    //console.log('File Renamed')
//});
fs.unlink('newTest.txt', (err) => {
 if(err) throw err;
 console.log('file Deleted')
})