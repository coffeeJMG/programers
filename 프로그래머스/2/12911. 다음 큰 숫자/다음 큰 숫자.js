function solution(n) {
    var answer = 0;

    let binaryN = n.toString(2).split("0").join("").length;
    
   
    for(let i=n+1; ; i++){
            if(i.toString(2).split("0").join("").length === binaryN){
            answer=i
            break
        }
    }
      
 
  
    return answer;
}