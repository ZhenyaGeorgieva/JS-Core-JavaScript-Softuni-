function solve(input) {
  let firstArr = [];
  let lastArr = [];
  let k = input.shift();

  for (let index = 0; index < k; index++) {
    let num = input[index];
    firstArr.push(num);
  }

  for (let index = input.length - k; index < input.length; index++) {
    let num = input[index];
    lastArr.push(num);
  }
  console.log(firstArr.join(" "));
  console.log(lastArr.join(" "));
}
solve([2, 7, 8, 9])