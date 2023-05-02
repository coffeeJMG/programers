function solution(arr, k) {
    var answer = [...arr];
    
    let newArray = answer.map((item)=>{
       if(k % 2 ===0){
           return item+k
       }else{
           return item*k
       }
        
    })
    return newArray;
}