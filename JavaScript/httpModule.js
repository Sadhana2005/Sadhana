var http=require('http')
http.createServer((req,res) =>{
   res.write("Welcome to backend")
   res.end()
}).listen(8080)