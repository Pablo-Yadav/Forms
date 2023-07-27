import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { useState ,useEffect} from 'react'
import FormControl from '@mui/material/FormControl';
import { DemoContainer ,DemoItem} from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
import DashboardLayout from './DashboardLayout';
import { EduContext } from '../MyContext';
import { useContext} from 'react';
import {useNavigate} from 'react-router-dom';


const gridStyle={display:"flex", flexWrap:"wrap", justifyContent:"space-between"};
const textStyle={margin: "20px",width: "40%"};


function SubDetails({index,detail,handleChange,handleDelete,handleChangeDate}){
    detail.id=index;
    console.log("detail id ",index);
    return (
        <>
            <Grid style={gridStyle}>
                <TextField 
                style={textStyle} id="outlined-helperText" label="University / Institute Name" name="University" value={detail.University} onChange={(e)=>handleChange(e,index)}/>
                <FormControl sx={{ m: 1, minWidth: 80}}>
                    <InputLabel id="demo-simple-select-autowidth-label">Degree</InputLabel>
                    <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={detail.Degree}
                    onChange={(e)=>handleChange(e,index)}
                    autoWidth
                    label="Degree"
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"BTech"}>B.Tech</MenuItem>
                    <MenuItem value={"BCom"}>B.Com</MenuItem>
                    <MenuItem value={"MTech"}>M.Tech</MenuItem>
                    </Select>
                </FormControl> 
            </Grid>

            <Grid>
                <TextField style={textStyle} id="outlined-helperText" label="Specialisation" name="Specialisation" value={detail.Specialisation} onChange={(e)=>handleChange(e,index)}/>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                    <DemoItem label="Uncontrolled picker" component="DateRangePicker">
                        <DateRangePicker
                            // defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                            onChange={(e)=>handleChangeDate(e,index)}
                        />
                    </DemoItem>
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>

            <Grid>
                {index>0 && <Button onClick={()=>handleDelete(index)}>Remove</Button>}
            </Grid>
        </>
    )
}

export default function secondpage(){
  const eduContext=useContext(EduContext);
  console.log("my edu context ",eduContext);
  const [details,setDetails]=useState([{}]);
  const navigate=useNavigate();


    const handleChange=(e,index)=>{
        console.log("index",index)
        let newDetails=details.map((item,ind)=>{
            console.log("e element ", e);
            if(index===ind){
               item={...item,[e.target.name]:e.target.value};
               return item;
            }else{
                return item;
            }
        })
        setDetails(newDetails);
        console.log("details ", details);
    }
    const handleChangeDate=(e,index)=>{
        console.log("index",index)
        let newDetails=details.map((item,ind)=>{
            console.log("e element ", e);
            if(index===ind){
               item={...item,"startDate":String(e[0].$d),"endDate":String(e[1].$d)};
               return item;
            }else{
                return item;
            }
        })
        setDetails(newDetails);
        console.log("details ", details);
    }
    const handleAdd=()=>{
        let components=[...details];    
        components.push({});
        setDetails(components);
    }

    const handleDelete=(idx)=>{
        let components=[...details];
        
        let newComponents=components.filter((item)=>{
            return item.id!==idx;
        })
        setDetails(newComponents);
    }

    const handleNext=()=>{
        console.log("On next details ", details);
        eduContext.setMultiEduDetails(details);
        navigate('/finalpage');
    }

    const handlePrev=()=>{
        console.log("On next details ", details);
        eduContext.setMultiEduDetails(details);
        navigate('/firstpage');
    }
    useEffect(()=>{
      setDetails(eduContext.multiEduDetails);
    },[]);


    return (
        <DashboardLayout>
           <Paper elevation={3} sx={{ marginRight: "25%", padding: "50px"}}>
                <Box  style={{disply: "flex",width : '100%', alignContent:"space-between" , gap: "20px" , height:"fit-content",}} >
                    <Grid style={gridStyle}>
                        <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                        Education Details
                        </Typography>
                        
                        <Button onClick={handleAdd}>Add More</Button>
                    </Grid>
                {
                    details.map((item, index)=>{
                        return (
                        <SubDetails key={index} index={index} detail={item}  handleChange={handleChange} handleDelete={handleDelete} handleChangeDate={handleChangeDate}/>
                        );
                    })
                }
                </Box>
                <Button onClick={handleNext}>Next</Button>
                <Button onClick={handlePrev}>Prev</Button>
           </Paper>
        </DashboardLayout>
    )
}