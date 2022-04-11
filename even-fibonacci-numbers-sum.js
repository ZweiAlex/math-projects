function fiboEvenSum(n) {
  let sum = 0;
  let previous = 1;

  let i = 1;
  while(i <= n){
    if(i % 2 == 0){
      sum += i
    }
    let holder = i;
    i += previous
    previous = holder;
  }
  return sum;
}
