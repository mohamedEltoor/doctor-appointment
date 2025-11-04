import React ,{useState,useEffect}from 'react'
import Api from '@/app/_utils/Api'
import Link from 'next/link'
import Image from 'next/image'
function Doctoruggestions() {

   const [doctorList, setDoctorList] = useState([])
    useEffect(()=>{
      getDoctorsList()
    },[])
  
  
  
    const getDoctorsList=()=>{
      Api.getDoctors().then(resp =>{
        console.log("doctors",resp.data.data)
        setDoctorList(resp.data.data)
      })
    }
    
  return (
    
        <div>
    
    
            <div className=' grid-cols-1 md:grid-cols-3 p-3'>
                <h1>Suggesstions</h1>
            {doctorList.slice(0, 5).map((doctor, index) => (
                      <Link href={`/details/${doctor?.documentId}`}>
                        <div key={index} className='border-[1px] rounded-lg p-3 m-3 flex '>
                            <Image  src={`${doctor?.image[0]?.url}`}
                            
                            width={150}
                            height={150}
                             alt='image'
                             className='mr-1 '
                            
                            />
                           <div className='items-baseline flex flex-col'>
                            <span className='text-lime-600 mt-3 bg-lime-200 rounded-full p-1 text-[12px] text-bold'>{doctor?.category?.name}</span>
    
                            <span className='mt-2'>  {doctor?.name}</span>
                            <span className='mt-2'>  {doctor?.year_of_experience} years Experience</span>
    
    
    
                            </div> 
                        </div>
                        </Link>
    
                    ))}
            </div>
        </div>
      )
 
}

export default Doctoruggestions