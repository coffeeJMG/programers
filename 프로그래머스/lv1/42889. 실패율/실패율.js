function solution(N, stages) {
    let answer = [];
    let data = [];
    let stagesCount = 0;
    let reachedCount = 0;
    let failureRate = 0;

  // 우선 스테이지가 1부터 N까지로 주어지니까 N을 기준으로 for문을 돌면서
    for(let i = 1; i < N+1; i++) {
      // stages배열의 길이만큼 for문을 돌면서 
        for(let j = 0; j < stages.length; j++) {
          // i가 stages[j]와 일치하는 경우, 현재 이 스테이지에 머물고 있는 경우이므로
            if(i === stages[j]) {
              // stagesCount를 +해준다.
                stagesCount++;
            }
          // i가 stages[j]와 같거나 작은 경우, 현재 이 스테이지에 도달한 경우이므로
            if(i <= stages[j]) {
              // reachedCount를 +해준다.
                reachedCount++;
            }
        }
      	// 실패율은 stagesCount / reachedCount 라고 문제에서 주어졌다.
            failureRate = stagesCount / reachedCount;
      // 이 문제를 푼 핵심 포인트 data라는 빈 배열에 stageNum과 failureRate를 넣어준다. 필요할 때 꺼내어 쓰고 싶어서 !!!!
            data.push({stageNum: i, failureRate: failureRate});
      // 이후 다시 for문을 돌아야 하므로 count들을 초기화 해준다.
            stagesCount = 0;
            reachedCount = 0;
    }
    
  // data 배열에 저 형식으로 넣은 이유는 요렇게 사용하려고 !
  // sort를 이용하여 failureRate 값을 기준으로 정렬을 해주었다.
  // 정말 좋은게 이렇게 정렬을 하고 나면 failureRate가 같은 경우
  // 문제에서 말하는대로 stageNum도 숫자가 작은 순서로 정렬되기 때문에
  // 한방에 해결을 할 수 있었다.
    data.sort((a, b) => b.failureRate - a.failureRate);
  // 이후 정렬된 data 배열을 돌면서 answer에 stageNum(스테이지번호)만 push해주었다.
    data.map((x) => answer.push(x.stageNum));

    return answer;
}
//실패율 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 앞 번호 스테이지에서 머무른 인원은 다음 스테이디 도달수에서 제외 즉 차감하여 변수에저장
// 각 스테이지별 실패율 

//  for(i=0; i<stages.length; i++){
//         let item=stages[i];
//         for(j=1 ; j<=N; j++){
//             if(item === j){
//                 count+=1;
               
//             }else{
//                 continue;
//             }
//          }
//         fail.push(count/num)
//         num-=count;
//         count=0;
//     }
    
//     console.log(fail)
//     return answer;