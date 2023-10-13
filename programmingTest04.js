function factorial(n){ // 재귀함수 메모리 누적으로 인하여 for문으로 대체
    let result = 1;
    for (let i = 1; i <= n; i++){
      result *= i;
    };
    return result;
  }
  
  const result = factorial(1000000);
  
  console.log(result);