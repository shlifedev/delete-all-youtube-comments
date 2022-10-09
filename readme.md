visit your [google-activity](https://myactivity.google.com/page?hl=ko&utm_medium=web&utm_source=youtube&page=youtube_comments) and run script below.
* please delete one comment menually before run this script (for ignore pop-up overlay)

```js
const WAIT_TIME = 1000;

const runAndWait = (e, t) => new Promise((resolve, d)=>{
    setTimeout(()=>{
        e();
        resolve();
    }, t);
}) 
const deleteAllComments = async() =>{
let boxes = document.querySelectorAll(".TjcpUd.NMm5M")
for(let box of boxes){
    const button = box.parentElement;
    if(button){
        await runAndWait(()=>{
            button.click();
        }, WAIT_TIME)     
    }
}
    
} 
deleteAllComments()
```
