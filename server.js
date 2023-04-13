const http=require('http');
const {readFileSync}=require('fs')
const server=http.createServer((req,res)=>{
    res.end(JSON.stringify(readFileSync('read6.txt',{
        encoding:'utf-8'
    })))
})
server.listen(3000, () => {
    console.log("success")
})