import { useState } from 'react'


function App() {
  
  const [minVal,setMinVal] = useState(0);
  const [maxVal,setMaxVal] = useState(10);
  const [randomNum,setRandomNum] = useState(5);
  const giveRandomNumber = ()=>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal +1)+minVal))
    set

  }

  return (
  <>
  
  
  
  <div className="container">
    <div className="random-number">
      Random Number : <span>{randomNum}</span>
    </div>
    <div className="max-min">
      <div className="max">
        <p>Min:</p>
        <input type="number" placeholder='min' value={minVal} 
        onChange={e=> setMinVal(+e.target.value)}/>
      </div>
      <div className="min">
        <p>Max:</p>
        <input type="number" placeholder='max' value={maxVal} onChange={e=> setMaxVal(+e.target.value)}/>
      </div>
    </div>
    <div className="button-div">
      <button onClick={giveRandomNumber}>Get Random Number</button>
    </div>
  </div>
  
  
  
  
  </>
  )
}

export default App
