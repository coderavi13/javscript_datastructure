const arr = [1,2,,3,4,5,6,7,8]


const chunkArr=[];
let chunk=[];
const chunkSize =3;

let index =0;
while(index<arr.length){
chunkArr.push(arr.slice(index,index+ chunkSize))
index += chunkSize;
}

console.log(chunkArr);


