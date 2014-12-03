/*
Binary to Decimal
Given a number n (represented as a binary number string), 
convert n to base 10.
*/

function binaryToDecimal (n) {
  return parseInt(n,2)
}


/* a function I'm working on */
function binaryToDecimal (n) {
    var num, number, last = n.slice(-1);
    backwardzN = n.split('').reverse()
    console.log(last)
    for (i=0; i<backwardzN.length;i++){
        num =  parseInt(backwardzN[i])*(i*2)
        console.log(num)
    }
    return number + parseInt(last);
}