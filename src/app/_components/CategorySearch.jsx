"use client"
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import Api from '../_utils/Api'
import Image from 'next/image'
import Link from 'next/link'

function CategorySearch() {

    const [categoryList,setCategoryList] = useState([]);

    useEffect(() =>{
        getCategoryList()
    },[])
  
    const getCategoryList = () => {
     Api.getCategory().then(resp => {
        setCategoryList(resp.data.data)
        console.log(resp.data.data)
     })
    }


  return (
    <div className='mb-10 items-center flex flex-col'>
        <h2 className='font-bold text-4xl mb-7'><span className='text-lime-600'>Search</span>Categories</h2>
        <div className='flex max-w-sm items-center'>
        <Input type="search" placeholder="Search Categories"/> 
        <Button type="submit">Submit</Button>
        </div>
        <div className='grid  md:grid-cols-3 sm:grid-cols-1 mt-8'>

         {categoryList.map((category,index) =>(
          <Link href={`/search/${category.name}`} key={index}>
            <div  className='flex flex-col text-center items-center p-5 bg-lime-200 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'>
                <Image src={`${category?.icon?.url}`}
                    width={70}
                    height={70}
                    alt={category.name}
                />
                <label>{category?.name}</label>
                </div>
          </Link>
          

            

         ))}
           </div>
    </div>
  )
}

export default CategorySearch



// "use client"
// import React, { useEffect, useState } from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import Api from '../_utils/Api'
// import Image from 'next/image'
// import Link from 'next/link'

// function CategorySearch() {
//   const [categoryList, setCategoryList] = useState([])

//   useEffect(() => {
//     getCategoryList()
//   }, [])

//   // const getCategoryList = () => {
//   //   Api.getCategory().then(resp => {
//   //     setCategoryList(resp.data.data)
//   //     console.log(resp.data.data)
//   //   })
//   // }


//   const getCategoryList = () => {
//   console.log("🔄 Fetching categories...") // تأكيد بداية الفنكشن
//   Api.getCategory()
//     .then(resp => {
//       console.log("✅ Response:", resp)
//       setCategoryList(resp.data.data)
//     })
//     .catch(err => {
//       console.error("❌ API Error:", err)
//     })
// }
//   return (
//     <div className='mb-10 items-center flex flex-col'>
//       <h2 className='font-bold text-4xl mb-7'>
//         <span className='text-lime-600'>Search</span> Categories
//       </h2>

//       <div className='flex max-w-sm items-center'>
//         <Input type="search" placeholder="Search Categories" />
//         <Button type="submit">Submit</Button>
//       </div>

//       <div className='grid md:grid-cols-3 sm:grid-cols-1 mt-8'>
//         {categoryList.map((category, index) => {
//           const attr = category.attributes
//           const imageUrl = attr?.icon?.data?.attributes?.url
//             ? `http://localhost:1337${attr.icon.data.attributes.url}`
//             : '/placeholder.png' // لو مفيش صورة
          
//           return (
//             <Link href={`/search/${attr.name}`} key={index}>
//               <div className='flex flex-col text-center items-center p-5 bg-lime-200 m-2 rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer'>
//                 <Image
//                   src={imageUrl}
//                   width={70}
//                   height={70}
//                   alt={attr.name}
//                 />
//                 <label>{attr.name}</label>
//               </div>
//             </Link>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default CategorySearch
