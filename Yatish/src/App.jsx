import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import TextFieldComponent from './TextField/textField';
// import PhoneNumber from './PhoneField/phoneNumber';

let initialDetails={
  firstName:"",
  lastName:"",
  "profile-summary":"",
  "email-id":"",
  "contact-number":"",
  "Alternate-email-id":"",
  "Alternate-contact-number":"",

};

let initialErrorDetails={
  firstName:false,
  lastName:false,
  "email-id":false,
  "contact-number":false,
  "Alternate-email-id":false,
  "Alternate-contact-number":false,
  "profile-summary":false

};

let initialValidation={
  firstName:"",
  lastName:"",
  "email-id":"",
  "contact-number":"",
  "Alternate-email-id":"",
  "Alternate-contact-number":"",
  "profile-summary":""
}


function App() {
  let [formDetails,setFormDetails]=useState(initialDetails);
  let [errorValue,setErrorValue]=useState(initialErrorDetails);
  let [isValidText,setIsValidText]=useState(initialValidation);
  let requireObj={
    firstName:true,
    lastName:true,
    "email-id":true,
    "contact-number":true,
    "Alternate-email-id":false,
    "Alternate-contact-number":false,
    "profile-summary":false
  };
  

function handleSendClick(requireObj){
  
  let newObj={...errorValue};
  let currentDetails={...formDetails};
  let validText={...isValidText};
  let flg=true;
  for(let key in requireObj){
    if(requireObj[key]){
      if(formDetails[key]===""){
        newObj[key]=true;
        validText[key]="This Field is Required";
        flg=false;
      }else{
        newObj[key]=false;
      }
    }
  }
  for(let key in requireObj){
   if(!newObj[key]){
     if(key==="firstName" || key==="lastName"){
       if(key==="firstName" && currentDetails.firstName.match(/^[a-zA-Z][a-zA-z\s]*$/gi)){
          validText.firstName="";
       }else if(key==="firstName"){
        newObj[key]=true;
        validText.firstName="Enter a Valid First Name";
        flg=false;
       }

       if(key==="lastName" && currentDetails.lastName.match(/^[a-zA-Z][a-zA-z\s]*$/gi))
       {
        validText.lastName="";
       }
     else if(key==="lastName")
     {
      newObj[key]=true;
      validText.lastName="Enter a Valid Last Name";
      flg=false;
     }

     }
     else if(key==="email-id" || key==="Alternate-email-id")
     {
      if(key==="email-id" && currentDetails['email-id'].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi))
      {
           validText['email-id']="";
      }
      else if(key==="email-id")
      {
           newObj[key]=true;
           validText['email-id']="Enter a valid Email-id";
           flg=false;
      }

      if(key==="Alternate-email-id" && currentDetails['Alternate-email-id']!=="" && currentDetails['Alternate-email-id'].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi))
      {
           validText['Alternate-email-id']="";
      }
      else if(key==="Alternate-email-id" && currentDetails['Alternate-email-id']!=="")
      {
           newObj[key]=true;
           validText['Alternate-email-id']="Enter a valid Email-id";
           flg=false;
      }

     }else if(key==="contact-number" ||  key==="Alternate-contact-number"){
      if(key==="contact-number" && currentDetails['contact-number'].match(/^[0-9]{9}$/gi))
      {
           validText['contact-number']="";
      }
      else if(key==="contact-number")
      {
           newObj[key]=true;
           validText['contact-number']="Enter a valid Number";
           flg=false;
      }

      if(key==="Alternate-contact-number" && currentDetails['Alternate-contact-number']!=="" && currentDetails['Alternate-contact-number'].match(/^[0-9]{9}$/gi))
      {
           validText['Alternate-contact-number']="";
      }
      else if(key==="Alternate-contact-number" && currentDetails['Alternate-contact-number']!=="")
      {
           newObj[key]=true;
           validText['Alternate-contact-number']="Enter a valid Number";
           flg=false;
      }
     }
   }
  }
  setIsValidText({...validText});
  setErrorValue({...newObj});

  if(!flg)
  {
    console.log("Enter the Required Fields !!!!");
    setFormDetails({...formDetails});
  }
  else
  {
    console.log(formDetails);
    setFormDetails({...initialDetails});
  }
  
}

// function handleChangeField(func,delay,name,e){
//     setFormDetails({...formDetails,[name]:e.target.value});
// }


function func(requireObj,key){
  let newObj={...errorValue};
  let currentDetails={...formDetails};
  let validText={...isValidText};
  let flg=true;
  
    if(key==="firstName" || key==="lastName"){
      if(key==="firstName" && currentDetails.firstName.match(/^[a-zA-Z][a-zA-z\s]*$/gi)){
         validText.firstName="";
         newObj[key]=false;
      }else if(key==="firstName"){
       newObj[key]=true;
       validText.firstName="Enter a Valid First Name";
       flg=false;
      }
  
      if(key==="lastName" && currentDetails.lastName.match(/^[a-zA-Z][a-zA-z\s]*$/gi))
      {
       validText.lastName="";
       newObj[key]=false;
      }
    else if(key==="lastName")
    {
     newObj[key]=true;
     validText.lastName="Enter a Valid Last Name";
     flg=false;
    }
  
    }else if(key==="email-id" || key==="Alternate-email-id")
    {
      if(key==="email-id" && currentDetails['email-id'].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi))
      {
           validText['email-id']="";
           newObj[key]=false;
      }
      else if(key==="email-id")
      {
           newObj[key]=true;
           validText['email-id']="Enter a valid Email-id";
           flg=false;
      }

      if(key==="Alternate-email-id" && currentDetails['Alternate-email-id']!=="" && currentDetails['Alternate-email-id'].match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi))
      {
           validText['Alternate-email-id']="";
           newObj[key]=false;
      }
      else if(key==="Alternate-email-id" && currentDetails['Alternate-email-id']!=="")
      {
           newObj[key]=true;
           validText['Alternate-email-id']="Enter a valid Email-id";
           flg=false;
      }
    }else if(key==="contact-number" ||  key==="Alternate-contact-number"){
      if(key==="contact-number" && currentDetails['contact-number'].match(/^[0-9]{9}$/gi))
      {
           validText['contact-number']="";
           newObj[key]=false;
      }
      else if(key==="contact-number")
      {
           newObj[key]=true;
           validText['contact-number']="Enter a valid Number";
           flg=false;
      }

      if(key==="Alternate-contact-number" && currentDetails['Alternate-contact-number']!=="" && currentDetails['Alternate-contact-number'].match(/^[0-9]{9}$/gi))
      {
           validText['Alternate-contact-number']="";
           newObj[key]=false;
      }
      else if(key==="Alternate-contact-number" && currentDetails['Alternate-contact-number']!=="")
      {
           newObj[key]=true;
           validText['Alternate-contact-number']="Enter a valid Number";
           flg=false;
      }
     }

  
     setIsValidText({...validText});
     setErrorValue({...newObj});
    
}

const handleDebounceChange = (func, delay,name,e) => {
  setFormDetails({...formDetails,[name]:e.target.value});
  let debounceTimer
  return function() {
      const context = this
      const args=arguments
      
          clearTimeout(debounceTimer)
              debounceTimer
          = setTimeout(() => func.apply(context, args), delay)
  }
}

  return(
    <div className="form">
      <h1 id="Head">Basic Details</h1>
      <div className="add-button">
      <Button variant="outlined">ADD</Button>
      </div>

      <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    value={formDetails.firstName}
    func={func}
    requireObj={requireObj}
    id="fname" 
    label="First-Name" 
    variant="outlined" 
    name="firstName" 
    required={true}
    error={errorValue.firstName}
    helperText={isValidText.firstName}/>

    <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    value={formDetails.lastName}
    func={func}
    requireObj={requireObj}
    id="lname" 
    label="Last-Name" 
    variant="outlined" 
    name="lastName" 
    required={true}
    error={errorValue.lastName}
    helperText={isValidText.lastName}/>
    
    {/* <TextFieldComponent 
    handleChangeField={handleChangeField}
    value={formDetails["email-id"]}
    id="email-id" 
    label="Email-Id" 
    variant="outlined" 
    name="email-id" 
    required={true}
    error={errorValue["email-id"]}
    helperText={isValidText["email-id"]}/> */}
    <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    value={formDetails["email-id"]}
    func={func}
    requireObj={requireObj}
    id="email-id" 
    label="Email-Id" 
    variant="outlined" 
    name="email-id" 
    required={true}
    error={errorValue["email-id"]}
    helperText={isValidText["email-id"]}/>
    
   

    <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    value={formDetails["contact-number"]}
    func={func}
    requireObj={requireObj}
    id="contact-number" 
    label="Contact-Number" 
    variant="outlined"  
    name="contact-number" 
    required={true}
    error={errorValue["contact-number"]}
    helperText={isValidText["contact-number"]}
    />
    
    <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    value={formDetails["Alternate-email-id"]}
    func={func}
    requireObj={requireObj}
    id="A-email-id" 
    label="Secondary-Email-Id (Optional)" 
    variant="outlined" 
    name="Alternate-email-id" 
    required={false}
    error={errorValue["Alternate-email-id"]}
    helperText={isValidText["Alternate-email-id"]}
    />
    
    <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    func={func}
    requireObj={requireObj}
    value={formDetails["Alternate-contact-number"]}
    id="A-contact-number" 
    label="Alternate-Contact-Numbe (Optional)" 
    variant="outlined" 
    name="Alternate-contact-number"
    required={false} 
    error={errorValue["Alternate-contact-number"]}
    helperText={isValidText["Alternate-contact-number"]}
    />
    
    <TextFieldComponent 
    handleChangeField={handleDebounceChange}
    func={func}
    requireObj={requireObj}
    value={formDetails["profile-summary"]}
    id="profile-summary" 
    label="Profile-Summary" 
    variant="outlined" 
    required={false}
    multiline 
    style={{
         gridColumn:"auto/span 2"
    }  }
    name="profile-summary"
    error={errorValue["profile-summary"]}
    helperText={isValidText["profile-summary"]}
    />
    
    <div className="sendButton">
    <Button variant="contained" onClick={()=>{handleSendClick(requireObj)}}>Send</Button>
    </div>

    </div>
  );
}

export default App
