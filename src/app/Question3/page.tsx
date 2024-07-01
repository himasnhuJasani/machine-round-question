"use client"
  import React, { useEffect, useState } from 'react'
  import "./index.css";
  
  const page = () => {

      const trafficLights = [
        {
          color: "red",
          bgColorClass: "background-red",
          next: "green",
          wait: 1500
        },
        {
          color: "yellow",
          bgColorClass: "background-yellow",
          next: "red",
          wait: 500
        },
        {
          color: "green",
          bgColorClass: "background-green",
          next: "yellow",
          wait: 1000
        }
      ];
      const [colorState,setColorState] = useState('')
    //   const startLight=()=>{
       
    //             // let index = 0;

    //             // const intervalId = setInterval(() => {
    //             //   const el = trafficLights[index];
    //             //   setColorState(el.color);
    //             //   index = (index + 1) % trafficLights.length;
    //             // }, trafficLights[index].wait);
            
    //             // return () => clearInterval(intervalId); 
    //   }
    //   useEffect(()=>{
    //     startLight()
    //   },[])
    const [activeLight, setActiveLight] = useState("green");
    const light = trafficLights.find((light) => light.color === activeLight);
    useEffect(() => {
      const timer = setTimeout(() => {
        setActiveLight(light.next);
      }, [light.wait]);
      return () => clearTimeout(timer);
    }, [active]);
    
    return (
      <div className="outer">
       {trafficLights.map((el,index)=>
           ( <div className={`inner ${el.color===activeLight && activeLight}`} key={index}></div>)
       )}
      </div>
    )
  }
  
  export default page
  // Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// function* generator(){
//     yield 10;
//     yield 20;
//     yield 30;
// }

// setTimeout(()=>{
//     console.log("timer1"); //1
//     new Promise((res,rej)=>{
//     console.log("hello")//2
//     setTimeout(()=>{console.log("innside")
//          res(10)
//     },500)//5
// //   rej(5)
//     }).then(()=>{
//      console.log("hello1")//4
//     setTimeout(()=>{console.log("innside2")},0) //6
//     throw new Error('dadsa')
//     }).catch((E)=>{
//          setTimeout(()=>{console.log("hello-catch")},0) 
//     }).finally(()=>{
//         console.log("hello-fuianl")
//     })
// console.log("ddas")//3
// },500)
// let Prom1 =new Promise((res,rev)=>{
//     rev(10)
// })
// let Prom2 =new Promise((res,rev)=>{
//     res(2)
// })
// let Prom3 =new Promise((res,rev)=>{
//     res(3)
// })
// Promise.any([Prom1, Prom2, Prom3]).then((value) => {
//   console.log(value);
//   // Both resolve, but promise2 is faster
// });
// const gen =generator();
// console.log(gen.next());

// for(var i=0; i<4; i++){
//     (function (i) {setTimeout(()=>{
//         console.log(i);
//     },0)})(i)
// }


// function abc(a,b,c,...args){}
// console.log(abc.length)

// const trial1 = [2,3,4,2];
// Array.prototype.test = function(args){
//     args.length
// }
// trial1.test(trial1)


// let i=100


// for(let i=0; i<3; i++){
//     console.log(i)
//     setTimeout(()=>console.log(i),i)
//     new Promise((res,rej)=>{
//         console.log(i)
//         res(i)}).then((res)=>console.log(i))
//      console.log(i)
// }
// console.log(i,"mhh")





//_gokwik_____________________

Shashank Koppunoori
19:33
https://codeinterview.io/DEMO-KALQPDIHHT
Shashank Koppunoori
19:56
let a = 10
let b = a
a=20
console.log(a,b)
let a = {name:'abc'}
let b = a
a.name = 'test'
console.log(a.name, b.name)
Shashank Koppunoori
20:00
let a = {name:'abc'}
let b = {...a}
a.name = 'test'
console.log(a.name, b.name)
==================================
let a = {obj1: "abc", obj2:{x:2}}
let b = {...a}
a.obj2.x = 4
console.log(a.obj2.x, b.obj2.x)
Shashank Koppunoori
20:31
function outer() {
  console.log(x); // Output:-
  var x = 10;
  function inner() {
    console.log(x); // Output:-
  }
  inner();
}
outer();
Shashank Koppunoori
20:33
console.log(1)
setTimeout(()=>console.log(2),10)
console.log(3)
Shashank Koppunoori
20:35
console.log(1)
setTimeout(()=>console.log(2),0)
const prom = Promise.resolve(3)
console.log(4)

prom.then((value) => {
  console.log(value);
});
Shashank Koppunoori
20:36
============================
console.log(1)
setTimeout(()=>console.log(2),0)
const prom = Promise.resolve(3)
console.log(4)

prom.then((value) => {
  setTimeout(()=>console.log(value),0)
});