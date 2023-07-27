import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DateValidationDisablePast from "./Date_picker";
import { blue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Edu_form(props) {
  // state = {
  //     disabled : true
  // }
  const handleUpdate = (e, idx, key) => {
    let temp = [...props.data];
    let updated_value = { ...temp[idx] };
    updated_value[key] = e.target.value;
    temp[idx] = updated_value;
    props.setData(temp);
  };

  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: "red" },
        },
      },
    },
  });
  // const formLabelsTheme = createMuiTheme({
  //     overrides: {
  //       MuiFormLabel: {
  //         asterisk: {
  //           color: '#db3131',
  //           '&$error': {
  //             color: '#db3131'
  //           }
  //         }
  //       }
  //     }
  //   })
  // const handleInput = ()
  // const[formValue,setformValue] = useState({University:'',Degree:'', Specialisation:''});

  // const[disable,setDisable] = useState('Typing');

  // const DisableButton = (e) =>{
  //     setDisable('Submitted');
  // }

  // const handleDisable = (e) => {
  //     if(error){
  //         this.setState({
  //             disabled:false
  //         })
  //     }
  //     else{
  //         this.setState({
  //             disabled:true
  //         })
  //     }
  // }

  console.log(props.data);
  return (
    <>
      <form
        // onSubmit ={DisableButton}
        component="div"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid>
          <Grid
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "space-evenly",
            }}
          >
            <ThemeProvider theme={theme}>
              <TextField
                required
                name="University"
                value={props?.data?.University}
                type="text"
                id="outlined-basic"
                label="University/Institute Name"
                variant="outlined"
                onChange={(e) => {
                  handleUpdate(e, props.idx, "University");
                }}
                style={{
                  "margin-right": "50px",
                  width: "35vw",
                  "margin-top": "15px",
                }}
              />

              <TextField
                required
                name="Degree"
                value={props?.data?.Degree}
                id="outlined-basic"
                label="Degree"
                variant="outlined"
                onChange={(e) => {
                  handleUpdate(e, props.idx, "Degree");
                }}
                style={{
                  "margin-right": "50px",
                  width: "35vw",
                  "margin-top": "15px",
                }}
              />
            </ThemeProvider>
          </Grid>
          <Grid
            style={{
              display: "flex",
              width: "100vw",
              justifyContent: "space-evenly",
              gap: "5px",
            }}
          >
            <ThemeProvider theme={theme}>
              <TextField
                required
                name="Specialisation"
                value={props?.data?.Specialisation}
                id="outlined-basic"
                onChange={(e) => {
                  handleUpdate(e, props.idx, "Specialisation");
                }}
                label="Specialisation"
                variant="outlined"
                style={{
                  "margin-right": "50px",
                  width: "35vw",
                  "margin-top": "15px",
                }}
              />
            </ThemeProvider>

            <DateValidationDisablePast />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
