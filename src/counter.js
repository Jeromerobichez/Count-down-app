import { render } from '@testing-library/react';
import {react, useEffect, useState} from 'react'
import './App.css'
import Fete from './fete.jpeg'


const Counter = () => {
    const [time, setTime] = useState({
        weeks: 0,
        totalDays: 0,
        days: 0,
        hours: 2,
        min: 17,
        sec: 36
    })
    const [display, setDisplay] = useState('flex')

     useEffect(() => {

const intervalId = setInterval(() => {

     getRemainingTime()

    
}, 1000);
return () => clearInterval(intervalId)
    }, [time]) 

    const handleClick = () => {
       if(display === 'none') {
        setDisplay('flex')
       }
       else {
        setDisplay('none')
       }
       
        console.log('display cest :', display)
    }
    const now = new Date().getTime();

const countDownPoint = new Date('October 23, 2022').getTime();

const difference = (countDownPoint - now)

const Weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7))
const Days = Math.floor(difference % (1000 * 60 * 60 * 24 *7) / (1000 * 60 * 60 * 24 ))
const daysTotal = Math.floor(difference / (1000 * 60 * 60 * 24  ))
const entierHours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const entierMinutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60 ))
const entierSeconds = Math.floor(difference % (1000 * 60 ) / 1000 )


console.log('daysTotal: ', daysTotal )
console.log('totalDays :',time.totalDays)

const getRemainingTime = () => {

    setTime({sec : entierSeconds, min: entierMinutes, hours: entierHours, totalDays: daysTotal,days: Days , weeks: Weeks })

 
}


return (
    <div>
        <img className='fete'src={Fete} alt='bébé' style={{display: display}}/>
    <div>il reste <span className='numbers'>{time.totalDays} </span> <span className='time-cat'>jour(s) </span>  <span  className='numbers'>{time.hours}</span> <span className='time-cat'> heures</span>, <span className='numbers'>{time.min}</span><span className='time-cat'> minutes </span> et <span className='numbers'>{time.sec}</span>  <span className='time-cat'>secondes</span></div>
    <div>Soit : <span className='numbers'>{time.weeks} </span> <span className='time-cat'>semaines</span>
    <span className='numbers'>{time.days} </span> <span className='time-cat'>jour(s)</span>
      <span  className='numbers'>{time.hours}</span> <span className='time-cat'> heures</span>, <span className='numbers'>{time.min}</span><span className='time-cat'> minutes </span> et <span className='numbers'>{time.sec}</span>  <span className='time-cat'>secondes</span></div>

    <button className='button-counter' onClick={handleClick}><p >Avant le gros évènement !</p></button>
    </div>
)
}

export default Counter;
