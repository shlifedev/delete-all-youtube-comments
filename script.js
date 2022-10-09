let elements = document.querySelectorAll(`.xDtZAf`); 
 
const deleteComment = async (element) => {  
  window.scrollTo(0, document.body.scrollHeight);
  const button = element.querySelector('button'); 
  button.click();
  return new Promise((r)=>{
    const interval = setInterval(()=>{
      const newElements = document.querySelectorAll(`.xDtZAf`);  
      if(elements.length !== newElements.length){
         r();
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
