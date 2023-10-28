// var age=[19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//  var min_age=Math.min(...age)
//  var max_age=Math.max(...age)
//  console.log(min_age,max_age)
// //  console.log(max_age - min_age)
//  range=max_age -min_age;
//  console.log(range)
//  ABS=Math.abs(max_age,min_age)
//  console.log(ABS)
//  console.log(min_age)
//  len=age.length-1;
//  console.log(len)
//  middle=len/2;
//  integer=Math.floor(middle)
//  console.log(middle)
//  console.log(age[integer])
// var a=20;
// var b=30;


// function balu(a,b){
//     return a+b
// }
// var result=balu(10,20)
// console.log(result)


function filterWordsByLength(word) {
    const filteredWords = word.filter(word => word.length > 3);
    return filteredWords;
  }
  const wordsArray = ["apple", "cat", "dog", "banana", "elephant", "fox"];
  const result = filterWordsByLength(wordsArray);
  console.log(result);
    


//   function game(words){
//     var names=words.filter(word>=arr.length>3)
//     return names;
//   }
//  var arr=['apple','log','dad','banana','grapes']
//  var result=game(arr)
//  console.log(result)