function solution(keyinput, board) {
    var answer = [];
    let x =0;
    let y =0;
    let rangeX =Math.floor(board[0]/2);
    
    for( i=0; i<keyinput.length; i++){
        let item = keyinput[i];           
       if( item === "left"){             
           if(Math.abs(x) <rangeX || x===rangeX){
              x--
           }
        }else if( item === "right"){
            if(Math.abs(x) < rangeX || x*-1===rangeX){
               x++
            }
        }else if( item === "down"){
            if(Math.abs(y) <Math.floor(board[1]/2) || y===Math.floor(board[1]/2)){
                y--;
            }
         }else if( item === "up"){
             if(Math.abs(y) <Math.floor(board[1]/2) || y*-1===Math.floor(board[1]/2) ){
                 y++;
             }
          }
       
    }   answer.push(x);
        answer.push(y);
    return answer;
}