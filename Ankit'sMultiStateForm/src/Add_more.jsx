import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; 
import Button from '@mui/material/Button';
import BasicDatePicker from "./Date_picker";
import Edu_Form from "./EduForm";

export default function Add_more_page(){
const [data,setData] = useState([{University:'',Degree:'', Specialisation:''}]);
    const handleAdd=()=>{
        let temp=[...data];
        temp.push({University:'',Degree:'', Specialisation:''})
        setData(temp);
    }

    const handleRemove = (i) =>{
        const temp = [...data];
        let temp1 = temp.filter(item=>data.indexOf(item)!==i);
        setData(temp1);
    }

    const handleDisbale = () => {
        // console.log("props",props?.data)
        // console.log("univ",props?.data?.University)
        // console.log("degree",props?.data?.Degree)
        // console.log("spec",props?.data?.Specialisation)
        let arr=[]
        for(let i in data){
                arr.push(data[i]?.University?.length===0 || data[i]?.Degree?.length===0 
                || data[i]?.Specialisation?.length===0)
        }

        return arr.includes(true)
        // console.log(!(props?.data?.University?.length===0 || props?.data?.Degree?.length===0 
        //     || props?.data?.Specialisation?.length===0))
        //     return !(props?.data?.University?.length===0 || props?.data?.Degree?.length===0 
        //         || props?.data?.Specialisation?.length===0)
    }
    return(
        <>
        <div className = "body_comp">
            <h1 style={{display :"flex", width: "100vw", justifyContent:'center'}}>Basic Details</h1>
            <Grid style= {{border:"10px"}}> 
            <Button
                style = {{display: "flex",
                    justifyContent: "flex-end"}}
                sx={{ ml: 'auto' }}
                variant="outlined"
                onClick={handleAdd}
                >
                Add More
            </Button>
            </Grid>
            
            {data.map((item, idx) => {
                
                if(idx>0){
                    return (
                        <>
                        <hr/>
                    <Grid style= {{border:"10px"}}> 
                    <Button
                        style = {{display: "flex",
                        justifyContent: "flex-end"}}
                        sx={{ ml: 'auto' }}
                        variant="outlined"
                        onClick={()=>handleRemove(idx)}
                        >
                        Remove Section
                    </Button>
                    </Grid>
                    
                    <Edu_Form data={data} setData={setData} idx={idx}/>
                    </>
                   )
                }
                else
                return(
                    <Edu_Form data={data} setData={setData} idx={idx}/>
                )
            })}
            <hr/>
            <Button style = {{display: "flex", justifyContent:"flex-end"}}  
                        variant="contained" color="success"
                        disabled={handleDisbale() }           
                        >
                    Save
                </Button> 
            
        </div>
        </>
    )  
}