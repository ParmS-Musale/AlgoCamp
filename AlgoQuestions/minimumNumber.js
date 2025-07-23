// You Have to given a Three Number From that you Have to Print The Smallest Number Among Of Them

const minimumNumber = function(x,y,z){
    if ( x < y && x < z){
        console.log( x + " "+ "Is a Smaller Nuumber");
    }
    else if( y < x && y < z){
        console.log( y + " "+ "Is a Smaller Nuumber");
    }else{
        console.log( z + " "+ "Is a Smaller Nuumber");
    }
}
minimumNumber(8,7,6);