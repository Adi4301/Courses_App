import React from 'react'


const Filter= (props)=>{

    let Data = props.Data;
    let setCategory = props.setCategory;

    const ClickButton = (title)=>{
          setCategory(title);
    }


    return(
        <div className='w-11/12 flex flex-wrap max-x-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
            {Data.map((filter)=>(
                <button key={filter.id} className='text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300' onClick={()=>ClickButton(filter.title)}>{filter.title}</button>

        ))}
        </div>
    )



}

export default Filter;