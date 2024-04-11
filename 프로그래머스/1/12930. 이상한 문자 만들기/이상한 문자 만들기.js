function solution(s) {
    var answer = '';
    
    s = s.split(" ")
    
    for(let i=0; i<s.length; i++){
            let item = s[i]
            for(let j=0; j<item.length; j++){
                   
                    if( j%2 ===1){
                        answer+=item[j].toLowerCase()
                    }else {
                        answer+=item[j].toUpperCase()
                    }
                 
            }
        
        if( i !==s.length-1){
            answer+=" "    
        }
        
    }
    
    return answer
}