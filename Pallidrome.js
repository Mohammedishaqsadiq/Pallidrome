function isPalindrome(str) {
  let left = 0;
  let right = str.length-1;


  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      console.log("It is not a palindrome");
      return;
    }
    left++;
    right--;
  }

  console.log("It is a palindrome");
}

let palindrome = "vv";
isPalindrome(palindrome);
