let strObject = {
    
    one : "1",
    two : "2",
    three : "3",
    four : "4",
    five : "5",
    six : "6",
    seven : "7",
    eight : "8",
    nine : "9",
    zero : "0"
}


function solution(s) {
    let str = "";
    var answer = "";
    
    for (let i=0; i<s.length; i++){
        
          let item = s[i]
          console.log(item,`${i} 번째`)
          if(Number(item) || item ==="0"){
              
              answer +=item
          }else {
                
          str +=item
        
            for( value in strObject){
              
                if ( value === str){
                     console.log("일치")
                     answer += strObject[value]
                     str ="";
                  }
               }
          
             }
          }
          
    
  
    return Number(answer);
}


// 문자열을 누적하면서 strObject 에 있는 지 확인


