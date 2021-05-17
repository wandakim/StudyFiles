input = ['2','1 2','2 3']
const n = +(input.splice(0,1));

for(i = 0; i < n; i++){
    let nmbrs = input[i].split(' ').map(val=>+val);
    let [a,b] = nmbrs;
    console.log(a+b);
}
