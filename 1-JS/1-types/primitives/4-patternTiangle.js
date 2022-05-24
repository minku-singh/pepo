/*
1. You are given a number n.
2. You've to create a pattern of * and separated by tab as shown in output format.

*
* *
* * *
* * * *
* * * * *
*/

let n = 5;
for(let i = 1; i <= 5; i++){
    for(let j = 0; j < i; j++){
        console.log("* ");
    }
}