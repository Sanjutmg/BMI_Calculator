import React, { useState } from 'react'

function Bmi() {
    const [weight,setWeight] = useState(0)
    const [height,setHeight] = useState(0)
    const [msg,setMsg] = useState("")
    const [bim,setBim] = useState("")
    let calBmi = (e) =>{
        e.preventDefault();
        if(weight===0 || height===0){
            alert('Please enter a valid weight and height')
        }
        else{
            let bmi = (weight/(height*height)*703)
            setBim(bmi.toFixed(1))

            if(bmi<25){
                setMsg('You are underweight')
            }
            else if(bmi>=25 && bmi<30){
                setMsg('You are a healthy weight')


            }else{
                setMsg('You are overweight')
            }
        }

    }

    let reload = () => {
        window.location.reload()
    }





  return (
    <div className='menu'>
    <h3>BMI Calculator</h3>
    <div className='menu2'>
    <form onSubmit={calBmi}>
        <label>Weight(lbl)</label><br/>
        <input type='text' placeholder='Enter Weight value' className='txt' value={weight} onChange={(e)=>setWeight(e.target.value)}/><br/>
        <label>Height(in)</label><br/>
        <input type='text' placeholder='Enter height value' className='txt' value={height} onChange={(e)=>setHeight(e.target.value)}/><br/>
        <button className='btn'>Submit</button>
        <br/>
        <button className='btn btn1' onClick={reload}>Reload</button>
    </form>
    <h5>Your BMI is:{bim}</h5>
    <p>{msg}</p>
    </div>

    </div>





  )
}

export default Bmi