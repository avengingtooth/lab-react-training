import Rating from "./Rating"

function DriverCard(props){
    return(
        <div className="driverCard" key={props.name}>
            <div>
                <img src={props.img} alt="pfp" />
                <div>
                    <h1>{props.name}</h1>
                    <Rating>{props.rating}</Rating>
                    <p>{props.car.model} {props.car.licensePlate}</p>
                </div>
            </div>
        </div>
    )
}

export default DriverCard