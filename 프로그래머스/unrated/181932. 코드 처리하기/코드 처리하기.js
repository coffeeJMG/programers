function solution(code) {
    var answer = '';
    let mode = 0;
    
    for(i=0; i<code.length; i++){
        let item = code[i]
        
        if(item ==="1"){
            mode ===0 ?  mode=1  : mode =0
            
         }
        
        if(mode ===0 && item !=="1" ){
            if(i %2 ===0){
                answer +=item
            }
        }else if(mode ===1 && item !=="1" ){
            if(i%2 ===1 ){
                answer+=item
            }
        }
     }
    return answer || "EMPTY"
}