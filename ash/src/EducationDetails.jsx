import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'

//Theme is defined
const theme = createTheme ({
    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },
            },
        },
    },

})

//global defined below
let setstartdate,setenddate;

// let initialEducation = {
//     university:"",
//     degree:"",
//     specialisation:"",
//     startdate:"",
//     enddate:""
// }

//functions defined below
function handleAddMore(education,setEducation,setAllFilled)
{
    let temp = [...education];
    temp.push({});
    setEducation(temp);

    setAllFilled(checkFilled(temp));
}
function handleRemove(education,setEducation,idx,setAllFilled)
{
    let temp = [...education];
    temp.splice(idx,1);
    console.log("indie",idx,temp);
    setEducation(temp);

    setAllFilled(checkFilled(temp));
}
function handleUpdate(props,e,name)
{
    let temp = [...props?.education];
    let update = temp[props.idx];

    if(name === "startdate" || name === "enddate")
    {
        update[name] = `${e["$M"]+1}/${e["$D"]}/${e["$y"]}`;
        if(name === "startdate")
        {
            setstartdate = e;
        }
        if(name === "enddate")
        {
            setenddate = e;
        }
    }
    else
    update[name] = e.target.value;

    props?.setEducation(temp);
    console.log("Update",props.education);

    props.setAllFilled(checkFilled(temp));
}
function checkFilled(temp)
{
    var check = true;
    for(let i=0;i<temp.length;i++)
    {
        if(temp[i]["university"] === "" || temp[i]["degree"] === "" || temp[i]["specialisation"] === "" || temp[i]["startdate"] === "" || temp[i]["enddate"] === "" || temp[i]["university"] === undefined || temp[i]["degree"] === undefined || temp[i]["specialisation"] === undefined || temp[i]["startdate"] === undefined || temp[i]["enddate"] === undefined)
        {
            check = false;
            break;
        }
    }
    return check;
}

//Components defined below
function EduForm(props)
{
    return (
        <>
        <div className='row'>
            <TextField 
                id="outlined-basic"
                label="University / Institute Name"
                name="university"
                variant="outlined"
                style={{width: "45%"}}
                required
                onChange={(e)=>handleUpdate(props,e,"university")}
            />
            <TextField 
                id="outlined-basic"
                label="Degree"
                name="degree"
                variant="outlined"
                style={{width: "45%"}}
                required
                onChange={(e)=>handleUpdate(props,e,"degree")}
            />
        </div>
        <div className='row'>
            <TextField 
                id="outlined-basic"
                label="Specialisation"
                name="specialisation"
                variant="outlined"
                style={{width: "45%"}}
                required
                onChange={(e)=>handleUpdate(props,e,"specialisation")}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Start Date" name="startdate" onChange={(e)=>handleUpdate(props,e,"startdate")} maxDate={setenddate} required/>
                <DatePicker label="End Date" name="enddate" onChange={(e)=>handleUpdate(props,e,"enddate")} minDate={setstartdate} required/>
            </LocalizationProvider>
        </div>
        </>
    )
}

export default function EducationDetails()
{
    const [education, setEducation] = React.useState([{}]);
    const [allFilled, setAllFilled] = React.useState(false);
    return (
        <ThemeProvider theme={theme}>
        <div className='row'>
            <h1 style={{fontFamily: "Arial"}}>Education Details</h1>
            <Button onClick={() => handleAddMore(education,setEducation,setAllFilled)} variant="contained" style={{marginTop: "20px", marginBottom: "20px"}}>Add More</Button>
        </div>
        {education.map((item,idx) => {
            return (
                <div key={idx}>
                {idx>0 && 
                <div className='removebutton'>
                    <Button onClick={() => handleRemove(education,setEducation,idx,setAllFilled)} variant="contained" style={{marginTop: "20px", marginBottom: "20px"}}>Remove</Button>
                </div>}
                    <EduForm idx={idx} education={education} setEducation={setEducation} allFilled={allFilled} setAllFilled={setAllFilled}/>
                </div>
            )
        })}
        <div className='row'>
            <Button variant="contained" style={{marginTop: "20px", marginBottom: "20px"}}>Save</Button>
            <Button variant="contained" style={{marginTop: "20px", marginBottom: "20px"}} disabled={!allFilled}>Next</Button>
        </div>
        </ThemeProvider>
    )
}