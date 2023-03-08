function solution(s){
    
    let pCount = 0;
    let yCount = 0;
    // 문자열을 돌면서 p,P y,Y 마다 각 변수에 count +1 
    // 변수의 값으로 결과 출력
    
    for(i=0; i<s.length; i++){
        let item= s[i];
        if(item ==="p" || item==="P"){
            pCount ++
        }else if(item ==="y" || item==="Y"){
            yCount ++
        }
     }
     if(pCount ===yCount ){
            return true
        }else if(pCount !==yCount){
            return false
        }else if(pCount ===0 && yCount ===0){
            return false
        }
    console.log(pCount)
    console.log(yCount)

    
}