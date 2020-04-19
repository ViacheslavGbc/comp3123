
let delayedSuccess = () => {
  let success = {'message': 'delayed success'}
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      
     },500)

    resolve(success)
    
    reject(new Error(`some error!`))
    })};

const delayedException = () => {
  return new Promise((resolve, reject) => {
   setTimeout(()=> {
    try{ throw new Error ('error delayed exception!');
      } 
     catch (e) 
     {
    }
   },500)
   reject(new Error ('error delayed exception!'))
  })};
 
 delayedSuccess().then((resolvedValue) => {
  console.log(resolvedValue);
},(rejectedValue) => {
  console.log(rejectedValue);
}); 

 delayedException().then((resolvedValue) => {
  console.log(resolvedValue);
}, (rejectedValue) => {
  console.log(rejectedValue);
}); 
 

