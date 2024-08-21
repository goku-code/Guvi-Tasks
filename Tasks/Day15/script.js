// function sum(a,b){
//     return a+b;
// }
// function display(sum){
//     console.log("sum is ",sum);
// }
// function add(a,b,sum,display){
//     return display(sum(a,b))
// }

// add(5,20,sum,display);

// a=[10,4,65,32,3]

// function forEach(a,callback){
//     for(let i=0;i<a.length;i++){
//         callback(a[i],i)
//     }
// }

// forEach(a,(e,index)=>{
//     console.log(index,e);
// })

var div=document.getElementById("root")
setTimeout(()=>{

div.innerText="10";
setTimeout(()=>{

    div.innerText="9";
setTimeout(()=>{

    div.innerText="8";
    setTimeout(()=>{
 
        div.innerText="7";
        setTimeout(()=>{

            div.innerText="6";
            setTimeout(()=>{
                div.innerText="5";
                setTimeout(()=>{
                    div.innerText="4";
                setTimeout(()=>{
                    div.innerText="3";
                    setTimeout(()=>{
                        div.innerText="2";
                        setTimeout(()=>{
                            div.innerText="1";
                            setTimeout(()=>{
                                div.innerHTML="<h2><b>Happy Independence Day!!</h2></b>";
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    },1000)
},1000)
