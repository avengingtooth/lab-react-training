function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props){
    const rgbValue = "rgb("+props.r+','+props.g+','+props.b+")"
    const hexValue = rgbToHex(props.r, props.g, props.b)
    return(
        <div className="boxColor" style = {{background: rgbValue}}>
            <p>{rgbValue}</p>
            <p>{hexValue}</p>
        </div>
    )
}

export default BoxColor