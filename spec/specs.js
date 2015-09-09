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

  it("moves word combinations of 'qu' from the front to the back and adds 'ay' to the end", function() {
   expect(pigLatin("queen")).to.equal("eenquay");
  });

  it("moves word combinations of 'qu' towards the back and adds 'ay' to the end", function() {
   expect(pigLatin("squeal")).to.equal("ealsquay");
  });

  it("treats the 'y' as a consonant, for words that start with a 'y'", function() {
    expect(pigLatin("youth")).to.equal("outhyay");
  });

  it("treats the 'y' as a vowel, for words that don't start with a 'y'", function() {
    expect(pigLatin("bye")).to.equal("yebay");
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
