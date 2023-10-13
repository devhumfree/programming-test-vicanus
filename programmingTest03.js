function factorial(n){
    if (n === 0){
      return 1; // n이 0일때 1로
    } else {
      return n * factorial(n - 1); // 한 자리씩 내려가며 계속 곱계산
    };
  };
  
  const result = factorial(4);
  console.log(result);
  