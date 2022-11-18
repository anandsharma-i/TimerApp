import React, { useState } from 'react'
import {useStopwatch} from 'react-timer-hook'
import Player from './Player';

function isValid(minutes)
{
	if(minutes===20)
	{
		return (
			<div>				
                <Player/>				
			</div>);
	}
	else
	{
		return(
			<div>FOCUS</div>);
	}	
}

const Timer = () => {
    const{
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,  
    }=useStopwatch({autoStart:false})
    
    //let [isValid,setisValid]=useState(false);    

    if(seconds>5){
        //window.alert("break le lo.")                
    }  

  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
      {isValid(minutes)}
    </div>
  )
}

export default Timer
