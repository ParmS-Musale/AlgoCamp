// I have to calculate the factorial of given number

function factorial(n){
    let result =1 ;

    for (let i=1 ; i<=n ; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));
