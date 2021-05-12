const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(val=>+val);
const[a,b] = input;
let H = 0;
let M = 0;
((b - 45) < 0 ? H = a-1, M = 105 - H : H = a, M = b-45 )
console.log(`${H} ${M}`)

// 첫 시도 - 에러 . 저렇게 사용은 안되나봄. 

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(val=>+val);
const[a,b] = input;


if(b - 45 < 0) {
    const H = a-1;
    const M =  
}
console.log(`${H} ${M}`)