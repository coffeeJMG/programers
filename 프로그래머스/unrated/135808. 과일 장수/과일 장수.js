function solution(k, m, score) {
    var answer = 0;
    let box =[];
    
    score.sort((a,b)=> b-a)                 // 크기를 기준으로 자르기 위해 내림차순
    
    for(i=0; i<score.length; i+=m){         // i 를 0부터 잘라야하는 m의 길이만큼 증가 
        box.push(score.slice(i,i+m))        // i부터 갯수인 m-1만큼 새 배열에 반환
    }
    
    for(i=0; i<box.length; i++){
        if(box[i].length===m){                // box의 j번째 배열의 길이가 m과 같다면 (같지 않으면 버리니까)
            answer+=box[i][m-1]*m             // box의 j번째에 최솟값 m-1 * 사과의 수 m
        }
    }
    
    console.log(box)
    return answer;
}
// 배열의 큰 순서대로 m 개만큼 자른다.

// 총 상자의 개수는 Math.floor(score.length/4) 
// [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]
// [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]

//