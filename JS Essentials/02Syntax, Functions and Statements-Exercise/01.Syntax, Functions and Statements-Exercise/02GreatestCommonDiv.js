function solve(input1, input2) {

  function gcd(a, b) {
    var R;
    while ((a % b) > 0) {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
  }
  let result = gcd(input1, input2);
  console.log(result)
}
solve(15, 5)