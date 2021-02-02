// s = string yang diinput
function isPalindrome(s){
    return  s.toLowerCase() == s.toLowerCase().split("").reverse().join("");
}
Console.log(isPalindrome("Level"));