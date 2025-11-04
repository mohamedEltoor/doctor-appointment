// import React from 'react'
// import Image from 'next/image'
// import { GraduationCap, MapPin } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// // import BookAppointment from '../BookAppointment'
// function DoctorDetails({doctor}) {
  
//   return (
//     <>
//     <div className=' border-[1px] p-5 rounded-lg  grid grid-cols-1 md:grid-cols-3'>
//     {/* doctor image*/}
//     <div>
//    <Image src={`http://localhost:1337/${doctor?.image[0]?.url}`}
//     width={600}
//     height={600}
//     alt='image'
//     className='rounded-lg  '
//    />
        
//     </div>
    
//      {/* doctor info*/}
//     <div className=' md:px-10 col-span-2 flex flex-col gap-4 items-baseline'>
//       <h2 className='font-bold text-2xl mt-7'>{doctor?.name}
       
//       </h2>

//       <h2 className='flex gap-2 text-gray-500'>
//       <GraduationCap/>
//       <span>{doctor?.year_of_experience} Years Of Experience</span>
//       </h2>

//       <h2 className='flex gap-2 text-gray-500'>
//       <MapPin/>
//       <span>{doctor?.address} </span>

//       </h2>

//       <h2 className='bg-lime-200 text-lime-800 rounded-full text-[10px] p-2'>{doctor?.category?.name}</h2>

//       {/* <BookAppointment doctor={doctor}/>
   
//        <div>
        
//         <h1 className='text-[25px] font-bold'>About</h1>
//         <p className='text-gray-500'> {doctor?.about}</p>
//         </div>  */}

//     </div>

//     </div>
    
    
    
//    </>
//   )
// }

// export default DoctorDetails

import React from 'react'
import Image from 'next/image'
import { GraduationCap, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import BookAppointment from '../../BookAppointment'

function DoctorDetails({ doctor }) {

  // ✅ المنطق لحل مشكلة الصورة
  const imageUrl = doctor?.image?.[0]?.url
    ? doctor.image[0].url.startsWith('http')
      ? doctor.image[0].url
      : `http://localhost:1337${doctor.image[0].url}`
    : '/default.png'; // لو مفيش صورة

  return (
    <>
      <div className='border-[1px] p-5 rounded-lg grid grid-cols-1 md:grid-cols-3'>
        {/* doctor image */}
        <div>
          <Image
            src={imageUrl}
            width={600}
            height={600}
            alt='image'
            className='rounded-lg'
          />
        </div>

        {/* doctor info */}
        <div className='md:px-10 col-span-2 flex flex-col gap-4 items-baseline'>
          <h2 className='font-bold text-2xl mt-7'>{doctor?.name}</h2>

          <h2 className='flex gap-2 text-gray-500'>
            <GraduationCap />
            <span>{doctor?.year_of_experince} Years Of Experience</span>
          </h2>

          <h2 className='flex gap-2 text-gray-500'>
            <MapPin />
            <span>{doctor?.address}</span>
          </h2>

          <h2 className='bg-lime-200 text-lime-800 rounded-full text-[10px] p-2'>
            {doctor?.category?.name}
          </h2>

          
          <BookAppointment doctor={doctor}/>
          <div>
            <h1 className='text-[25px] font-bold'>About</h1>
            <p className='text-gray-500'>{doctor?.about}</p>
          </div>  
         
        </div>
      </div>
    </>
  )
}

export default DoctorDetails








// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { GraduationCap, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// // import BookAppointment from '../BookAppointment'

// function DoctorDetails({ doctor }) {
//   if (!doctor) return null;

//   // ✅ التعامل مع اختلاف شكل البيانات (attributes أو مباشرة)
//   const data = doctor?.attributes || doctor;

//   // ✅ مسار الصورة الصحيح
//   const imageData = data?.image?.[0];
//   const imageUrl = imageData?.url
//     ? imageData.url.startsWith("http")
//       ? imageData.url
//       : `http://localhost:1337${imageData.url}`
//     : "/default.png";

//   return (
//     <>
//       <div className='border-[1px] p-5 rounded-lg grid grid-cols-1 md:grid-cols-3'>
//         {/* doctor image */}
//         <div>
//           <Image
//             src={imageUrl}
//             width={600}
//             height={600}
//             alt='image'
//             className='rounded-lg'
//           />
//         </div>

//         {/* doctor info */}
//         <div className='md:px-10 col-span-2 flex flex-col gap-4 items-baseline'>
//           <h2 className='font-bold text-2xl mt-7'>{data?.name}</h2>

//           <h2 className='flex gap-2 text-gray-500'>
//             <GraduationCap />
//             <span>{data?.year_of_experience} Years Of Experience</span>
//           </h2>

//           <h2 className='flex gap-2 text-gray-500'>
//             <MapPin />
//             <span>{data?.address}</span>
//           </h2>

//           <h2 className='bg-lime-200 text-lime-800 rounded-full text-[10px] p-2'>
//             {data?.category?.name}
//           </h2>

//           {/* <BookAppointment doctor={data}/> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default DoctorDetails;
