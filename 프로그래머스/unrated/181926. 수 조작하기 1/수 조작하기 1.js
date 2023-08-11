function solution(n, control) {
    var answer = n;
    
    for( let i =0; i <control.length; i ++){
        let item = control[i]
        if(item === "w"){
            answer +=1
        }else if(item === "s"){
            answer -=1
        }else if(item ==="d"){
            answer +=10
        }else if(item ==="a"){
            answer -=10
        }
    }
    return answer;
}