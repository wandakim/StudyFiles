
const N = 10;
let A = '';
for(i=1;i<N+1;i++){
    A += `${i}
`
}
const B = A.split(''); // 여기에서 10은 1과 0으로 나뉘어짐. 
B.pop(); 
console.log(B);
console.log(B.reverse().join(''));
