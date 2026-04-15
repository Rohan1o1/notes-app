import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router';
import { TodoContext } from '../context/TodoContext';
import { Navigate } from 'react-router';
const Card = () => {
  const{handledelete,setEdit,setDesc,setTitle}= useContext(TodoContext)
   const location = useLocation();
   const navigate = useNavigate();
  const data = location.state?.userData;

  const onDelete = () => {
        handledelete(data.id); 
        navigate("/");          
    };
    const onEdit =()=>{
      setEdit(data.id);
      setTitle(data.title);
      setDesc(data.desc)
      navigate("/")
      
    }
  return (
   
     <div className="bg-amber-500 h-screen w-screen flex justify-center items-center ">
        <div className="flex justify-center items-center rounded-2xl shadow-sky-200 bg-amber-50 w-[110vh] h-[80vh] flex-col ">
          <Link to="/">Home</Link>
          
          <div className="flex justify-center  ">
            <span className='flex flex-col gap-1'>
              <div className='w-[500px] h-[30px] p-1 border-2 rounded-xl shadow-2xs' >{data?.title || "No Title"}</div>
              <div className='w-[500px] h-[150px] p-1 border-2 rounded-2xl shadow-2xs ' >{data?.desc || "No Description available"}</div>
              <div className="flex justify-between p-2">
                <button className='bg-green-500  h-[40px] w-[60px] rounded-sm cursor-pointer' onClick={onEdit}>Edit</button>
                <button className='bg-red-500 h-[40px] w-[60px] rounded-sm cursor-pointer' onClick={onDelete}>Delete</button>
              </div>
            </span>
            
          </div>
          <ul>
             
            </ul>
        </div>
      </div>
  )
}

export default Card