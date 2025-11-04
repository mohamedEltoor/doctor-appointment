"use client"
import DoctorsList from "@/app/_components/DoctorsList";
import Api from "@/app/_utils/Api";
import React, { useEffect, useState } from "react";

function search({params}) {

  const [doctorList,setDoctorList] =useState([])
  
  const getDoctors = () => {
    Api.getDoctorsByCategory(params.cname)
    .then(resp => {
     console.log("doctors" ,resp.data.data);
    setDoctorList(resp.data.data)
    });
  };
  useEffect(() => {
    if (params?.cname) {
      getDoctors();
    }
  }, [params]);
  useEffect(
    () => {
    console.log(params)
    }
  )

  return <div>
    <DoctorsList heading={params.cname} doctorList={doctorList}/>
  </div>;
}

export default search;
