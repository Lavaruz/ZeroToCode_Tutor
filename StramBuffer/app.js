const fs = require('fs')
const path = require('path')

const writeStream = fs.createWriteStream(path.join(__dirname, 'newText.txt'))
fs.createReadStream(path.join(__dirname, 'text.txt'))
    .on('data', (chunk)=>{
        console.log(chunk)
        console.log(Date.now());
        writeStream.write(chunk, ()=> console.log('done'))
    })