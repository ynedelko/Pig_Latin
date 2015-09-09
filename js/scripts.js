var pigLatin = function(word) {

  var vowel_not_found = true;
  var new_end = "";

  while (vowel_not_found) {
    if(isVowel(word[0])) {
      vowel_not_found = false;
  } else if ((word[0] === "q") && (word[1] == "u")) {
    new_end = new_end + word[0] + word[1];
     word = word.slice(2);
  } else {
    new_end = new_end + word[0];
    word = word.slice(1);
    }
  }
  return word + new_end + "ay";
};

var isVowel = function(letter) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(letter) != -1)  {
    return true;
  } else {
    return false;
  }
};



// another
// for(var i=0; i < word.length; i += 1) {
//   if(isVowel(word[0])) {
//     return word + new_end + "ay";
//   } else {
//     new_end = new_end + word[0];
//     word = word.slice(1);
//   }
// }
