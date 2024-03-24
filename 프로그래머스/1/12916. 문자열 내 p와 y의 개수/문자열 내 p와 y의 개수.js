function solution(s){
  

    s=s.split("")
    let strCount =0;
    
    for(let i=0; i<s.length; i++){
            let item = s[i]
            
            if(item ==="p" || item ==="P"){
                strCount ++
            }else if (item ==="y" || item ==="Y"){
                strCount --
            }
        
    }
    
    return strCount ===0 ? true : false
}