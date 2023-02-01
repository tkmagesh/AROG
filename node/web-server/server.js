const http = require('http'),
    fs = require('fs'),
    path = require('path')

const server = http.createServer(function(req, res){
    /* 
    res.write("Welcome to Node.js!")
    res.end() 
    */

   /* synchronous IO */
   /* 
   const fileContents = fs.readFileSync(path.join(__dirname, 'index.html'), {encoding : 'utf-8'})
   res.write(fileContents)
   res.end()  
   */
  

    /* Asynchronous IO */
    fs.readFile(path.join(__dirname, 'index.html'), { encoding : 'utf-8'}, function (err, fileContents){
        if (err !== null) {
            res.statusCode = 500;
            res.end()
            return
        }
        res.write(fileContents)
        res.end()
    })
})

server.listen("8080")