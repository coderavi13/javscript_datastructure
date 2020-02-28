const str1 ="string_1";
//Solution 1
const revStr1 = str1.split('').reverse().join('');
console.log(revStr1);


//solution 2
const str2="string_2";
let revStr2='';
for(let ch of str2) {
    revStr2 = ch + revStr2;
}
console.log(revStr2);



//Solution 3
const str3='string_3';
 const revStr3 = str3.split('').reduce((revStr,ch)=> ch + revStr)
console.log(revStr3)


