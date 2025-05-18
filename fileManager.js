// Use fs and fs.promises to:
// • Write and read a text file using:
// o Callback style (fs.readFile)
// o Promise style (fs.promises.readFile)
// o Async/Await version

let fs=require('fs')
const path = require('path')
let content='Read file: report.txt'


// Callback Style

fs.writeFile('report.txt',content,(err)=>{
    if(err) return console.error(err)
    console.log('Created file:',path.basename('report.txt'))
})

//Output: Created file: report.txt

fs.readFile('report.txt','utf8',(err,data)=>{
    if(err) return err
    console.log('callback',data)
})

// Output: Read file: report.txt



// Promise style 

let fspromise=require('fs').promises

fspromise.writeFile('report.txt',content)
.then(()=>{
    console.log('File Created with fspromise');
})
.catch(err=>{
console.log(err);

})

fspromise.readFile('report.txt','utf8')
.then((data)=>{
    console.log('promise',data);
})
.catch((err)=>{
console.log(err);

})


// Async/Await version

let fsAsync=require('fs').promises
async function writeFile() {
    try{
        await fsAsync.writeFile('report.txt',content)
        console.log('File Created with fsAsync');
        
    }catch (err) {
        console.error(err)
    }
}
writeFile()

async function readFile() {
    try{
        let data=await fsAsync.readFile('report.txt','utf8')
        console.log('Async/await:',data);
        
    }catch (err){
        console.error(err);
        
    }
}
readFile()