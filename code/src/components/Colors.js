import React,{useState} from 'react'
import { SketchPicker } from 'react-color'

const Colors = ({setColor,setShowColor, setShowSummary})=> {

const [mycolor, setMyColor] = useState('#ffffff')

const handlechange = (color, event)=> {
setMyColor(color.hex)
}

    return(
        <>
        <SketchPicker color={mycolor} onChange={handlechange} />
        <p><button onClick={()=> {
            setShowColor(false)
            setShowSummary(true)
            }}>Next</button>
            </p>
    </>
    )
}

export default Colors