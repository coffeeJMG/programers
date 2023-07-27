function solution(arr, query) {
    for(let i=0;i<query.length;i++){
        const item = query[i];
        
       if(i%2===0){
         arr.splice(item+1, arr.length-(item+1))
       }else{
          arr=arr.splice(item);
       } 
    }
    return arr
}
