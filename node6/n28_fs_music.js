// 모듈을 추출합니다
var fs = require('fs');
var http = require('http');

// 서버를 생성하고 실행합니다
http.createServer(function (request, response) {
// HTML 파일을 읽습니다
fs.readFile('악의하인.mp3', function(error, data) {
    response.writeHead(200, { 'Content-Type' : 'audio/mp3' });
    response.end(data);
});
}).listen(52273, function() {
    console.log('Server Running at http://127.0.0.1:52273');
});