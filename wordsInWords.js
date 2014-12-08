/*
Given an array of unique words, find the word that contains the 
greatest number of other words. A word must be at least two letters long.
*/

function nestedWordCount (wordList) {
 counter = {} 
 for (i = 0; i < wordList.length; i++){
     count = 0;
     for ( j = 0; j < wordList.length; j++ ) {
         if (wordList[i].toLowerCase().indexOf(wordList[j].toLowerCase())!=-1){
             count +=1 
         }    
     }
     
     counter[wordList[i]]=count;
 }

 
 var maxWord, max = 0;
 for (var word in counter){
     if (counter[word]>max){
         max = counter[word]
         maxWord = word
     }
 }
 return maxWord
}
