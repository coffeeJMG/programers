let point ={};


function solution(name, yearning, photo) {
    
        var answer = [];
       
        for(let i=0; i<name.length; i++){
                
                let key = name[i]
                let value = yearning[i]
                point[key] = value
            
        }
    
        for(let i=0; i<photo.length; i++){
                 let result = 0;    
    
            
                for(card of photo[i]){
                    
                     if(point[card]){
                         
                         result+=point[card]
                     }
                }
            
                answer.push(result)
        }
        
        
        
    
        return answer;
}