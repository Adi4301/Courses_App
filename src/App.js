import './App.css';
import Filter from './Components/Filter';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import { useEffect, useState } from 'react';
import { Data,Apiurl } from './Components/data';
import { toast } from 'react-toastify';
import Spinner from './Components/Spinner';

function App() {

  const[courses,setCourses] = useState(null);
  const[loading,setLoading] = useState(true);
  const[category,setCategory] = useState(Data[0].title);

    async function fetchdata(){
      setLoading(true)
      try{

        let res = await fetch(Apiurl);
        let output = await res.json();
        setCourses(output.data);

      }
      catch(error)
      {
        toast.error("something went wrong");

      }
      setLoading(false);
    }

    useEffect(()=>{
      fetchdata();
    },[])

  return(
  <div className='min-h-screen flex flex-col'>
    <div className='text-white'>
      <Navbar />
    </div>
    <div className='bg-gray'>
      <div>
        <Filter Data={Data} category={category} setCategory={setCategory}/>
      </div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
        {loading?(<Spinner/>):(<Cards courses = {courses} category={category}/>)}
      </div>
    </div>

  </div>
  );
  




}

export default App;
