// I have to check their is three integers they which traingle they form i have to check that 
// if all sides equal equilateral , two sides equal isosceles , and no sides same then its a scalene traingle


const whichTriangle = function(a,b,c){
    if( a == b && b == c && c == a){
        console.log("This Is a Equilateral Triangle");
    }
    else if (a == b || b == c || c == a){
        console.log("This Is a Isoscalene Triangle");
    }else{
        console.log("This Is a Scalene Triangle");
    }
}

whichTriangle(8,5,4)