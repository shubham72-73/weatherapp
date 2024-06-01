"use client";
import React, { useState } from "react";

import Input from "./components/Input";
import Today from "./components/Today";
import Forecast from "./components/Forecast";
import Weatherdetails from "./components/Weatherdetails";

function Home() {
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=5&aqi=yes&alerts=yes`;

  const handleSearch = async(e:React.KeyboardEvent<HTMLInputElement>) =>{
    if(e.key === 'Enter'){
      e.preventDefault();
      try{
        const response =await fetch(url);
        if(!response.ok){
          throw new Error()
        }
        const data = await response.json()
        setData(data);
        setCity("");
        setError("");
      }catch (error){
        setError("City Not Fount");
        setData({});
      }
    }
  };

  let content;
  if(Object.keys(data).length === 0 && error === ''){
    content = (
      <div className="flex justify-center text-white text-xl text-center p-40 font-bold">
        <h2>Welcome To Weather App</h2>
      </div>
    )
  } else if(error!==""){
    content = (
      <div>
        <p>City Not Found</p>
        <p>Enter a Valid City Name</p>
      </div>
    )
  } else{
    content=(
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between">
          <Today data={data}/>
          <Forecast data={data}/>
        </div>
        <div>
          <Weatherdetails data={data}/>
        </div>
      </> 
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch}
          setCity={setCity}/>
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl italic font-bold">Weather App</h1>
        </div>
        {content}
      </div>

    </div>
  )
}

export default Home;