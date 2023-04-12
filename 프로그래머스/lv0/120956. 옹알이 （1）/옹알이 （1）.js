function solution(babbling) {
    const can = ['aya','ye','woo','ma'];
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];                   
        
        for(let j = 0; j < can.length; j++){
            if(babble.includes(can[j]+can[j])){         // 같은 문자가 2번있으면 종료
                break;
            }
            
            babble = babble.split(can[j]).join(" ");
        
        }
            console.log(babble)
        if(babble.split(" ").join("").length === 0){
            count += 1;                              
        }
        
    }
   
    return count;
}


// for( let b of babbling){
//     let check = b;
//     for(let word of can){
//         check= check.replace(word, " ");
//     }
//     check = check.replaceAll(" ", "");
//     if(check ===""){
//         answer +=1;
//     }
// }