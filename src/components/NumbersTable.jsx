function NumbersTable(props){
    const numbers = []
    let i = 1
    while (i <= props.limit){
        numbers.push(i)
        i++
    }
    return(
        <div className="sqrCont">
        {        
            numbers.map(val => {
                return(
                    <div className="sqr" style={{backgroundColor: val%2?'white':"red"}}>
                        <p>{val}</p>
                    </div>
            )
        })
        }
        </div>
    )
}

export default NumbersTable