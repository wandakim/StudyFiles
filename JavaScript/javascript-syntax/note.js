class Counter {
    constructor(a) {
        this.counter = 0;
        this.callback = a; 
    }
    increase() {
        this.counter++;
        if(this.counter%5 === 0){
            if(this.callback){
                this.callback(this.counter);}
        } else {
            console.log(this.counter);
        }
    }
}
const coolCounter = new Counter();
function printSomething(num) {
    console.log(`yo!${num}`)
}
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

