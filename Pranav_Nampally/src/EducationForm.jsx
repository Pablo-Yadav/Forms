import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
// import TelInput from "./TelInput/TelInput";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddEdu from "./AddEdu";
import { Fragment } from "react";
import SendIcon from "@mui/icons-material/Send";

function EducationForm() {
  const [components, setComponents] = useState([
    { university: "", degree: "", specialisation: "", start: "", end: "" },
  ]);
  // const [disable, setDisable] = useState(true);

  function addEduForm() {
    let temp = [...components];
    temp.push({
      university: "",
      degree: "",
      specialisation: "",
      start: "",
      end: "",
    });
    setComponents(temp);
  }

  function removeEduForm(index) {
    let nextComponents = components.filter(
      (p) => components.indexOf(p) !== index
    );
    setComponents(nextComponents);
  }

  function disableSend() {
    let disabledArray = [];
    console.log("triggered");
    for (let form of components) {
      let values = Object.values(form).map((i) => {
        return i.length !== 0 ? false : true;
      });
      if (values.includes(true)) {
        disabledArray.push(true);
      } else {
        disabledArray.push(false);
      }
    }
    return disabledArray.includes(true);
  }

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    }();
  };

  return (
    <>
      <Paper elevation={3}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            padding: 5,
            // display: "flex",
            // justifyContent: "space-between"
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            item
            display="flex"
            justifyContent="space-between"
            gap="3vw"
            alignItems="stretch"
            width="100%"
          >
            <h4>Education Details</h4>
            <Button variant="contained" onClick={() => addEduForm()}>
              Add Form
            </Button>
          </Grid>

          {components.map((item, i) => {
            if (i !== 0) {
              return (
                <Fragment key={i}>
                  <Grid
                    item
                    display="flex"
                    justifyContent="flex-end"
                    gap="3vw"
                    alignItems="stretch"
                    width="100%"
                    marginTop={10}
                  >
                    <Button
                      variant="contained"
                      onClick={() => {
                        removeEduForm(i);
                      }}
                    >
                      Remove Form
                    </Button>
                  </Grid>
                  <AddEdu
                    key={i}
                    keyHelp={i}
                    components={components}
                    setComponents={setComponents}
                  />
                </Fragment>
              );
            } else {
              return (
                <Fragment key={i}>
                  <AddEdu
                    key={i}
                    keyHelp={i}
                    components={components}
                    setComponents={setComponents}
                  />
                </Fragment>
              );
            }
          })}

          <Grid
            item
            // spacing={5}
            marginTop={20}
            display="flex"
            justifyContent="flex-end"
            gap="3vw"
            alignItems="stretch"
            width="100%"
          >
            <Button
              variant="contained"
              type="submit"
              disabled={disableSend()}
              endIcon={<SendIcon />}
              // disabled={false}
              onClick={() => {
                console.log("Data Sent: ", components);
              }}
            >
              Send
            </Button>
            {/* <SendIcon/> */}
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

export default EducationForm;
