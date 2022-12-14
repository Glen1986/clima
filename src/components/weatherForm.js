// import React from "react";
import {useState} from "react";

export default function WeatherForm({onChangeCity}){
  const [city, setCity] = useState('');

  function onChange(event){
    const value = event.target.value;

    if(value !== ''){
    setCity(value)
    }
  }

  function handleSubmit(event){
    event.preventDefault();
    onChangeCity(city);
    // console.log(city)
  }
  return(
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChange}/>
      </form>
  )
}
