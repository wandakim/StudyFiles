var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(request.url, true).query;

    console.log(queryData.id); // 터미널에 출력되는 값을 통해 url에 /~쿼리 부분이 들어감을 알 수 있다. 
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(queryData.id);
});
app.listen(3000);