
// Solution 1
const str1 = 'abccba'

const rev = str1.split('').reverse().join('');

console.log("String in palindrome", str1 === rev)


//Solution 2

const chArr = str1.split('');
let flag=true;
let k = chArr.length-1;
for(let i=0; i <= chArr.length/2; i++,k--)
{
if(chArr[i] != chArr[k]){
    flag= false;
}

}

console.log("String is Palindrome ",flag)