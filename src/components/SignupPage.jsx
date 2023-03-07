import { useState } from "react"
import Greetings from './Greetings'

function SignupPage(){
    const [email, setEmail] = useState('')
    const [psw, setPsw] = useState('')
    const [nationality, setNationality] = useState('en')
    return(
        <form className="signup">
            <div className="allInputs">
                <label>
                    Email
                    <input type="text" name="email" onChange={(event) => setEmail(event.target.value)}/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" onChange={(event) => setPsw(event.target.value)}/>
                </label>
                <label>
                    Nationality
                    <select onChange={(event) => setNationality(event.target.value)}>
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </select>
                </label>
                <button>Sign Up</button>
            </div>
            <div>
                <Greetings lang={nationality}></Greetings>
                <p>Your email adress is: {email}</p>
                <p>Your email is valid</p>
            </div>
        </form>
    )
}

export default SignupPage