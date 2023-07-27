import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
const gridStyle={display:"flex", flexWrap:"wrap", justifyContent:"space-around"};
const textStyle={margin: "20px",width: "40%"};
export default function FormPropsTextFields() {
    const [details,setDetails]=React.useState({
        firstName:"",
        lastName:"",
        emailId:"",
        secondaryEmail:"",
        Number:"",
        alternateNumber:"",
        profileSummary:"",
    });

    const debounce = (func) => {
        let timer;
        return function (...args) {
          const context = this;
          if (timer) clearTimeout(timer);
          else{
              console.log("handle func ", func);
              timer = setTimeout(() => {
                timer = null;
                func.apply(context,args);
              }, 5000);
          }
        };
      };
    const handleChange=(e)=>{
            const key=e.target.name;
            console.log("key ",key);
            setDetails({...details, [key] : e.target.value})
    }
  return (
    <>
    <Paper elevation={3} sx={{ marginRight: "25%", marginLeft: "25%" }} style={{width: "50vw"}} >
    <Box style={{disply: "flex", alignContent:"space-between" , gap: "20px" , height:"fit-content" , padding:"20px"}} >

        <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
        Basic Details
        </Typography>

        <Grid style={gridStyle}>
            <TextField style={textStyle} id="outlined-helperText" label="First Name" name="firstName" value={details.firstName} onChange={handleChange}
            error={!details.firstName.match(/^[A-Za-z]+$/gi)}
            helperText={details.firstName.match(/^[A-Za-z]+$/gi) ?"" : "Please Enter a valid Email!"}/>
            <TextField style={textStyle} id="outlined-helperText" label="Last Name" name="lastName"value={details.lastName} onChange={handleChange}
            error={!details.lastName.match(/^[A-Za-z]+$/gi)}
            helperText={details.lastName.match(/^[A-Za-z]+$/gi) ?"" : "Please Enter a valid Email!"}/>
        </Grid>

        <Grid style={gridStyle}>
            <TextField style={textStyle} id="outlined-helperText" label="Email id" type="email" value={details.emailId} name="emailId" onChange={(e) => debounce(handleChange)(e)}
            error={!details.emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)}
            helperText={details.emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi) ?"" : "Please Enter a valid Email!"}/>
            <TextField style={textStyle} id="outlined-helperText" label="Secondary Email id(Optional)" name="secondaryEmail" type="email" value={details.secondaryEmail} onChange={handleChange}
            error={!details.secondaryEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)}
            helperText={details.secondaryEmail.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi) ?"" : "Please Enter a valid Email!"}/>
        </Grid>

        <Grid style={gridStyle}>
        <TextField  style={textStyle} id="outlined-number" label="Contact Number" type="tel" name="Number" value={details.Number} onChange={handleChange}
        error={!details.Number.match(/^[0-9]{10}$/gi)}
        helperText={details.Number.match(/^[0-9]{10}$/gi) ?"" : "Please Enter a valid Email!"}/>
        <TextField style={textStyle} label="Alternate Contact Number (Optional)" name="alternateNumber"value={details.alternateNumber} type="tel" onChange={handleChange}
        error={!details.alternateNumber.match(/^[0-9]{10}$/gi)}
        helperText={details.alternateNumber.match(/^[0-9]{10}$/gi) ?"" : "Please Enter a valid Email!"}/>
        </Grid>

        <Grid style={gridStyle}>
        <TextField style={{margin: "20px", width: "100%"}} id="outlined-helperText" name="profileSummary" label="Profile Summary" value={details.profileSummary} onChange={handleChange} />
        </Grid>

        <Grid style={{display:"flex", justifyContent:"center"}} >
            <Button onClick={()=>{
                console.log(details);
            }}> click </Button>
        </Grid>
    </Box>
    </Paper>
    </>
  );
}