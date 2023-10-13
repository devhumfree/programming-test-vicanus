class Calculator { // 계산하는 클래스 생성
    constructor(){
      this.result = 0; // 초기화
    }
  
    add(value){ // 더하기
      this.result += value;
      return this;
    }
  
    subtract(value){ // 빼기
      this.result -= value;
      return this;
    }
  
    out(){ // 출력
      return this.result;
    }
  }
  
  const calculator = new Calculator();
  const result = calculator.add(4).add(5).subtract(3).out();
  console.log(result);
  