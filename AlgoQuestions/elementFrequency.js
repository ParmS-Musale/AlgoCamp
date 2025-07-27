// 12. Count the frequency of elements in an array.

let arr = [2,4,5,3,2,4,6,4,7,2,3,4,2]

let freq = 0;

for(let i=0 ; i<arr.length ;i++){
    let elements = arr[i]
    if (elements[freq]){
        elements[freq];
    }else{
        elements[freq] = 1 ;
    }
}

console.log(freq);
