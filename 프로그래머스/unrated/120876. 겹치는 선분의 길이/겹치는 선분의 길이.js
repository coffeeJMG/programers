function solution(lines) {
    var answer = 0;
    
    let lineRange = new Array(200)
    lineRange.fill(0)
    
    for(let i=0; i<lines.length; i++){
        
        let minus = lines[i][0]
        let plus = lines[i][1]
    
     for(let j = minus ; j<plus ; j++){
         
         lineRange[j+100] +=1;
     }
    } 
            
    
    for(let i=0; i<lineRange.length; i++){
        if(lineRange[i] >1){
            answer++
        }
    }
      
    return answer;
}




