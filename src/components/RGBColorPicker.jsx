import { useState } from "react"

function RGBColorPicker(){
    const [rValue, setRed] = useState(255)
    const [gValue, setGreen] = useState(255)
    const [bValue, setBlue] = useState(255)
    return(
        <div className="rgbColorPickers">
            <div>
                <div className="colorPicker" style={{backgroundColor: `rgb(${rValue}, 0, 0)`}}></div>
                <p>R: </p>
                <input value={rValue} type='number' min="0" max="255" onChange={(event) => {setRed(event.target.value)}}/>
            </div>
            <div>
                <div className="colorPicker" style={{backgroundColor: `rgb(0, ${gValue}, 0)`}}></div>
                <p>G: </p>
                <input value={gValue} type='number' min="0" max="255" onChange={(event) => {setGreen(event.target.value)}}/>
            </div>
            <div>
                <div className="colorPicker" style={{backgroundColor: `rgb(0, 0, ${bValue})`}}></div>
                <p>R: </p>
                <input value={bValue} type='number' min="0" max="255" onChange={(event) => {setBlue(event.target.value)}}/>
            </div>

            <div>
                <div className="colorPicker" style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
                <p>{`(${rValue}, ${gValue}, ${bValue})`}</p>  
            </div>
            
        </div>
    )
}

export default RGBColorPicker