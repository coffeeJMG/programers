function solution(x) {
    var answer = true;
    let numArray =[];
    let sum=0;
    
    x= String(x)                        // input 을 문자열로변경
    for(i=0; i<x.length; i++){          // 자릿수를 숫자로 변환하여 배열에 추가
        numArray.push(Number(x[i]))
    }
    
    for(i=0; i<numArray.length; i++){
        sum+=numArray[i];               // 자릿수의 합
    }
    
    if(x % sum ===0){
        return true;
    }else{
        return false                
    }
    console.log(numArray)
    
}

// 문자를 자릿수 배열로 나눈 후 합을 구한다.
// x 와 구한 자릿수 합으로 나눈다.