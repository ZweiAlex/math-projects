function largestPrimeFactor(number) {
  let i = 2;
  let largestPrime = 1;
  while(i <= number)
  if(number % i === 0){
    number = number / i
    largestPrime = i;
  }else{
    i += 1
  }
  return largestPrime;
}
