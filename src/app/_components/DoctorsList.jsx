import React from 'react'
import DoctorItem from './DoctorItem'
import Link from 'next/link'
function DoctorsList({doctorList , heading="Popular Doctors"}) {
  return (
    <div className='w-[90%] mx-auto'>
      <h2 className='font-bold text-xl text-lime-600'>{heading}</h2>
      <div className='grid grid-cols-1 md:grid-cols-3'>
      {doctorList.map((doctor,index) =>{
        return <Link href={`/details/${doctor?.documentId}`}><DoctorItem doctor={doctor} key={index}/></Link>
      })}
      </div>
    </div>
  )        
}

export default DoctorsList
