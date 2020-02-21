const str = "hhhello ravi";

const chars = {};
let maxChar='';
let maxCharCount=0;

/* for (let ch of str) {
  if (!chars[ch]) {
    chars[ch] = 1;
  } else {
    chars[ch]++;
  }
}
 */

 for(let ch of str){
     chars[ch]=chars[ch]+1 || 1;
 }

 for(let value in chars){
if(chars[value] > maxCharCount){
    maxCharCount=chars[value];
    maxChar=value;
}
 }

 console.log(maxChar,maxCharCount);
 
