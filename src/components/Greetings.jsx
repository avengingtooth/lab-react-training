let Greetings = (props) => {
    const translate = {
        de: "Hallo", 
        en: "Hello", 
        es: "Hola",
        fr: "Bonjour"
    }
    return(
        <p lang={props.lang}>{translate[props.lang]} {props.children}</p>
    )
}

export default Greetings