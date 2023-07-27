import { useState } from 'react'

import Button from '@mui/material/Button';
import TextFieldComponent from './TextField/textField';
import "./App.css"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import DatePicker from './DatePicker/Date_picker';
import EducationComponent from './EducationComponent/educationComponent';
import RemoveButton from './RemoveButton/removeButton';
import dayjs from 'dayjs';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
const today = dayjs();
const tomorrow = dayjs().add(1, 'day');
let initialComponent={
    "university-name":"",
    "degree":"",
    "specialization":"",
    "start-date":"",
    "end-date":""
}

let initialDate={
    "start-date":{
        "minDate":"",
        "maxDate":today
    },
    "end-date":{
        "minDate":"",
        "maxDate":today
    }
}
let value1=0;
export default function Education(){
    
    let [educationComponent,setEducationComponent]=useState([initialComponent]);
    let [dateError,setdateError]=useState(initialDate);
    let [allFilled,setAllFilled]=useState(false);
    //let [components,setComponents]=useState([]);
    
    function disabled(){
        let flg1=true;
        outer:for(let item of educationComponent){
            // if(Object.keys(item).length===0 || Object.keys(item).length!==5){
            //     flg1=false;
            //     break;
            // }
            for(let key in item){
            if((item ?.[key])===""){
                flg1=false;
            break outer;
            }
            }  
        }

           return flg1;
    }
    function handleClick(){
        let temp = [...educationComponent]
        temp.push(initialComponent);
        setEducationComponent(temp);
       
    }


    function handleRemove(index){
         let newArray=[...educationComponent];
        //  newArray=newArray.filter(item=>newArray.indexOf(item)!==index);
        newArray.splice(index,1);
        
        // let newComp= educationComponent.filter(item=>educationComponent.indexOf(item)!==index)
        setEducationComponent(newArray);
     
    }



    function handleChange(e,index,key)
    {
       let updateDetails=[...educationComponent];

       let newObject=updateDetails[index];
       
       if(key!=="start-date" && key!=="end-date")
       {
        newObject={...newObject,[key]:e.target.value};
       }else{
        newObject={...newObject,[key]:`${e["$M"]+1}/${e["$D"]}/${e["$y"]}`};
       }
      
       let newArray1=[
        ...updateDetails.slice(0,index),
        newObject
        ,
        ...updateDetails.slice(index+1)
       ];
       setEducationComponent(newArray1);

    
    }

 console.log("Component Array is ", educationComponent);
//   console.log("AllFilled value is ", allFilled);
    return (
        <div style={{backgroundColor:"white",
         padding:"20px"
        }}>


        <Grid container spacing={2}>
        <Grid item
             display="flex"
             justifyContent="space-between"
            width="100%"
            alignItems="stretch"
            gap="2vw"
            >
            <h1 id="Head">Education Details</h1>
        <div className="add-button">
        <Button variant="outlined" onClick={handleClick}>ADD</Button>
       </div>

        </Grid>

        </Grid>
        {
            educationComponent.map((item,idx)=>{
                return(
                    <div key={idx}>
                        {idx>0 && <RemoveButton 
                           handleRemove={handleRemove}
                           idx={idx}
                        />}
                    <EducationComponent
                    ID={idx}
                    item={item}
                    handleChange={handleChange}/>
                    </div>
                );
            })
        }
    
        <Button variant="outlined" disabled={!disabled()}> Next </Button>
            
            
        </div>
        
    );


}