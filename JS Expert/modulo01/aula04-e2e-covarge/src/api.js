
const http = require('http')

function handle(request,response){
    return response.end('OK')
}

const app = http.createServer(handler).listener(3000,()=> console.log('runing at 3000'));

const http = require('http');
const routes = {
'/contact:get':(request,response)=>{
  response.write('Contact as page')
  return response.end()
},
default(request, response){
  response.writeMethod(404)
  return response.end('Not  found')
}
};

function handler(request, response){
  const {url, method} = request;
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;
  const choses = routes[routeKey] || routes.default;

    return choses(request, response);
}


