const greatestCommonDivisor = function(a,b){
    let great = 1
    for (let i=2 ; i< Math.min(a,b) ; i++){
        if(a % i == 0 && b % i == 0){
            great = i ;
        } 
    }
    return great;
}
 
console.log(greatestCommonDivisor(18,15));
