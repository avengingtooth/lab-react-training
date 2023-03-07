function Random(props){
    return(
        <p className="random">Random value between {props.min} and {props.max} ={">"} {Math.round(Math.random()*(props.max - props.min + 1) + props.min)}</p>
    )
}

export default Random