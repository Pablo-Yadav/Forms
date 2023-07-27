import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import DashboardLayout from './DashboardLayout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { BasicContext } from '../MyContext';
function FirstPage() {
    const basicContext=useContext(BasicContext);
    console.log("my basic context ",basicContext);
    const navigate=useNavigate();
    const [basicDetails,setBasicDetails]=useState({});
    const handleChange=(e,name)=>{
      setBasicDetails({...basicDetails,[name]:e.target.value});
    }
    const handleNext=()=>{
      basicContext.setBasicDetails(basicDetails);
      navigate('/secondpage');
    }
    useEffect(()=>{
      setBasicDetails(basicContext.basicDetails);
    },[]);
  return (
    <DashboardLayout>
    <div className='basic-details'>
      {/* <h1>{mycontext?.myState}</h1> */}
      <TextField
            required
            id="outlined-required"
            label="Username"
            style={{width: "50vw"}}
            value={basicDetails?.username || ''}
            onChange={(e)=>handleChange(e,"username")}
          />
      <Button variant="contained" onClick={handleNext}>Next</Button>
    </div>
    </DashboardLayout>
  )
}

export default FirstPage
