import { useState } from 'react';
import './App.css';

function App() {
  //Usestate funtion
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errormessage, seterrormessage] = useState("");
  
//button click in funtion
  const calculator = () => {
    const Isvalidheight = /^\d+$/.test(height); // << canditon's operator's
    const Isvalidweight = /^\d+$/.test(weight);
    if (Isvalidheight && Isvalidweight) {       // << if statement
      const heightInMeter = height / 100;
      const bmivalue = weight / (heightInMeter * heightInMeter);
      setBmi(bmivalue.toFixed(2));   // << point two value condition
      if (bmivalue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmivalue >= 18.5 && bmivalue < 25.9) {
        setBmiStatus("Normal");
      } else if (bmivalue >= 25.9 && bmivalue < 30.7) {
        setBmiStatus("Overweight");
      } else if (bmivalue >= 30.7 && bmivalue < 38.9) {
        setBmiStatus("Obese");
      } else {
        setBmiStatus("Severely Obese");
      }
      seterrormessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      seterrormessage("Please Enter Valid Numaric Aalues for Height And Weight");
    }
  };
  // clearall button function
  const Clearall = () => {
    setweight("");
    setheight("");
    setBmi(null);
    setBmiStatus("");
    seterrormessage("");
    
  };
  
  return (
    <>
      <div className='bmi-calculator'>
        <div className='box'></div>
        <div className='data'>
          <h1>Bmicalculator</h1>
   //error shot methord function
          {errormessage && <p className='error'>{errormessage}</p>}
            
          <div className='input-container'>
            <label htmlFor='height'>Height (cm): </label>
            <input type='text' value={height} id='height' onChange={(e) => setheight(e.target.value)} />
          </div>
          <div className='input-container'>
            <label htmlFor='weight'>Weight (kg): </label>
            <input type='text' value={weight} id='weight' onChange={(e) => setweight(e.target.value)} />
          </div>
  
          <button onClick={calculator}>Calcuclator</button>
          <button onClick={Clearall}>ClearAll</button>
// condition 
          {bmi !== null && (
            <div className='result'>
              <p>Your Bmi : {bmi}</p>
              <p>Ststus : {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
