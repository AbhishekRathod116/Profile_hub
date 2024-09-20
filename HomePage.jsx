import React,{useState} from 'react'
import "./HomePage.css"
import {Link} from "react-router-dom"


function HomePage(){

  const[name,setName] = useState("")
  const[nameError,setNameError] = useState("")

  const[mobileNum,setMobileNum] = useState("")
  const[mobileNumError,setMobileNumError] = useState("")

  const[emailInput,setEmailInput] = useState("")
  const[emailError,setEmailError] = useState("")

  const HandleChangeClearButton = ()=>{
      setName("")
      setMobileNum("")
      setEmailInput("")
  }


  const HandleChangeName = (e)=>{
      const inputValue = e.target.value;

      if(/^[A-Za-z\s]*$/.test(inputValue)){
        setName(inputValue)
        setNameError("")
      }
      else if(inputValue.length===0){
        setNameError("")
      }else{
        setNameError("Number not allowed..")
      }
  }


  const HandleChangeMobileNum = (e)=>{
      const inputValue  = e.target.value;

      if(/^\d{0,10}$/.test(inputValue)){
        setMobileNum(inputValue)
        setMobileNumError(inputValue.length===10 ? "" : "Please Enter 10 Number" )
        if(inputValue.length===0){
          setMobileNumError("")
        }
      }else{
        setMobileNumError("")
      }
  }


  const ValidateEmail = (email)=>{
    const emailType = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailType.test(email)
}

  const HandleChangeEmail = (e)=>{
      const inputValue = e.target.value;
      setEmailInput(inputValue)

      if(inputValue.length===0){
        setEmailError("")
      }
      else if(ValidateEmail(inputValue)){
        setEmailError("")
      }
      else{
        setEmailError("format like name@gmail.com.")
      }
  }

  return(
    <div className='HomePage'>
      <p className="header">PROFILE HUB</p>
      <div className="HomePage-info">
        <div className="HomePage-name-input">
          <p>Name</p>
          <input 
          className="homePage-input" 
          placeholder="Enter Your Name" 
          type='text'
          value={name}
          onChange={HandleChangeName}
          />
          {nameError && <span style={{color : "red"}}>{nameError}</span>}
        </div>
        <div className="HomePage-name-mobile">
          <p>Mobile No</p>
          <input 
          className="homePage-input" 
          placeholder="Enter Your Mobile No." 
          value={mobileNum}
          onChange={HandleChangeMobileNum}
          type="text"/>
          {mobileNumError && <span style={{color : "red"}}>{mobileNumError}</span>}
        </div>
        <div  className="HomePage-name-email">
          <p>Email</p>
          <input 
          className="homePage-input" 
          placeholder='Enter Your Email ID' 
          type="text"
          value={emailInput}
          onChange={HandleChangeEmail}
          />
          {emailError &&  <span style={{color : "red"}}>{emailError}</span>}
        </div>
        <div className="homePage-button">
            <button 
            className="homePage-clear"
            onClick={HandleChangeClearButton}
            >Clear</button>
            <Link to="/address">
                <button className="homePage-next">Next</button>
            </Link>
        </div> 
      </div>
    </div>
  )
}
export default HomePage;





