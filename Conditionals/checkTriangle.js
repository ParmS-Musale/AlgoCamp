// You Have to given a Three Integers and you have to check by combing three integers can you build a triangle or not
// Suppose you have a A = 10 , b = 5 ,and c = 5 So you can form a triangle lets take another you have a= 12 , b=6 c= 5
// so here you cant make a triangle

const checkTriangle = function (a, b, c) {
  if (a + b >= c && b + c >= a && c + a >= b) {
    console.log("You can Make a Triangle");
  } else {
    console.log("You can't Make a Triangle");
  }
};
checkTriangle(a=5,b=5,c=10);
