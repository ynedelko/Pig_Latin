describe('pigLatin', function() {

  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("moves a starting consonant to the back and adds 'ay' to the end", function () {
    expect(pigLatin("tee")).to.equal("eetay");
  });

  it("moves all starting consonants to the back and adds 'ay' to the end", function () {
    expect(pigLatin("three")).to.equal("eethray");
  });

});

describe('isVowel', function() {

  it("returns true if the letter is a vowel", function() {
    expect(isVowel("a")).to.equal(true);
  });

  it("returns false if the letter is a consonant", function() {
    expect(isVowel("z")).to.equal(false);
  });
});
