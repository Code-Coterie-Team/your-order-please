function order(words){
  let arrWords = words.split(" "); 
  arrWords.sort((a, b) => {
    // مقایسه بر اساس عدد داخل هر کلمه
    return a.match(/\d+/) - b.match(/\d+/);
  })
  
  return arrWords.join(" "); 
  
}
let words = "is2 Thi1s T4est 3a";
let result = order(words);
console.log(result); 