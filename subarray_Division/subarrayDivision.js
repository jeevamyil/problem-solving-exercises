function birthday(s, d, m) {
    // Write your code here
    let count=0;
for (let i=0;i<s.length;i++){
    if((s.slice(i,i+m).reduce((a,b)=>a+b))===d){
        count++;
    }
}
return count;
}


console.log(birthday([1,2,1,2,3,5],3,2))
//birthday([1,2,1,2,3,5],3,2)