input = [23,40]
let [h,m] = input;
if(h===0){    
if( m < 45 ){
    console.log(`${h+23} ${15+m}`);
} else {
    console.log(`${h} ${m-45}`);  
}
} else {
 if (m < 45) {
    console.log(`${h-1} ${15+m}`);
} else {
    console.log(`${h} ${m-45}`);
}
}