import { MuiTelInput } from "mui-tel-input";

export default function TelInput(props) {
  let object = { ...props.details };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  return (
    <MuiTelInput
      label={props.label}
      value={props.details[props.stateKey]}
      style={{ width: "45%" }}
      onChange={
        // debounce(function (e) {
        //   let newVal;

        //   if (
        //     !props.details[props.stateKey].val.match(
        //       /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        //     ) &&
        //     props.details[props.stateKey].val.length > 0
        //   ) {
        //     newVal = {
        //       ...props.details[props.stateKey],
        //       val: e.target.value,
        //       err: true,
        //     };
        //   } else {
        //     newVal = {
        //       ...props.details[props.stateKey],
        //       val: e.target.value,
        //     };
        //   }
        //   object[props.stateKey] = newVal;
        //   props.setDetails(object);
        // }, 500)
        (e) => {
        object[props.stateKey] = e;
        props.setDetails(object);
        }
      }
      //   inputProps={{maxLength: 12}}
      //   maxLength={10}
      error={
        !props.details[props.stateKey]
          .split(" ")
          .join("")
          .match(/^(\+\d{1,3}?)?\d{10}$/) &&
        props.details[props.stateKey].length > 0
      }
      helperText={
        props.details[props.stateKey]
          .split(" ")
          .join("")
          .match(/^(\+\d{1,3}?)?\d{10}$/) ||
        props.details[props.stateKey].length <= 0
          ? ""
          : `Please Enter a valid ${props.stateKey}!`
      }
    />
  );
}
