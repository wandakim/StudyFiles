/**
 * 참고 https://www.youtube.com/watch?v=QkFkFqg-J04
 */
// check browser console's callstack
function three() {
    console.log('i love js')
}

function two() {
    three();
}

function one() {
    two();   
}

function zero(){
    one();
    throw Error("omg im an error!")
}

zero();