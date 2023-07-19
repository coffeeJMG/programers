function solution(k, m, score) {
    var answer = 0;
    let box=[];
    let boxCount = Math.floor(score.length/m)
    
    score.sort((a,b) => a-b)
    
    for(j=0; j<boxCount; j++){
        for(i=0; i<m; i++){
        
          box.push(score.pop())
        }
        answer+=(box[box.length-1]*m)
        box=[];
    }
    
    console.log(box)
    
    console.log(answer)
    return answer;
}