// I have to count the frequency of string anf print the counts of objct

let str = "Parmeshwarparmeshwar"
let freq = {}

for (const char of str){
    if(freq[char]){
        freq[char] += 1 ;
    }else{
        freq[char] = 1 ;
    }
}

console.log(freq);
