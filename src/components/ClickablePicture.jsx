import { useState } from 'react'

function ClickablePicture(props){
    const[count, setCouter] = useState(0)
    const images = [props.img, props.imgClicked]
    return(
        <div onClick={() => setCouter((count + 1)%2)}>
            <img src={images[count]} alt={images[count]} />
        </div>
    )
}

export default ClickablePicture
