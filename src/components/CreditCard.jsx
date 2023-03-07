import visa from '../assets/images/visa.png'
const masterCard = '/images/master-card.svg'
// import masterCard from '../assets/images/master-card.png'

function CreditCard(props){
    let hiddenCardNumber = '•••• •••• •••• '
    let expirationDate = String(props.expirationMonth)
    if (expirationDate.length < 2){
        expirationDate = '0' + expirationDate
    }
    expirationDate += '/' + String(props.expirationYear).slice(2, 4)

    let typeLogo = masterCard
    if(props.type === 'Visa'){
        typeLogo = visa
    }

    return(
        <div className="creditCard" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className="cardLogo">
                <img src={typeLogo} alt={props.type} />
            </div>
            <div className="cardNb">
                <p><span>{hiddenCardNumber}</span>{props.number.slice(props.number.length - 4, props.number.length)}</p>
            </div>
            <div className="personalInfo">
                <p>Expires {expirationDate}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard