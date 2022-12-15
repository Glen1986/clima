// import React from "react";
import {useEffect, useState} from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

export default function WeatherApp(){
  const [weather, setWeather] = useState(null);
  useEffect(()=>{
    loadInfo();
  }, [])

  async function loadInfo(city='london'){
    try{
      const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
      const json = await request.json();
      setWeather(json)
      console.log(json)
    }catch(error){

    }

  }
  console.log(weather)
  function handleChangeCity(city){
    setWeather(null);
    loadInfo(city);
  }
  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather}/>
    </>
  );
}
