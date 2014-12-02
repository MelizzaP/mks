/* Given a string, return true if it contains balanced parenthesis. */

function isBalanced (string) {
    count = 0;
    array = string.replace(/[^()]/g,'').split('');
      for (i=0; i<array.length; i++){
        if (array[i]=== '('){
          count +=1
        }
        if (array[i]===')'){
          count -=1
        }
        if (count<0){
          return false;
        }
      }
    if (count === 0){
      return true;
    }
    else {
      return false;
    }

}