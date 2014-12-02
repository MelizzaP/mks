/*
Given a properly formatted URL, return the query string data as 
an array of key-value pairs, in the order that they appear. 
HINT: You may use decodeURIComponent()
call decode at the end!!
*/

function parseQueryString (url) {
var urlHalves,query,result=[];
 urlHalves = url.split("?")
 if (urlHalves[1]){
  query = urlHalves[1].split("&")
    for(i =0; i <query.length; i++){

        result.push(query[i].split("="))
    }
 }
 return result
}


/* another possible solution */

function parseQueryString (url){
  a = decodeURIComponent(url).split(/[?&]/);
  a.shift() //Drop URL HOst
  result =[];
  a.forEach(function (r){
    result.push(r.split(/=/));
  });
  return result
}