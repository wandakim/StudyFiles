


const input = [2, '2 4', '3 6'];
const N = input.splice(0,1)*1;
for (i=1; i<N+1; i++){
    const [a,b] = input[i-1].split(' ');
    console.log(`Case #${i}: ${a*1+b*1}`)
}