const clock = document.querySelector("h3");

function getclock(){
    const today = new Date();
    const hour = String(today.gethour()).padStart(2,"0");
    const min = String(today.getMinutes()).padStart(2,"0");
    const sec = String(today.getSeconds()).padStart(2,"0");
    clock.innerHTML = hour+':'+min+':'+sec;
}