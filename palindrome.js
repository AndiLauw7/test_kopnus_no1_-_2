function palindrome(text) {
  const strText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const joinStr = strText.split("").reverse().join("");
  if (strText === joinStr) {
    console.log(`Kata ${text} merupakan palindrome`);
    return true;
  } else {
    console.log(`Kata ${text} bukan merupakan palindrome`);
    return false;
  }
}
palindrome("katak");
