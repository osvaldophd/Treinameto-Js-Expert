const http = require('http')

function handle(request,response){
    return response.end('OK')
}

const app = http.createServer(handler).listener(3000,()=> console.log('runing at 3000'));
