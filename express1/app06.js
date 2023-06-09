// 요청이 왔을 때, 클라이언트의 요청 헤더에서 User_agent속성을 추출합니다
// 모듈을 추출합니다
var express = require('express');

// 서버를 생성합니다
var app = express();

// 미들웨어를 설정합니다
app.use(function (request, response) {
    // User-Agent 속성을 추출합니다
    var agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);

    // 응답합니다
    // 상태 코드만 보낼 때는 sendStatus() 메서드를 사용합니다
    response.sendStatus(200);
});

// 서버를 실행합니다
app.listen(3000, function () {
    console.log('Server Running at http://127.0.0.1:3000');
});