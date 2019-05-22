// Escribe una función llamada isPalindrome que verifique que la palabra
// en cuestión sea un palíndromo

// Aquí va tu código
function isPalindrome(string) {
    const palindrome = [...string].slice('').reverse().join('');
    return string === palindrome ? true : false
  }
  
  
  // Tests
  describe("isPalindrome", () => {
    it("Cools!!!! Es un Palíndromo 😃", () => {
      expect(isPalindrome("anitalavalatina")).toEqual(true);
    });
    it("No es un palíndromo 😭", () => {
      expect(isPalindrome("cocacola")).toEqual(false);
    });
  });
  