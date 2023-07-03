function solution(n, m, section) {
    var answer = 0;
   
    let painted= 0;
    
    section.forEach((i)=>{
        if(i>painted){
            painted= i+m-1
             answer++
        }
       
       
       
    })
    
    return answer;
}