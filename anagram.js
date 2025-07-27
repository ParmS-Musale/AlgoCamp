// 14. Check if two strings are anagrams.

let str1 = "parm";
let str2 = "cat";

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false; // Different lengths can't be anagrams

  // Convert to lowercase (optional, for case-insensitive check)
  str1 = str1.toLowerCase();
  console.log(str1);

  str2 = str2.toLowerCase();
  console.log(str2);

  // Convert strings to arrays, sort, and join back to strings
  const sortedStr1 = str1.split("").sort().join(""); 
  console.log(sortedStr1);
  const sortedStr2 = str2.split("").sort().join("");
  console.log(sortedStr2);
  return sortedStr1 === sortedStr2;
}

console.log(areAnagrams(str1, str2)); // true
