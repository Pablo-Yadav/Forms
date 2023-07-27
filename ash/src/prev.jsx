import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'

//global defined below
let initialStudents = {
  firstName:"",
  lastName:"",
  emailID:"",
  contactNo:"",
  altEmailID:"",
  altContactNo:"",
  summary:""
};

let initialErrors = {
  //Used to set helperText
  firstName:false,
  lastName:false,
  emailID:false,
  contactNo:false,
  altEmailID:false,
  altContactNo:false,
  summary:false
}

let initialValidations = {
  //Used for helperText
  firstName:"",
  lastName:"",
  emailID:"",
  contactNo:"",
  altEmailID:"",
  altContactNo:"",
  summary:""
}


//Components defined below
function Row(props)
{
  let temp1 = props.students[props.label1];
  let temp2 = props.students[props.label2];
  return (
    <div className='row' style={{width: "100%"}}>
      <TextField 
        value={temp1}
        onChange={(e)=>props.setStudents({...props.students,[props.name1]:e.target.value})}
        id="outlined-basic"
        label={props.label1}
        name={props.name1}
        variant="outlined"
        style={{width: "45%"}}
        required={props.required}
        error = {props.error1}
        helperText = {props.helperText1}
      />
      <TextField
        value={temp2}
        onChange={(e)=>props.setStudents({...props.students,[props.name2]:e.target.value})}
        id="outlined-basic"
        label={props.label2}
        name={props.name2}
        variant="outlined"
        style={{width: "45%"}}
        required={props.required}
        error = {props.error2}
        helperText = {props.helperText2}
      />
    </div>
  )
}

function TextArea(props)
{
  return (
    <TextField
      value={props.students.label}
      onChange={(e) => props.setStudents({...props.students,[props.name]:e.target.value})}
      id="outlined-multiline-static"
      label={props.label}
      multiline
      rows={4}
      style={{width: "100%"}}
    />
  )
}


//functions defined below
function handleClick(students,errors,validations,setErrors,setValidations)
{
  let newError = {...errors};
  let newValidation = {...validations};

  //firstName
  if(students.firstName === "")
  {
    newError.firstName = true;
    newValidation.firstName = "Please fill in this field";
  }
  else if(! students.firstName.match(/^[A-Za-z]+$/gi))
  {
    newError.firstName = true;
    newValidation.firstName = "Invalid first name";
  }
  else
  {
    newError.firstName = false;
    newValidation.firstName = "";
  }

  //lastName
  if(students.lastName === "")
  {
    newError.lastName = true;
    newValidation.lastName = "Please fill in this field";
  }
  else if(! students.lastName.match(/^[A-Za-z]+$/gi))
  {
    newError.lastName = true;
    newValidation.lastName = "Invalid last name";
  }
  else
  {
    newError.lastName = false;
    newValidation.lastName = "";
  }

  //emailID
  if(students.emailID === "")
  {
    newError.emailID = true;
    newValidation.emailID = "Please fill in this field";
  }
  else if(! students.emailID.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi))
  {
    newError.emailID = true;
    newValidation.emailID = "Invalid EmailID";
  }
  else
  {
    newError.emailID = false;
    newValidation.emailID = "";
  }

  //contactNo
  if(students.contactNo === "")
  {
    newError.contactNo = true;
    newValidation.contactNo = "Please fill in this field";
  }
  else if(! students.contactNo.match(/^[0-9]{10}$/gi))
  {
    newError.contactNo = true;
    newValidation.contactNo = "Invalid contact number";
  }
  else
  {
    newError.contactNo = false;
    newValidation.contactNo = "";
  }

  //set errors and helperTexts at a time
  setErrors(newError);
  setValidations(newValidation);

  if(errors.firstName === false && errors.lastName === false && errors.emailID === false && errors.contactNo === false)
  console.log("students",students);
}

export default function Form()
{
  const [students, setStudents] = React.useState(initialStudents);
  const [errors, setErrors] = React.useState(initialErrors);
  const [validations, setValidations] = React.useState(initialValidations);
  return (
    <>
      <h1>Basic Details</h1>
      <Row
        label1="First Name"
        label2="Last Name"
        name1="firstName"
        name2="lastName"
        required={true}
        students={students}
        setStudents={setStudents}
        error1={errors.firstName}
        helperText1={validations.firstName}
        error2={errors.lastName}
        helperText2={validations.lastName}
      />
      <Row
        label1="Email Id"
        label2="Contact Number"
        name1="emailID"
        name2="contactNo"
        required={true}
        students={students}
        setStudents={setStudents}
        error1={errors.emailID}
        helperText1={validations.emailID}
        error2={errors.contactNo}
        helperText2={validations.contactNo}
      />
      <Row
        label1="Alternate Email Id (Optional)"
        label2="Alternate Contact Number (Optional)"
        name1="altEmailID"
        name2="altContactNo"
        required={false}
        students={students}
        setStudents={setStudents}
      />
      <TextArea
        label="Profile Summary"
        name="summary"
        students={students}
        setStudents={setStudents}
      />
      <Button
        variant="contained"
        onClick={() => handleClick(students,errors,validations,setErrors,setValidations)}
        style={{marginTop: "20px", marginBottom: "20px"}}
      >Save</Button>
    </>
  );
}