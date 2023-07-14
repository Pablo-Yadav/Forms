import TextFieldComponent from "../TextField/textField";
import DatePicker from '../DatePicker/Date_picker';

import Grid from '@mui/material/Grid';

export default function EducationComponent(props){
   
    return(
        <Grid 
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="stretch"
        marginBottom="10px"
         >
          <Grid item
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="stretch"
            gap="12em"
          >

          <TextFieldComponent
         ID={props.ID}
         value={props.item["university-name"]}
         handleChange={props.handleChange}
         id="fname" 
         label="University/Institution Name" 
         variant="outlined" 
         style={{width:"45%"}}
         name="university-name" 
        />

        <TextFieldComponent 
                ID={props.ID}
                value={props.item["degree"]}
                handleChange={props.handleChange}
                id="lname" 
                label="Degree" 
                variant="outlined" 
                name="degree" 
         style={{width:"45%"}}

        />
          </Grid>

          <Grid item
            display="flex"
            justifyContent="space-between"
            width="100%"
            alignItems="stretch"
            gap="2em"
          >

          <TextFieldComponent
         ID={props.ID}
         value={props.item["specialization"]}
         handleChange={props.handleChange}
         id="fn" 
         label="Specialization" 
         variant="outlined" 
         style={{width:"43.3%"}}
         name="specialization" 
        />

        {/* <div className="Dates" style={{display:"flex", gap:"3vw",margin:"0"}}> */}
          <DatePicker 
          ID={props.ID}
          style={{padding:"0"}}
          item={props.item}
          value={props.item["start-date"]}
          handleChange={props.handleChange}
          label="Start-Date" 
          name="start-date"/>
          <DatePicker 
          ID={props.ID}
          value={props.item["end-date"]}
          item={props.item}
          handleChange={props.handleChange}
          label="End-Date" 
          name="end-date"/>
        
          </Grid>

        
        </Grid>
    );
}