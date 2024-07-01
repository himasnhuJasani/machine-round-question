"use client"
import React, { useState } from 'react'

const page = () => {
    const [list, setList] = useState([])
    const [inputValue, setInputValue] = useState('')
    const setTodo =(inputValue) =>{
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
        const regex = new RegExp(expression);
       
        
        if (inputValue.match(regex)) {
            inputValue = `<a href=${inputValue} target='_blank'>${inputValue}</a>`
            setList([...list,inputValue] )
        //    changeToLink()
           
        } else {
          alert("No match");
        }
       

    }
    console.log("sda",list)
   
    const handleClick = (url) => {
        window.open(url, '_blank');
      };

  return (
    <div className='font-bold text-24 text-center '>
        Todo

        <input type ="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        <button onClick={()=>setTodo(inputValue)} >Submit</button>
        <ul>
          {list.map((el,index)=>
            <li key={index} dangerouslySetInnerHTML={{ __html: el }} onClick={() => handleClick(el)}/>
          )}
        </ul>
    </div>
   
  )
}

export default page
