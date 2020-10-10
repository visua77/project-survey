import React from 'react'

const Colors = ({setColor,setShowColor, setShowSummary})=> {
    return(
    <div className="color">
        
      <h2>Choose a color to match your mood</h2>
            <select onChange={(event) => setColor(event.target.value)}>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Red">Red</option>
            </select>

            <button onClick={()=> {
              setShowColor(false)
              setShowSummary(true)
              }}>Next</button>
    </div>
    )
}

export default Colors