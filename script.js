let elements = document.querySelectorAll(`.xDtZAf`);  
const wait = (t) => new Promise((resolve )=>{ setTimeout(()=>{resolve()}, t) })
const deleteComment = async (element) => {   
  const button = element.querySelector('button'); 
  button.click();
  return new Promise(async (resolve, reject)=>{
    let blcoked = false;
    let intervalCount = 0;
    const interval = setInterval(()=>{
      const newElements = document.querySelectorAll(`.xDtZAf`);  
      
      if(elements.length !== newElements.length){
         resolve();
         clearInterval(interval);
         elements = newElements;
      
        }
      else{
        if(newElements.length === 0 ) return;
        intervalCount ++;
        if(intervalCount === 50) // 5s 
          blocked = true;
        if(blocked){ 
          intervalCount = 0;
          blocked = false;
          console.log('maybe blocked, re-start process')    
          elements = newElements;
          reject();
        }
      }
    }, 100);
  });
} 
const process = async () =>{
  try{
    for(let el of elements){ 
      console.log('delete comment...'); 
      await deleteComment(el);
      console.log('deleted, wait for prevent blocking');
      await wait(2000);
    }
  }
  catch{
    process();
  }
 
}

process();
