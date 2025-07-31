// I have to find a Missiong number from 1 To N

function missingNumber(arr ,N){
    let totalSum = N * (N+1) /2;
    let sum = 0
    for(let i=0 ; i<arr.length ;i++){
        sum += arr[i];
    }

    return totalSum - sum ;
}

console.log(missingNumber([ 1,2,3,5,6,7,8,9],9))