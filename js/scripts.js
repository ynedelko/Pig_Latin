var pigLatin = function(word) {

  var vowel_not_found = true;
  var new_end = "";

  while (vowel_not_found) {
    if(isVowel(word[0])) {
      vowel_not_found = false;
    } else {
      new_end = new_end + word[0];
      word = word.slice(1);
    }
  }
  return word + new_end + "ay";
};

var isVowel = function(letter) {
  var vowels = ["a","e", "i", "o", "u"];
  // var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
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
