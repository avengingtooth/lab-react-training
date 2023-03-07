import {useState} from 'react'

function Dice(){
    const [dice, setDice] = useState("dice-empty.png")
    return(
        <div>
            <img className='dice' src={dice} alt='maxence-glasses.png' onClick={() => {
                setDice("dice-empty.png")
                setTimeout(() => {setDice(`dice${Math.round(Math.random()*5)}.png`)}, 1000)
            }}/>
        </div>
    )
}

export default Dice