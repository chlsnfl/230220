function solution(n){
    let result;
    let five = 0; tree==0;
    for(let i=parseInt(n/5); i>=0; i--){
        if((n-(5*i))%3==0){
            five = i;
            three = (n-(5*i))/3;
            result=five+three;
            break;
        }else{
            result = -1;
        }
    }
    return result;
}

/*가장 적은 봉투를 사용하기 위해서는 가장 많이 들어가는 5개짜리 봉투를 사용해야 함
  따라서 5개 봉투를 최대로 사용가능한 갯수를 i의 초기값으로 하고
  해당 개수에서 5개개입에 담은 나머지를 3으로 나누어 떨어지는 지를 확인
  나누어 떨어진다면 break로 계산 종료, 나누어 떨어지지 않는 다면 i를 하나 낮춰서 다시 반복*/

console.log(solution(24));
