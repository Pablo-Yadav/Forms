import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';



export default function BasicDatePicker(props) {
  
  
  
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DatePicker']}>
        <DatePicker 
        
        // value={props.item[props.name]}
         onChange={(e)=>{
          // console.log("error object is ",e);
            props.handleChange(e,props.ID,props.name);
         }}
         
        required={true}
        label={props.label} 
        name={props.name}  />
      </DemoContainer>
    </LocalizationProvider>
  );
}