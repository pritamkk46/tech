let x=document.getElementById("exus")
let y=document.getElementById("bars")

y.addEventListener("click",()=>{

    if(x.style.display=="none"){
        x.style.display="block"
        
    }
    else{
        x.style.display="none"
        
    }
})
window.addEventListener("resize",()=>{
    if(window.innerWidth>950){
        x.style.display="none"
    }
})


let a=document.getElementById("button1")
let b=document.getElementById("button2")
let c=document.getElementById("button3")
let d=document.getElementById("button4")
let e=document.getElementById("button5")
let s=document.getElementById("ab")
let t=document.getElementById("bc")
let u=document.getElementById("cd")
let v=document.getElementById("de")
let w=document.getElementById("ef")

let p=document.getElementById("dec")
let q=document.getElementById("inc")
let r=document.getElementById("scrol")

p.addEventListener("click",()=>{
    r.scrollBy(-200,0)
   
})
q.addEventListener("click",()=>{
    r.scrollBy(200,0)
})
a.addEventListener("click",()=>{
    s.style.display="block"
    t.style.display="none"
    u.style.display="none"
    v.style.display="none"
    w.style.display="none"
    
})
b.addEventListener("click",()=>{
    t.style.display="block"
    s.style.display="none"
    u.style.display="none"
    v.style.display="none"
    w.style.display="none"
    
})
c.addEventListener("click",()=>{
    u.style.display="block"
    t.style.display="none"
    s.style.display="none"
    v.style.display="none"
    w.style.display="none"
})
d.addEventListener("click",()=>{
    v.style.display="block"
    s.style.display="none"
    t.style.display="none"
    u.style.display="none"
    w.style.display="none"
    
})
e.addEventListener("click",()=>{
    w.style.display="block"
    s.style.display="none"
    t.style.display="none"
    u.style.display="none"
    v.style.display="none"
    
})
