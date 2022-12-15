// import React from "react";
import {useState} from "react";
import styles from './weatherForm.module.css';

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
      <form className={styles.container} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" onChange={onChange}/>
      </form>
  )
}
