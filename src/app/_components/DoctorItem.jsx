import React from "react";
import Image from "next/image";

function DoctorItem({ doctor }) {
  return (
    <div className="border-[1px] rounded-lg p-3 m-3">
      <Image
        src={`${doctor?.image[0]?.url}`}
        width={500}
        height={200}
        className="h-[200px] w-full object-cover "
        alt="image"
      />
      <div className="items-baseline flex flex-col">
        <h2 className="text-lime-600 mt-3 bg-lime-300 rounded-full p-2 ">
          {doctor?.category?.name}
        </h2>
        <h2 className="mt-2">
          <span className="text-lime-600">Name : </span>
          {doctor?.name}
        </h2>
        <h2 className="mt-2">
          <span className="text-lime-600">Years Of Experince : </span>
          {`${doctor?.year_of_experince}  years`}
        </h2>
        <h2 className="mt-2">
          <span className="text-lime-600">Address : </span>
          {doctor?.address}
        </h2>
        <h2 className="mt-2">
          <span className="text-lime-600">Phone : </span>
          {doctor?.phone}
        </h2>
        <h2 className="border-[1px] p-3 border-lime-600 mt-5  hover:bg-lime-300 cursor-pointer hover:scale-110 transition-all ease-in-out">
          Book Now
        </h2>
      </div>
    </div>
  );
}

export default DoctorItem;
