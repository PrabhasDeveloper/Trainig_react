import React from 'react'

const FBCState = () => {

    const [value, setValue] =React.useState(0);
    console.log(value);
    const changeValue=()=>{
        setValue(1000);
    } 
  return (
    <div>FBCState
        <h1>{value}</h1>
        <button onClick={changeValue}>changeValue</button>
    </div>
  )
}

export default FBCState  
