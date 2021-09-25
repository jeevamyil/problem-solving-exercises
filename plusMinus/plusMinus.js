function plusMinus(arr) {
    // Write your code here
let hist={'positive':0,'negative':0,'zero':0}

for(let items of arr){
 items>0?hist['positive']++:items<0?hist['negative']++:hist['zero']++;
}

for(let i in hist){
    console.log((hist[i]/arr.length).toFixed(6));
}



}

plusMinus([1,2,3,-1,-2,-3,0,0])