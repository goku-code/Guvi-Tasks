const btn=document.querySelector("button");
btn.addEventListener('click',()=>{
    document.body.style.backgroundColor="grey";
    const para=document.querySelectorAll("p");
    para[1].style.color="blue";
    para[2].style.color="green";
    para.forEach(p=>p.style.color="brown")
console.log(para[0]);});

// const para=document.querySelectorAll("p");
// para.forEach(p=>{
//     console.log(p);
// });
// const color=document.getElementById("color");
// console.log(color);

// const colo2=document.getElementsByClassName("color2");
// colo2.className.add()
// console.log(colo2);
