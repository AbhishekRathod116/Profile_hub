import React,{useState} from 'react'
import "./Address.css"
import {Link} from "react-router-dom"

const Address = ()=>{

    const[address,setAddress] = useState("")
    const[addressError,setAddressError] = useState("")

    const[address2,setAddress2] = useState("")
    const[addressError2,setAddressError2] = useState("")

    const[city,setCity] = useState("")
    const[cityError,setCityError] = useState("")

    const[state,setState] = useState("")
    const[stateError,setStateError] = useState("")

    const[zipCode,setZipCode] = useState("")
    const[zipCodeError,setZipCodeError] = useState("")

    const HandleChangeAddress = (e)=>{
        const inputValue = e.target.value;

        if(/^[A-Za-z0-9\s,.-]*$/.test(inputValue)){
            setAddress(inputValue)
            setAddressError("")
        }
        else{
            setAddressError("Please Enter a valid address")
        }
    }

    const HandleChangeAddress2 = (e)=>{
        const inputValue = e.target.value;

        if(/^[A-Za-z0-9\s,.-]*$/.test(inputValue)){
            setAddress2(inputValue)
            setAddressError2("")
        }
        else{
            setAddressError2("Please Enter a valid address")
        }
    }

    const HandleChangeCity = (e)=>{
        const inputValue = e.target.value;

        if(/^[A-Za-z\s]*$/.test(inputValue)){
            setCity(inputValue)
            setCityError("")
        }
        else{
            setCityError("Please Enter a valid city")
        }
    }

    const HandleChangeState = (e)=>{
        const inputValue = e.target.value;

        if(/^[A-Za-z\s]*$/.test(inputValue)){
            setState(inputValue)
            setStateError("")
        }
        else{
            setStateError("Please Enter a valid city")
        }
    }
    const HandleChangeZipCode = (e) =>{
        const inputValue = e.target.value

        if(/^\d{0,6}$/.test(inputValue)){
            setZipCode(inputValue)
            setZipCodeError(inputValue.length===6 ? "" :"Please Enter a valid code 6 digit")
            if(inputValue.length===0){
                setZipCodeError("")
            }
        }
        else{
            setZipCodeError("")
        }
    }
    return(
        <div className="Address">
            <div className="address-header">
                <p>PROFILE HUB</p>
            </div>
            <div className="address-info">
                <div className="address-lineOne">
                    <p>Address Line 1</p>
                    <input 
                    className="address-input" 
                    placeholder="Enter Your Address.." 
                    type="text" 
                    value={address}
                    onChange={HandleChangeAddress}
                    />
                    {addressError && <span style={{color : "red"}}>{addressError}</span>}
                </div>
                <div className="address-Two">
                    <p>Address Line 2</p>
                    <input 
                    className="address-input" 
                    placeholder="Enter Your Address.." 
                    type="text" 
                    value={address2}
                    onChange={HandleChangeAddress2}
                    />
                    {addressError2 && <span style={{color : "red"}}>{addressError2}</span>}
                </div>
                <div className="address-city">
                    <p>City</p>
                    <input 
                    className="address-input" 
                    placeholder="Enter Your City" 
                    type="text"
                    value={city}
                    onChange={HandleChangeCity}
                    />
                    {cityError && <span style={{color : "red"}}>{cityError}</span>}
                </div>
                <div className="address-state">
                    <p>State</p>
                    <input 
                    className="address-input" 
                    placeholder='Enter Your State' 
                    type="text" 
                    value={state}
                    onChange={HandleChangeState}
                    />
                    {stateError && <span style={{color : "red"}}>{stateError}</span>}
                </div>
                <div className="address-zipCode">
                    <p>Zip Code</p>
                    <input 
                    className="address-input" 
                    placeholder="Enter Your Zip Code"  
                    type="text"
                    value={zipCode}
                    onChange={HandleChangeZipCode}
                    />
                    {zipCodeError && <span style={{color : "red"}}>{zipCodeError}</span>}
                </div>
                <div className="address-button">
                    <Link to={"/"}>
                        <button className="address-backButton">Back</button>
                    </Link>
                    <button className="address-nextButton">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Address;
