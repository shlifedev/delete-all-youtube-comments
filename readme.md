visit your [google-activity](https://myactivity.google.com/page?hl=ko&utm_medium=web&utm_source=youtube&page=youtube_comments) and run script below.
* please delete one comment menually before run this script (for ignore pop-up overlay) 
```js

const WAIT_TIME = 450; // delay for prevent blocking
const runAndWait = (e, t) => new Promise((resolve, d)=>{
    setTimeout(()=>{
        e();
        resolve();
    }, t);
}) 
const deleteAllComments = async() =>{
let boxes = document.querySelectorAll(".TjcpUd.NMm5M")
if(boxes.length !== 0){
     const button = boxes[0].parentElement
        if(button){
        window.scrollTo(0, document.body.scrollHeight);
        await runAndWait(()=>{
            button.click();
            deleteAllComments();
        }, WAIT_TIME)     
    }
}  
} 
deleteAllComments()
```
