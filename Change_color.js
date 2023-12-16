const h1=document.querySelector("h1");
const btn=document.querySelector("#change");
btn.addEventListener('click',()=>{
    const newcolor=genearate_color();
    h1.style.color=genearate_color();
    h1.innerText=newcolor;
    document.body.style.backgroundColor=newcolor;
});
function genearate_color(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
const btnn=document.querySelector("#normal");
btnn.addEventListener('click',()=>{
    h1.innerText="Back To Normal!!";
    h1.style.color=null;
    document.body.style.backgroundColor=null;
})