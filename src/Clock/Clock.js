import React, { useEffect, useState } from "react";
export function Clock() {
  const [date, setDate] = useState(new Date());
  let timerId;

  function padStartDigit(digit) {
    return digit.toString().padStart(2, "0");
  }

  useEffect(() => {
    timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  });

  return (
      <>
      <span>{padStartDigit(date.getHours())}: </span>
      <span>{padStartDigit(date.getMinutes())}: </span>
      <span>{padStartDigit(date.getSeconds())}</span>
    </>
  );
}

export function TimerMode(){
  let [Test,setTest]=useState(<Clock />)
  let [count,setTest2]=useState(0)
  function ok(e){
      e.preventDefault();
      if(count===0){
          setTest2(1);
          setTest(<Minuteur />)
          console.log(count);
      }
      if(count===1){
          setTest2(0)
          setTest(<Clock />)
          console.log(count);
      }
  }
  return(<>
      {Test}
      <button id="timer" onClick={ok}>Change</button>
      </>
  )
}
export function Minuteur(){
  let [put,setPut]=useState(<InputField />)
  let timer={
      lancer(e){
        e.preventDefault()
          setPut(<Decrementer />)
      },
      reset(){
        setPut(<InputField />)
      }
  }
  return(
    <>
    {put}
    
    <button className="btn-lancer" onClick={timer.lancer}>Start</button>
    <button className="btn-reset" onClick={timer.reset}>reset</button>
    </>
  )
}
function InputField(){
  let take={
    second(e){
      e.preventDefault()
      second=e.target.value;
    },
    minutes(e){
      e.preventDefault()
      minute=e.target.value;
    },
    hour(e){
      e.preventDefault()
      hour=e.target.value;
    }
  }
    return(
      <span className="minuteur">
    <input maxLength={2} /*id="heur"*/ placeholder="00" onInput={take.hour}></input>/
    <input placeholder="00" maxLength={2} /*id="minute"*/ onInput={take.minutes}></input>/
    <input placeholder="00" maxLength={2} /*id="seconde"*/ onInput={take.second}></input>
    </span>
    )
}
//variable
let hour=0;
let minute=0;
let second=0;
//variable
function Decrementer(){
    let [h,setH]=useState(hour);
    let [m,setM]=useState(minute);
    let [s,setS]=useState(second)
    let test;

    useEffect( ()=>{test = setInterval(()=>{
      setS(s-1)
      if(s<1){
        if(m!==0){
        setM(m-1)
      }
        setS(59)
      }
      if(m<0){
        if(h!==0){
        setH(h-1)
        setM(59)
        setS(59)
      }
      if(s===0&&m===0&&h===0){
        setH(0)
        setM(0)
        setS(0)
      }
      }
    },1000);
  return ()=>{clearInterval(test)}})
   function stoper(){
     clearInterval(test);
   }
    return (
      <>
        <span>{h.toString().padStart(2, "0")}</span>/
        <span>{m.toString().padStart(2, "0")}</span>/
        <span>{s.toString().padStart(2, "0")}</span>

        <button className="btn-stop" onClick={stoper}>stop</button>
      </>
    )
}