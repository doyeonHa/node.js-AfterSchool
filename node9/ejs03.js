// 모듈을 추출합니다
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

// 서버를 생성하고 실행합니다
http.createServer(function(request, response) {
    // ejsPage.ejs 파일을 읽습니다
    // ejs페이지에 name, description 속성을 전달
    fs.readFile('ejsPage2.ejs', 'utf8', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(data, {
            name: 'Nodejs',
            description: 'Hello ejs With Node.js .. !'
        }));
    });
}).listen(3000, function() {
    console.log('Server Running at http://127.0.0.1:3000');
});