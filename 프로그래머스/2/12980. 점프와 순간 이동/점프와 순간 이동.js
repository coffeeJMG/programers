// 출발지점이 아닌 도착지점부터 돌아온다고 생각 => 아마 0일때의 예외를 처리하지 않아서 강점

function solution(n)
{
  let ans = 0;
    
  // n이 0보다 크다면 반복
  while(n>0){
      
   // 홀수라면 앞칸이동
   if(n%2!==0){
     n--;
     ans++
   }
    
   // 짝수라면 순간이동 
   n/=2
  }
  
    return ans;
}