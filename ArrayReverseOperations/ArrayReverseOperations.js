let array = [ 5,3,2,1,3]
const operations =[[0,1],[1,3]];

function arrayOperations(arr,operations){
console.log("Input Array",arr);
console.log("Operations",...operations)

for(let i of operations){
  // console.log(i);
    const temp = arr.slice(i[0],i[1]+1).reverse();
   // console.log(temp);
    const a =arr.splice(i[0],temp.length,...temp)

    //console.log("result",a)
    
}

return arr;

}

console.log("Array after Operations",arrayOperations(array,operations));