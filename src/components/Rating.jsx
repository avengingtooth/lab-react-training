function Rating(props){
    let stars = []
    let roundedRating = Math.round(props.children)
    for (let i = 0; i < 5; i ++){
        if (roundedRating > i){
            stars.push(1)
        }
        else{
            stars.push(0)
        }
    }
    return(
        <>
            <div className="rating">
                {
                stars.map((bgShow, ind) => {
                    if (bgShow){
                        return(<span key={ind}>★</span>)
                    }
                    else{
                        return(<span key={ind} >☆</span>)
                    }
                        
                })
                }
            </div>
        </>
    )
}

export default Rating