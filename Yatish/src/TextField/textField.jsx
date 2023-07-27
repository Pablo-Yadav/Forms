import TextField from '@mui/material/TextField';

export default function TextFieldComponent(props){
return(
    <TextField 
    
    onChange={(e)=>{
        props.handleChange(e,props.ID,props.name);
    }}
    id={props.id} 
    label={props.label} 
    variant={props.variant} 
    value={props.value} 
    name={props.name}
    required={true} 
    style={props.style}
    />
);
}

// handleChange(func,delay,name, e)(props.required)