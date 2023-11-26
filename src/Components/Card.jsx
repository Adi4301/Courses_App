import React from 'react';
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props)=>{
    let course = props.course;
    let liked= props.liked;
    let setlikedCourses = props.setlikedCourses;
 

    const ClickToast = ()=>{
        if(liked.includes(course.id))
        {
            setlikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)));
            toast.warning("liked removed");
        }
        else{
            if(liked.length===0)
            {
                setlikedCourses([course.id]);
            }
            else{
                setlikedCourses((prev)=> [...prev,course.id]);
            }
            toast.success("liked added");

        }
    }






    return(
    <div className='w-[300px] overflow-hidden rounded-md bg-opacity-80 bg-black mx-4 my-3 px-2 py-3'>
        <div className='relative'>
            <img src={course.image.url} alt='error' />
            <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
               <button onClick={ClickToast}>
                   {
                    !liked.includes(course.id)?(<FcLikePlaceholder fontSize="1.5rem"/>):(<FcLike fontSize="1.5rem"/>)
                   }
               </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='text-white mt-2'> 
                {
                    course.description.length>100?(course.description.substring(0,100)+"...."):(course.description)
                }
            </p>
        </div>

    </div>
    )

    

}
export default Card;