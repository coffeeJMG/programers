function solution(t, p) {
    var answer = 0;
    
    let newArray=[];
    let str = '';
    
    
    for(i=0; i<t.length; i++){
         for(j=i; j<i+p.length; j++){
          if(isNaN(t[j])===false){
                  str+=t[j]
            }
          }
          if(str.length===p.length){
                newArray.push(str)
                str=''
          }else{
              str=''
          }
        
      }
      
      for(i=0; i<newArray.length; i++){
          if(Number(newArray[i])<=Number(p)){
              answer ++
          }
      }
     console.log(newArray)
       return answer;
}





// 1. t를 p 의 문자열길이만큼 자른다.
// 2. 각 원소들이  p보다 작은 지 확인
