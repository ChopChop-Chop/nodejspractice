var express = require('express'); /* 설치된 module은 require 명령어를 통해 불러 올 수 있고, 
                                    express module을 express 라는 이름의 변수로 저장하였습니다.*/

var app = express();    

app.get('/',function(req, res) {  
    res.send('Hello World!!!!!!!!!!!!!!!!!!!!!');
});

app.listen(5000, function(){
    console.log('Server On!');
});
