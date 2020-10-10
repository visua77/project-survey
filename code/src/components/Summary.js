import React from 'react'

const Summary = ({happiness, feeling, reason, color})=> {
    return(
        <div>
            <h2>Here is your summary:</h2>
            <p>Your mood is: {happiness==='happy'? <span role="img" aria-label="Happy face">
                😀
              </span>:<span role="img" aria-label="Sad face">
              😭
              </span>}</p>
            <p>You feel: {feeling}</p>
            <p>Becuase: {reason}</p>
            <p>And your current color is: {color}</p>
        </div>
    )
}

export default Summary