//You've to print all prime numbers between a range. 

let lower = 6;
let higher = 24;

for(let i = lower; i <= higher; i++){
    let flag = true;
    for(let j = 2; j*j <= i; j++){
        if(i % j === 0){
            flag = false;
            break;
        }
    }

    if(flag === true){
        console.log(i);
    }
}