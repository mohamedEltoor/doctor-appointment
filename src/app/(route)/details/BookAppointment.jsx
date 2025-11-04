import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from '@/components/ui/button'
  import { Calendar } from "@/components/ui/calendar"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import Api from '@/app/_utils/Api'
import { toast } from "sonner"

function BookAppointment({doctor}) {

    const [date,setDate]= useState(new Date())
    const [timeSlot,setTimeSlot] = useState()
    const[selectedTime,setSelectedTime]= useState()

    const {user} = useKindeBrowserClient()
    
    useEffect(()=>{
        getTime()
    },[])

    const booking=()=>{
        const data = {
            data:{
               userName:user.given_name+" "+user.family_name ,
               email:user.email,
               date:date,
               time:selectedTime,
               doctor:doctor.documentId,
            }
        }
      
     

        Api.bookAppointment(data).then(resp=>{
            console.log("appointment", resp);
            if(resp)
            {
                toast("Appointment Booked Successfully.")

            }
            else{

            }

        })
    }
    const pastDay=(day)=>{
        return day<=new Date()
        
    }
    const getTime=()=>{
        const timeList = []
            for(let i =10 ; i <= 12; i++){
                timeList.push({
                    time: i + ":00 AM"
                })

                timeList.push({
                    time: i + ":30 AM"
                })
            }

            for(let i =1 ; i <= 5; i++){
                timeList.push({
                    time: i + ":00 PM"
                })

                timeList.push({
                    time: i + ":30 PM"
                })
            }

            setTimeSlot(timeList)


    }
  return (
    <Dialog>
    <DialogTrigger>      <Button className="mt-3 rounded-full">Book Appointment</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Book Appointment</DialogTitle>
        <DialogDescription>
        <div className='grid grid-cols-1 md:grid-cols-2'>


            <div className='flex'>

            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={pastDay}
            />

            </div>
            <div className='mt-5 md:mt-0'>

                <div className='grid grid-cols-3 gap-3 border border-lg p-3'>
                    {timeSlot?.map((item,index)=>(
                        <h2 onClick={()=> setSelectedTime(item.time)} className={`border text-center hover:bg-lime-300 hover:text-lime-800 cursor-pointer  p-2  rounded-full ${item.time == selectedTime && "bg-lime-300" }   `}>{item.time}</h2>
                    ))}
                </div>
            </div>
      
      
        </div>
        </DialogDescription>
      </DialogHeader>
                  <Button onClick={()=> booking()} disabled={!(date&&selectedTime)}>Book Appointment</Button>  
    </DialogContent>
  </Dialog>
  
  )
}

export default BookAppointment



                // {/* عرض التاريخ والوقت المختارين */}
                // <div className='mt-4 p-3 bg-blue-50 rounded-lg text-blue-800 font-medium'>
                //     التاريخ المختار: {date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })} في الساعة {selectedTime || 'لم يتم الاختيار'}
                // </div>
            