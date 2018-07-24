var express = require('express'); /* 설치된 module은 require 명령어를 통해 불러 올 수 있고, 
                                    express module을 express 라는 이름의 변수로 저장하였습니다.*/
var path = require('path');
var app = express();    

app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, function(){
    console.log('Server On!');
});
