/**
 * 강의 사이트
 */


const express = require('express');
const app = express();

app.listen(8080, ( )=> {
    console.log('opening on 8080');
});

app.get('/pet', (req,res) => {
    res.send('누군가 /pet으로 방문하면 이 안내문이 나옴');
});

app.get('/beauty', (req,res) => {
    res.send('누군가 /beauty으로 방문하면 이 안내문이 나옴');
});

app.get('/', (req,res) => {
    res.sendFile(__dirname +'/index.html');
}); // get 이용해서 html 파일 보내기. 