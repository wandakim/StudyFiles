const fs = require('fs');
const s = fs.readFileSync('/dev/stdin').toString();
const S = +s;

if(90 <= S){
    console.log('A');
}else if(80 <= S){
    console.log('B');
}else if(70 <= S){
    console.log('C');
}else if(60 <= S){
    console.log('D');
} else {
    console.log('F');