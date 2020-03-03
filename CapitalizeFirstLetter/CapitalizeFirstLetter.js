const str = 'hi my name is   ravindra';

let words=[];
for(let word of str.split(' ')){
if(word.length>0)
  words.push(word[0].toUpperCase() + word.slice(1));
}

console.log(words.join(' '));
