import MuiPhoneNumber from 'material-ui-phone-number';

export default function PhoneNumber(props){
  return(
    <MuiPhoneNumber onChange={(e)=>{props.handleChangeField(props.name,e);}}
    defaultCountry={'us'}
    id={props.id} 
    label={props.label} 
    variant={props.variant} 
    value={props.value} 
    name={props.name} 
    required={props.required} 
    multiline={props.multiline} 
    error={props.error} 
    style={props.style}
    helperText={props.helperText}
    />
  );
}