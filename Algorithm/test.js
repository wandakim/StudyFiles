
const N = 9;
const star = [];
const blank = [];

for(i = 0; i < N ; i++) {
    blank.push(' ')
}

for (i = 0; i < N; i++) {
    star.push('*');
    let stars = star.join('');
    blank.pop();
    let blanks = blank.join('');
    console.log(`${blanks}${stars}`)
}