function solution(arr1, arr2) {
    var answer = [[]];
    

    for(i=0; i<arr1.length; i++){       
        answer[i]=[];
       for(j=0; j<arr1[i].length; j++){
           answer[i].push(arr1[i][j]+arr2[i][j])
       }
    }
   
    return answer; 
}

// 두 배열의 같은 위치의 값들을 더해 결과로 반환한다.
