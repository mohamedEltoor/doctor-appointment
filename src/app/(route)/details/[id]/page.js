// "use client";
// import Api from "@/app/_utils/Api";
// import React, { useEffect,use } from "react";
// import { useState } from "react";
// import DoctorDetails from "./_components/DoctorDetails";
// // import use from

// function Details({ params }) {
//     const resolvedParams = use(params); // ✅ لازم تفك الـ Promis
//   const [doctor, setDoctor] = useState();
//   useEffect(() => {
//     console.log(resolvedParams.id);
//     getDoctorById();
//   });

//   const getDoctorById = () => {
//     Api.getDoctorById(resolvedParams.id).then((resp) => {
//       console.log(resp.data.data);
//       setDoctor(resp.data.data);
//     });
//   };
//   return (
//     <div className='p-5 md:px-20'>
//       <h2 className='font-bold text-[22px]'>Details</h2>
   
//     <div className='grid md:grid-cols-4 grid-cols-1'>

//       {/* doctor details*/}
//       <div className=' col-span-3 '>
//      <DoctorDetails doctor={doctor}/>
  
//       </div>
       
//          {/* doctor suggestions
//         <div>

//           <Doctoruggestions/>
//         </div> */}
    
    
    
//     </div>
//     </div>
//   )
// }

// export default Details;

// "use client";
// import Api from "@/app/_utils/Api";
// import React, { useEffect} from "react";
// import { useState } from "react";
// import DoctorDetails from "./_components/DoctorDetails";
// // import Doctoruggestions from "./_components/Doctoruggestions";

// function Details({params}) {

//   const [doctor, setDoctor] = useState();
//   useEffect(() => {
//     console.log(params.id);
//     getDoctorById();
//   });

//   const getDoctorById = () => {
//     Api.getDoctorById(params.id).then((resp) => {
//       console.log(resp.data.data);
//       setDoctor(resp.data.data);
//     });
//   };

//   return (
//     <div className='p-5 md:px-20'>
//       <h2 className='font-bold text-[22px]'>Details</h2>
   
//     <div className='grid md:grid-cols-4 grid-cols-1'>

//       {/* doctor details*/}
//       <div className=' col-span-3 '>
//      <DoctorDetails doctor={doctor}/>
  
//       </div>
       
//          {/* doctor suggestions */}
//         {/* <div>

//           <Doctoruggestions/>
//         </div> */}
    
    
    
//     </div>
//     </div>
//   )
// }

// export default Details






"use client";
import Api from "@/app/_utils/Api";
import React, { useEffect, useState } from "react";
import DoctorDetails from "./_components/DoctorDetails";
import Doctoruggestions from "./_components/Doctoruggestions";

function Details({ params }) {
  // ✅ تفريغ الـ params باستخدام React.use()
  const unwrappedParams = React.use(params);

  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (unwrappedParams?.id) {
      getDoctorById(unwrappedParams.id);
    }
  }, [unwrappedParams?.id]); // ✅ منع التكرار

  const getDoctorById = (id) => {
    Api.getDoctorById(id).then((resp) => {
      console.log(resp.data.data);
      setDoctor(resp.data.data);
    });
  };

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Doctor details */}
        <div className="col-span-3">
          <DoctorDetails doctor={doctor} />
        </div>

        {/* Doctor suggestions */}
        <div>
          <Doctoruggestions />
        </div>
      </div>
    </div>
  );
}

export default Details;
