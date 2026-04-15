import React, { useEffect } from 'react'
import { useState } from 'react'
import { TodoContext } from './TodoContext'

const TodoProvider = ({children}) => {

    const [list,setList] = useState(()=>{
      const saved = localStorage.getItem("todo");
      return saved?JSON.parse(saved):[]
    });
    
    const [edit,setEdit] = useState(null);
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    
       


     useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(list))
    },[list])

    const handleadd = ()=>{
        if(edit !== null){
            const updatelist = list.map((item)=>
                item.id === edit?{...item,title,desc}:item
        )
        setTitle("")
   setDesc("")
      setList(updatelist)
      setEdit(null);
     
    }
        else{
setList([...list,{title,desc,id:Date.now()}])

 setTitle("")
   setDesc("")
        }
   
  
       }

   const handledelete =(id)=>{
    const newlist = list.filter((index)=>index.id !== id
    )
  setList(newlist)
  console.log(id)
  console.log(newlist)
}
    
    

 
  return (
    <TodoContext.Provider value={{list,desc,title,edit,handleadd,handledelete,setDesc,setEdit,setTitle}}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider