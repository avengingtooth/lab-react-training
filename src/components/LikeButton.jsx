import { useState } from 'react'

function LikeButton(){
    const[count, setCouter] = useState(0)
    const colors = ['purple','blue','green','yellow','orange','red']
    return(
        <button style={{backgroundColor: colors[count%colors.length]}} onClick={() => setCouter(count + 1)}>
            {count} likes
        </button>
    )
}

export default LikeButton