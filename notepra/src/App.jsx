import { useContext, useState } from 'react'
import './App.css'
import { Router,Route, Link,Routes } from 'react-router'
import Card from './components/Card';
import { TodoContext } from './context/TodoContext';

function App() {

const{list,handleadd,setDesc,setTitle,title,desc} = useContext(TodoContext);
  
 
  
  const handletitle = (e)=>{
setTitle(e.target.value);
  }
    const handledesc= (e)=>{
setDesc(e.target.value);
  }


  console.log(list);

  return (
    <>

   
      <div className="bg-amber-500 h-screen w-screen flex justify-center items-center ">
        <div className="flex justify-center items-center rounded-2xl shadow-sky-200 bg-amber-50 w-[110vh] h-[80vh] flex-col ">
           <Link to="/">Home</Link>
          
          
          <div className="flex justify-center  ">
            <span className='flex flex-col gap-1'>
              <input className='w-[500px] h-[30px] p-1 border-2 rounded-xl shadow-2xs' onChange={(e)=>{handletitle(e)}} placeholder='title' typeof='text' value={title} />
              <textarea className='w-[500px] h-[150px] p-1 border-2 rounded-2xl shadow-2xs ' onChange={(e)=>{handledesc(e)}} placeholder='description'  value={desc} ></textarea>
              <div className="flex justify-between p-2">
                <button className='bg-green-500  h-[40px] w-[60px] rounded-sm cursor-pointer' onClick={handleadd}>Add</button>
                
              </div>
            </span>
            
          </div>
          <ul>
              {list.map((result)=>(
              <li key={result.id}className='text-black'>
                <Link to={`/cards/${result.id}`} state={{ userData: result }}>{result.title}</Link></li>
              ))}
            </ul>
        </div>
      </div>
    </>
  )
}

export default App
