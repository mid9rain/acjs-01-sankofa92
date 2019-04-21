// 輸入會是一個數字的陣列，回傳一個新的陣列，保持原來的數字，除了以下幾種：
// 3 的倍數要換成 Fizz
// 5 的倍數要換成 Buzz
// 又是 3 又是 5 的倍數要換成 FizzBuzz

// 例如   [1, 2, 3, 4, 5]
// 會回傳 [1, 2, Fizz, 4, Buzz]

function fizzBuzz(input) {
  // 把你的解答寫在這裡。要記得 return 喔。
  let result='';
  for(n=1;n<=input;n++){
    if (n>1){
      result+=' '
    }  
    if (n %3==0 && n %5==0){
      result+='FizzBuzz'
    }
    else if (n %3==0){
      result+='Fizz'
    }
    else if (n %5==0){
      result+='Buzz'
    }
    else {
      result+=n
    }
  }
  return result;
}
module.exports = {fizzBuzz};
