function solution(polynomial) {
    var answer = '';
    let newArray = polynomial.split(" ");
    let collectX=[];
    let collectNum=[];
    
    for(i=0; i<newArray.length; i++){
        let item = newArray[i];
        
        if(item ==='+'){
             continue;        
        }else if(item.includes('x')){
            collectX.push(item);
        }else{
            collectNum.push(item);
        }
       }
        let xCount =0;
        for(i=0; i<collectX.length; i++){
            if(collectX[i] ==='x'){
                xCount++
            }else{
                
                let tmp = Number(collectX[i].split("x")[0]);
                xCount += tmp;  
            }
        }      
     
    let numCount =0;
    for(i=0; i<collectNum.length; i++){
        let item = collectNum[i];
        numCount+=Number(item);
    }
   
    if(xCount ===1 &&numCount ===0 ){
        answer ='x'
    }else if(xCount ===0){
        answer +=String(numCount)
    }else if(numCount ===0){
        answer +=xCount+"x"
    }else if(numCount ===0 && xCount ===0){
        answer ='0'
    }else if(xCount ===1){
        answer +='x'+' '+'+'+' '+String(numCount)
    }
    else{
        answer +=xCount+'x'+' '+'+'+' '+String(numCount)
    }
    return answer;
}