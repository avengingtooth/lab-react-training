import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook(){
    const [visCountries, setCountries] = useState('')
    let countries = []
    profiles.map(el => {
        if (!countries.includes(el.country)){
            countries.push(el.country)
        }
    })
    return(
        <div>
            <div>
                <button onClick={
                    () => {setCountries('')}
                }>
                    All
                </button>
                {
                    countries.map(cur => {
                        return(
                            <button onClick={
                                () => {setCountries(cur)}
                            }>
                               {cur}
                            </button>
                        )
                    })
                }
            </div>
            {
                profiles.map(prf => {
                    return(
                        <div className={`person ${visCountries===prf.country?'selectedCountry':''}`}>
                            <img className='pfp' src={prf.img} alt="pfp" />
                            <div>
                                <div className='content'>
                                    <h3>First name: </h3>
                                    <p>{prf.firstName}</p>
                                </div>
                                <div className='content'>
                                    <h3>Last name: </h3>
                                    <p>{prf.lastName}</p>
                                </div>
                                <div className='content'>
                                    <h3>Country: </h3>
                                    <p>{prf.country}</p>
                                </div>
                                <div className='content'>
                                    <h3>Type: </h3>
                                    <p>{prf.isStudent?"Student":"Teacher"}</p>
                                </div>  
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Facebook