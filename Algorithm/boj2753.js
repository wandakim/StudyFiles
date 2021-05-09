fs = require('fs');
const I = fs.readFileSync('dev/stdin');

if(I%4==0&&(I%100!=0||I%400==0)){
    console.log(1);
} else {
    console.log(0);
}