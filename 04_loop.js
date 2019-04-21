// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
//function numbers(){
  let numbers=[];
  let n=0;
  for(i=5;i<=15;i++){
    if(i%2==0){
      continue
    }
    numbers[n]=i;
    n++;
  }
  //return numbers;
//}


// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  // write your code here
  let i=0;
  while(i<list.length){
    list[i]+=1;
    i++;
  }
  return list;
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  // write your code here
  let even=[];
  let i=0;
  while(i<list.length){
    if(list[i]%2==0){
      even.push(list[i])
    }
    i++;
  }
  return even;
}

module.exports = {numbers, eachAddOne, onlyEven}
