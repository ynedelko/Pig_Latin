var pigLatin = function(word) {

  var vowel_not_found = true;
  var new_end = "";

// we took it out of the while loop because we're only dealing with the first letter, if left in the while loop, it would loop through all the letters in the word
  if (word[0] === "y") {
    new_end = new_end + word[0];
    word = word.slice(1);
    return word + new_end + "ay";
  }
  while (vowel_not_found) {
    if (isVowel(word[0])) {
      vowel_not_found = false;
    } else if ((word[0] === "q") && (word[1] === "u")) {
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
  var vowels = ["a", "e", "i", "o", "u", "y"];
  if (vowels.indexOf(letter) != -1)  {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#pig-latin-translator").submit(function(event) {
    var word = ($('input#word').val());
    var output = pigLatin(word);

    $(".word").text(word);
    $(".output").text(output);

    $("#result").show();
    event.preventDefault();
  });
});


// another way to do this
// for(var i=0; i < word.length; i += 1) {
//   if(isVowel(word[0])) {
//     return word + new_end + "ay";
//   } else {
//     new_end = new_end + word[0];
//     word = word.slice(1);
//   }
// }
