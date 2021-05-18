
input = ['4','1 3','59 43','1 2','2 20000000000000']
let string = '';
const n = +(input.splice(0,1)); 
for(i = 0; i < n; i++){
    let nmbrs = input[i].split(' ').map(val=>+val);
    let [a,b] = nmbrs;
    string += `${a+b}
`;
}
console.log(string);