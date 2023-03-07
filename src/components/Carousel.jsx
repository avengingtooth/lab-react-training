import { useState } from "react";

function Carousel(props){
    const images = props.images
    const [count, setCount] = useState(0)
    return(
        <div className="carousel">
            <img src={images[count]} alt="carousel image" />
            <div>
                <button onClick={() => {
                    (count - 1) >= 0? setCount(count - 1): setCount(images.length - 1)
                }}>Left</button>
                <button onClick={() => {
                    (count + 1) <= images.length - 1? setCount(count + 1): setCount(0)
                }}>Right</button>
            </div>
        </div>
    )
}

export default Carousel