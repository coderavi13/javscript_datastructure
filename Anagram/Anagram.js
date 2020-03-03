const str = 'Hi There...!!!123';

const a =str.replace(/[a-z A-Z 0-9]/g,'')

console.log(a);

for( let i of str){
    console.log("character ", i.charCodeAt(0));

    if(i.charCodeAt(0)>= 97 && i.charCodeAt(0)<= 122){
        
    }
    
    
}
 