let elements = document.querySelectorAll(`.xDtZAf`);  
const deleteComment = async (element) => {   
  const button = element.querySelector('button'); 
  button.click();
  return new Promise((resolve)=>{
    const interval = setInterval(()=>{
      const newElements = document.querySelectorAll(`.xDtZAf`);  
      if(elements.length !== newElements.length){
         resolve();
         clearInterval(interval);
         elements = newElements;
      }
    }, 100);
  });
} 
const proccess = async () =>{
  for(let el of elements){ 
    await deleteComment(el);
  }
}

proccess();
