visit your [google-activity](https://myactivity.google.com/page?hl=ko&utm_medium=web&utm_source=youtube&page=youtube_comments) and run script below.
* please delete one comment menually before run this script (for ignore pop-up overlay) 
```js
 
let proceedCount = 0;
const X_BUTTON_CLASS_PATTERN = '.TjcpUd.NMm5M'
let comments = document.querySelectorAll(X_BUTTON_CLASS_PATTERN)


const WAIT_TIME = 1000; // delay for prevent blocking
const runAndWait = (e, t) => new Promise((resolve, d)=>{
    setTimeout(()=>{
        e();
        resolve();
    }, t);
}) 
const wait = (t) => new Promise((resolve)=>{
    setTimeout(()=>{
        resolve();
    }, t)
})

const getAriaLabel = (element) => {
	const label = element.parentElement.getAttribute('aria-label');
	return label;
}
 
const deleteAllComments = async() =>{ 
  console.log('run');
if(comments.length !== 0){ 
     const current = comments[0];
     const button = current.parentElement
        if(button){ 
        await runAndWait(async ()=>{
            button.click(); 
            console.log(`${getAriaLabel(current)}...`); 
            current.remove();
            proceedCount++ 
            if(proceedCount + 1 === comments.length){  
                window.scrollTo(0, document.body.scrollHeight);
                await wait(5000); //hard coded 
            }
            comments = document.querySelectorAll(X_BUTTON_CLASS_PATTERN);
            deleteAllComments();
        }, WAIT_TIME)     
    }
}  
} 
deleteAllComments()
```
