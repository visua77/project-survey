import React, {useState} from 'react'
import './index.css'
import Colors from './components/Colors'
import { SketchPicker } from 'react-color'
import Summary from './components/Summary'

export const App = () => {

//setting state here
const [happiness,setHappiness] = useState('happy')
const [feeling, setFeeling] = useState('')
const [reason, setReason] = useState('')
const [color, setColor] = useState('#4ac29a')

const [showFeeling, setShowfeeling] = useState(true)
const [showMoodDscr, setshowMoodDescr] = useState(false)
const [showMoodDscr2, setshowMoodDescr2] = useState(false)
const [showSummary, setShowSummary] = useState(false)

const [showColor, setShowcolor] = useState(false)

const [showResult, setShowResult] = useState(false)

console.log(showColor)

const handlechange = (color, event)=> {
  setColor(color.hex)
  }

//handlesubmit
const handleSubmit1 = (e) => {
  e.preventDefault()
  setshowMoodDescr(false)
  setshowMoodDescr2(true)
}

const handleSubmit2 = (e) => {
  e.preventDefault()
  setshowMoodDescr2(false)
  setShowcolor(true)
}

const wrapperStyle = {
  
  background: `linear-gradient(to right, ${color}, #bdfff3)`
}

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className="container">
      {showResult && (
        <div className="theResult">
          <h1>Here's your result!</h1>
          <p>You are {happiness ==='happy' ? 'Super happy!' : 'Sad :('}</p>
          <p>And you are feeling {feeling}</p>
          <p>Coz of {reason}</p>
          <p>You feel {color}</p>
        </div>


      )}
      {showFeeling && (
      
        
          <div className="feelings">
            <h1>Hi there how do you feel today?</h1>
            <div className="aria-label">
            <label>
              <input
                type="radio"
                value="happy"
                onChange={() => setHappiness('happy')}
                checked={happiness === 'happy'} />
              <span role="img" aria-label="Happy face">
                😀
              </span>
            </label>

            <label>
              <input type="radio"
                value="sad"
                onChange={() => setHappiness('sad')}
                checked={happiness === "sad"} />
              <span role="img" aria-label="Sad face">
              😭
              </span>
            </label>
            <button onClick={()=> {
              setShowfeeling(false)
              setshowMoodDescr(true)
              }}>Next</button>
              </div>
          </div>
          
          
    
      )}
      {showMoodDscr && <div className="description">
      <form onSubmit={(e)=> handleSubmit1(e)}>
        <label>
            <h2>How are you feeling?</h2>
            <input placeholder="Type something..." type="text" value={feeling} onChange={(e) => setFeeling(e.target.value)} />
            </label></form>
             </div>}

      {showMoodDscr2 && <div className="description-2">
      <form onSubmit={(e)=> handleSubmit2(e)}>
        <label>
            <h2>You are feeling {feeling } why is that?</h2>
            <input placeholder="Type something..." type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
            </label></form>
        
        </div>}  


      {showColor && <><SketchPicker color={color} onChange={handlechange} />
      <p className="spacer"><button onClick={()=> {
        setShowcolor(false)
        setShowSummary(true)
        }}>Next</button>
        </p></>}    

      {showSummary && <Summary happiness={happiness} feeling={feeling} reason={reason} color={color} />}  
      
        </div>
    </div>
  )
}
