import * as React from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./App.css";

const navigate = useNavigate();
const context = React.useContext(MyContext);

//global defined below
let initialStudents = {
  firstName: "",
  lastName: "",
  emailID: "",
  contactNo: "",
  altEmailID: "",
  altContactNo: "",
  summary: "",
};

let initialErrors = {
  //Used to set helperText
  firstName: false,
  lastName: false,
  emailID: false,
  contactNo: false,
  altEmailID: false,
  altContactNo: false,
  summary: false,
};

let initialValidations = {
  //Used for helperText
  firstName: "",
  lastName: "",
  emailID: "",
  contactNo: "",
  altEmailID: "",
  altContactNo: "",
  summary: "",
};

//Components defined below
function Row(props) {
  let temp1 = props.students[props.label1];
  let temp2 = props.students[props.label2];
  return (
    <div className="row" style={{ width: "100%" }}>
      <TextField
        value={temp1}
        onChange={(e) => {
          props.setStudents({
            ...props.students,
            [props.name1]: e.target.value,
          }),
            handleOnChange(props);
        }}
        id="outlined-basic"
        label={props.label1}
        name={props.name1}
        variant="outlined"
        style={{ width: "45%" }}
        required={props.required}
        error={props.error1}
        helperText={props.helperText1}
      />
      <TextField
        value={temp2}
        onChange={(e) => {
          props.setStudents({
            ...props.students,
            [props.name2]: e.target.value,
          }),
            handleOnChange(props);
        }}
        id="outlined-basic"
        label={props.label2}
        name={props.name2}
        variant="outlined"
        style={{ width: "45%" }}
        required={props.required}
        error={props.error2}
        helperText={props.helperText2}
      />
    </div>
  );
}

function TextArea(props) {
  return (
    <TextField
      value={props.students.label}
      onChange={(e) =>
        props.setStudents({ ...props.students, [props.name]: e.target.value })
      }
      id="outlined-multiline-static"
      label={props.label}
      multiline
      rows={4}
      style={{ width: "100%" }}
    />
  );
}

//functions defined below
function handleOnChange(props) {
  let newError = { ...props.errors };
  let newValidation = { ...props.validations };

  //firstName
  if (props.students.firstName === "") {
    newError.firstName = true;
    newValidation.firstName = "Please fill in this field";
  } else if (!props.students.firstName.match(/^[A-Za-z]+$/gi)) {
    newError.firstName = true;
    newValidation.firstName = "Invalid first name";
  } else {
    newError.firstName = false;
    newValidation.firstName = "";
  }

  //lastName
  if (props.students.lastName === "") {
    newError.lastName = true;
    newValidation.lastName = "Please fill in this field";
  } else if (!props.students.lastName.match(/^[A-Za-z]+$/gi)) {
    newError.lastName = true;
    newValidation.lastName = "Invalid last name";
  } else {
    newError.lastName = false;
    newValidation.lastName = "";
  }

  //emailID
  if (props.students.emailID === "") {
    newError.emailID = true;
    newValidation.emailID = "Please fill in this field";
  } else if (
    !props.students.emailID.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
  ) {
    newError.emailID = true;
    newValidation.emailID = "Invalid EmailID";
  } else {
    newError.emailID = false;
    newValidation.emailID = "";
  }

  //contactNo
  if (props.students.contactNo === "") {
    newError.contactNo = true;
    newValidation.contactNo = "Please fill in this field";
  } else if (!props.students.contactNo.match(/^[0-9]{10}$/gi)) {
    newError.contactNo = true;
    newValidation.contactNo = "Invalid contact number";
  } else {
    newError.contactNo = false;
    newValidation.contactNo = "";
  }

  //set errors and helperTexts at a time
  props.setErrors(newError);
  props.setValidations(newValidation);
}

function handleClick(students, errors) {
  if (
    errors.firstName === false &&
    errors.lastName === false &&
    errors.emailID === false &&
    errors.contactNo === false
  ) {
    console.log("students", students);
    context.setData(students);
    navigate("/edu");
  }
}

export default function BasicDetails() {
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
        errors={errors}
        setErrors={setErrors}
        validations={validations}
        setValidations={setValidations}
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
        errors={errors}
        setErrors={setErrors}
        validations={validations}
        setValidations={setValidations}
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
        errors={errors}
        setErrors={setErrors}
        validations={validations}
        setValidations={setValidations}
      />
      <TextArea
        label="Profile Summary"
        name="summary"
        students={students}
        setStudents={setStudents}
      />
      <Button
        variant="contained"
        onClick={() =>
          handleClick(
            students,
            errors,
            "firstName",
            "lastName",
            "emailID",
            "contactNo",
            "altEmailID",
            "altContactNo",
            "summary"
          )
        }
        style={{ marginTop: "20px", marginBottom: "20px", textAlign: "right" }}
      >
        Save
      </Button>
    </>
  );
}
