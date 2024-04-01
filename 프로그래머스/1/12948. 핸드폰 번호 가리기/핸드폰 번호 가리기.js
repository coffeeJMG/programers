function solution(phone_number) {
    var answer = '';
   
    // splice(start , deleteCount , itemN)
   phone_number = phone_number.split("")
    let newArray = []
    
    
    for(let i=0; i<phone_number.length; i++){
        
        if( i <= phone_number.length-5){
            
            newArray.push("*")
        }else {
              newArray.push(phone_number[i])
        }
        
        
        
      
    }
    
     return newArray.join("")
}