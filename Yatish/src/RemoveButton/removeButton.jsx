import Button from '@mui/material/Button';


export default function RemoveButton(props){
  return (
    <Button variant="outlined" style={{marginBottom:"10px"}} onClick={()=>{props.handleRemove(props.idx);}}> Remove</Button>
  );
}
