/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/



module.exports = isAnagram;


function sort(str){
  var array =str.split("");
 array =array.sort();
 var sortedArray= array.join("");
 return sortedArray;
}
 function isAnagram(str1,str2){
   if(sort(str1) == sort(str2)){
      return true;
   } else {
      return false;
   }
   }
 var ans = isAnagram("hii","hello");
 console.log(ans);

 module.exports = isAnagram;