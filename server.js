const http = require('http')
const fs = require('fs')

const host = '0.0.0.0'
const port = 8000

const htmlContent = fs.readFileSync('Web_Game.txt', 'utf8') 

const server = http.createServer(
    function(reg, res){
        res.writeHead(200, { 'Content-Type': 'text/html'})
        // res.end('My name is Ed and I create server!!!')
        // res.end('<html><body>Hello World</body></html>')
        res.end(htmlContent)
    }
)

server.listen(port, host, function(){
    console.log('Server working now...')
})
