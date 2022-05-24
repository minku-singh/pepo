/*
    Print FizzBuzz

    Write a program that prints a number from 1 to 20 and for multiples of
    '3' print 'Fizz'
    '5' print 'Buzz'
    '3' and '5' both print 'FizzBuzz'
    else the number itself
*/

for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i, "FizzBuzz");
    }else if(i % 5 === 0){
        console.log(i, "Buzz");
    }else if(i % 3 === 0){
        console.log(i, "Fizz");
    }else{
        console.log(i)
    }
}