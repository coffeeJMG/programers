function solution(polynomial) {
    var answer = '';
    let newArray = polynomial.split(" ");  // 우선 문자열을 배열로 전환
    let collectX=[];                       // x 계수 모음
    let collectNum=[];                     // 상수 모음 
    
        console.log(newArray)            // newArray 출력 [ '3x', '+', '7', '+', 'x' ]
    for(i=0; i<newArray.length; i++){
        let item = newArray[i];
        
        if(item ==='+'){                // +는 따로 더하지 않고 다음 순서로 넘긴다.
             continue;        
        }else if(item.includes('x')){   // i번째 값이 x라면
            collectX.push(item);        // collectX에 추가
        }else{
            collectNum.push(item);      // 숫자라면 collectNum 에 추가
        }
       }
        console.log(collectX)           // [ '3x', 'x' ]
        console.log(collectNum)         // [ '7' ]
        let xCount =0;                          // x의 계수를 세기 위한 변수
        for(i=0; i<collectX.length; i++){     
            if(collectX[i] ==='x'){        // 그냥 x 즉 계수가 1 이면 
                xCount++                   // xCount ++
            }else{
                
                let xNum = Number(collectX[i].split("x")[0]);  // 1이아닌 계수라면 문자 '3x'를 x를 기준으로
                xCount += xNum;                                // 배열로 전환해 숫자로 바꾸면 [3,x]로 배열이 나누어짐
            }                                                  // 해당 배열의 0번째는 계수이고 이를 xCoun++ 에더함
        }      
     
    let numCount =0;                        // 상수 변수
    for(i=0; i<collectNum.length; i++){
        let item = collectNum[i];
        numCount+=Number(item);             // 상수는 그냥  '7'을 숫자로 바꾸어 더해준다.
    }
   
    if(xCount ===1 &&numCount ===0 ){       // 만약 상수가 0이고 x의 계수가 1이면 정답은 x
        answer ='x'
    }else if(xCount ===0){                  // x의 계수가 없다면
        answer +=String(numCount)           // 그냥 상수가 정답
    }else if(numCount ===0){                // 상수가 없다면
        answer +=xCount+"x"                 // xCount와 문자'x'를 더한다.
    }else if(numCount ===0 && xCount ===0){ // 둘다 0이면 0
        answer ='0'
    }else if(xCount ===1){                  // x의 계수가 1이고 상수항이 있다면
        answer +=`x + ${numCount}`   // 정답 형식에 맞게 문자열 출력 (공백포함)
    }
    else{                                      // 2이상의 x계수와 상수가 있다면
        answer += `${xCount}x + ${numCount}`   // 정답 형식에 맞게 문자열 출력 (공백포함)
    }
    return answer;
}