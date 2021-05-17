const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(val => +val);
const [a,b] = input; 


switch(true){
    case (a > b): console.log('>');
        break;
    case (a < b): console.log('<');
        break;
    case (a == b): console.log('==');
        break;
}



