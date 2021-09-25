/*function beautifulBinaryString(b) {
    // Write your code here
let an=b;
let count=0;

let sbstr='010';

for(let i=0; i<=an.length-3;i++){
let temp=an.slice(i,i+3)
console.log(temp)
if (temp===sbstr){
    
    count++;
    i+=2
}
}
return count
}
*/


function beautifulBinaryString(b) {
    // Write your code here
    let sbstr=/010/g;
let count= b.match(sbstr);

return b.length>0?count.length:0;




}
console.log(beautifulBinaryString('0100101010'));