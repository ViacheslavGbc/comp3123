const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

let lowerCaseWords = (mixdArray) => {
  return new Promise(
    (resolve, reject) => {
      
    if (!Array.isArray(mixdArray)) reject(error);
        
       const mixedArray = mixdArray.filter(value => typeof value =='string');
  

    resolve(mixedArray.map(function(x)    {return x.toLowerCase();}));

})};

lowerCaseWords(mixedArray)
  .then(res => console.log(res))
  .catch(error => console.log(error));
