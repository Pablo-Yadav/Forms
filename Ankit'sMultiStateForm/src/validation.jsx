import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; 
import Button from '@mui/material/Button';

export default function BasicForm(){
    const [details,setDetails] = useState({
        firstName:"",
        lastName:"",
        ID:"",
        ContactNumber:"",
        PinCode:"",
        AlternateNumber:"",
    })

    function handleChange(e){
        // console.log("name",e)
        setDetails({...details,[e.target.name]:e.target.value})
        
      }
      function handleClick(){
        console.log(details);
      }
      const debounce = (func, delay) => {
        let debounceTimer
        return function() {
            const context = this
            const args = arguments
                clearTimeout(debounceTimer)
                    debounceTimer
                = setTimeout(() => func.apply(context, args), delay)
        }
    }
    
      // console.log("details",details)
      function ValidateEmail(ID) {
          // console.log(details.ID);
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;
      
        if (details.ID.match(validRegex)) {
          return false;
        } 
        else {
          return true;
        }
      }
      
      // var check = ValidateEmail(ID);
      return (
        <>
          <div class = "body_comp">
            <h2 style={{display :"flex", width: "100vw", justifyContent:'center'}}>Basic Details</h2>
            <br />
          <Box
            component="div"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <Grid >
              <Grid style = {{display :"flex", width: "100vw", justifyContent:'center'}} >
                <TextField 
                error ={details.firstName.length>0 ? true : false}
                onChange={(e)=>handleChange(e)}
                id="outlined-basic"
                name="firstName"
                label="First Name"
                variant="outlined" 
                required 
                style = {{"margin-right" : "50px","marginTop":"15px", width:"35vw"}}/>
    
                <TextField 
                error ={details.lastName.length>0 ? false : true}
                name="lastName"  
                onChange={handleChange} 
                id="outlined-basic" 
                label="Last Name" 
                variant="outlined" 
                style = {{"margin-right" : "50px", width:"35vw", "margin-top":"15px"}}/>
              </Grid>
    
              <Grid style = {{display :"flex", width: "100vw", justifyContent:'center'}}>
                <TextField 
                id="outlined-basic" 
                label="Email Id" 
                name="ID"
                onChange= {debounce (function (e){
                    handleChange(e)},500)
                }
                
                error = {ValidateEmail("ID")}
                variant="outlined" 
                required 
                style = {{"margin-right" : "50px","margin-top":"15px", width:"35vw"}}/>
                <TextField 
                  id="outlined-basic"
                  onChange={handleChange}
                  label="Contact Number"
                  variant="outlined"
                  name="ContactNumber"
                  required 
                  style = {{"margin-right" : "50px", width:"35vw", "margin-top":"15px"}}/>
              </Grid>
    
              <Grid style = {{display :"flex", width: "100vw", justifyContent:'center'}}>
                <TextField
                  name='AlternateNumber' 
                  onChange={handleChange}
                  id="outlined-basic" 
                  label="Alternative Contact Number(Optional)" 
                  variant="outlined" 
                  style = {{"margin-right" : "50px","margin-top":"15px", width:"35vw"}}/>
                <TextField 
                  name='PinCode'
                  onChange={handleChange}
                  id="outlined-basic" 
                  label="Pincode" 
                  variant="outlined" 
                  required 
                  style = {{"margin-right" : "50px", width:"35vw", "margin-top":"15px"}}/>
              </Grid>
    
              <Grid style = {{display :"flex", width: "100vw", justifyContent:'center'}}>
                <Button
                  type = "submit" 
                  variant="outlined" 
                  style= {{"margin-right" : "50px", width:"20vw", "margin-top":"25px"}}
                  onClick={handleClick}>
                    Submit
                  </Button>
              </Grid>
            </Grid>
        </Box> 
          </div>
        </>
      )
}