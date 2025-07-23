let kataPalindrome = "katak";
let cekkataPalindrome = "";
for (let i = kataPalindrome.length - 1; i >= 0; i--) {
  cekkataPalindrome += kataPalindrome[i];
}
if (cekkataPalindrome === kataPalindrome) {
  console.log(`Kata "${kataPalindrome}" merupakan palindrome`);
} else {
  console.log(`Kata "${kataPalindrome}" bukan merupakan palindrome`);
}
