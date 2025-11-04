"use client";
import Image from "next/image";
import Section from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorsList from "./_components/DoctorsList";
import Api from "./_utils/Api";
import { useEffect, useState } from "react";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorsList();
  }, []);

  const getDoctorsList = () => {
    Api.getDoctors().then((resp) => {
      console.log(resp.data.data);
      setDoctorList(resp.data.data);
    });
  };

  return (
    <div>
      <Section />
      <CategorySearch/>
      <DoctorsList doctorList={doctorList} />
    </div>
  );
}
