function solution(number, limit, power) {
    var answer = 0;
    let divi = 0;
    let array= [];
    
    for(cur=1; cur<=number; cur++){
        
        for(i=1; i<=cur/2; i++){
            if(cur%i ===0){
                divi++
            }
        }
        array.push(divi+1)
        divi=0;
    }
    
    const final = array.filter((i)=> i<=limit)
    
    for(i=0; i<array.length; i++){
        if(array[i]>limit){
            array[i]=power
        }
        answer+=array[i]
    }
   
    return answer;
}