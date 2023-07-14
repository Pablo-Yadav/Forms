import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import TelInput from "./TelInput/TelInput";

export default function BasicForm() {
  let initialDetails = {
    firstName: { val: "", err: false, required: true },
    lastName: { val: "", err: false },
    email: { val: "", err: false, required: true },
    contact: "",
    sec_email: { val: "", err: false },
    alt_contact: "",
    summary: "",
  };
  const [details, setDetails] = useState(initialDetails);

  function handleSend() {
    try {
      let flag = false;
      for (let i in details) {
        if (details[i]?.err === true) {
          console.log(`Error in ${i} field`);
          flag = true;
        }
        if (details[i]?.required === true && details[i]?.val.length === 0) {
          console.log(`${i} ia a Required field`);
          flag = true;
        }
      }
      if (flag) {
        throw "ERROR!!!";
      }
      console.log(details);
    } catch (error) {
      // throw "ERROR!!!";
      // console.log(error)
    }
  }

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
    <>
      <Paper elevation={3}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            padding: 5,
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 2 }}>
            Basic Details
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="stretch"
          >
            <Grid
              item
              // spacing={5}
              display="flex"
              justifyContent="space-between"
              gap="3vw"
              alignItems="stretch"
              width="100%"
            >
              <TextField
                required
                id="outlined-basic"
                label="First Name"
                // label="Required"
                variant="outlined"
                // width="50%"
                // value={details.firstName.val}
                style={{ width: "45%" }}
                onChange={debounce(function (e) {
                  let newFirstName;

                  if (
                    !details.firstName.val.match(/^[A-Za-z]+$/gi) &&
                    details.firstName.val.length > 0
                  ) {
                    newFirstName = {
                      ...details.firstName,
                      val: e.target.value,
                      err: true,
                    };
                  } else {
                    newFirstName = {
                      ...details.firstName,
                      val: e.target.value,
                      err: false,
                    };
                  }

                  setDetails({
                    ...details,
                    firstName: newFirstName,
                  });
                }, 500)}
                error={
                  !details.firstName.val.match(/^[A-Za-z]+$/gi) &&
                  details.firstName.val.length > 0
                }
                helperText={
                  details.firstName.val.match(/^[A-Za-z]+$/gi) ||
                  details.firstName.val.length <= 0
                    ? ""
                    : "Please Enter a valid First Name!"
                }
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                // value={details.lastName.val}
                style={{ width: "45%" }}
                onChange={debounce(function (e) {
                  let newVal;

                  if (
                    !details.lastName.val.match(/^[A-Za-z]+$/gi) &&
                    details.lastName.val.length > 0
                  ) {
                    newVal = {
                      ...details.lastName,
                      val: e.target.value,
                      err: true,
                    };
                  } else {
                    newVal = {
                      ...details.lastName,
                      val: e.target.value,
                      err: false,
                    };
                  }

                  setDetails({
                    ...details,
                    lastName: newVal,
                  });
                }, 500)}
                error={
                  !details.lastName.val.match(/^[A-Za-z]+$/gi) &&
                  details.lastName.val.length > 0
                }
                helperText={
                  details.lastName.val.match(/^[A-Za-z]+$/gi) ||
                  details.lastName.val.length <= 0
                    ? ""
                    : "Please Enter a valid Last Name!"
                }
              />
            </Grid>

            <Grid
              item
              // spacing={5}
              display="flex"
              justifyContent="space-between"
              gap="3vw"
              alignItems="stretch"
              width="100%"
            >
              <TextField
                required
                id="outlined-basic"
                label="Email ID"
                variant="outlined"
                // value={details.email.val}
                style={{ width: "45%" }}
                onChange={debounce(function (e) {
                  let newVal;

                  if (
                    // !details.email.val.match(
                    //   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    // ) &&
                    // details.email.val.length > 0
                    !details.email.val.match(
                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    ) &&
                    details.email.val.length > 0
                  ) {
                    newVal = {
                      ...details.email,
                      val: e.target.value,
                      err: false,
                    };
                  } else {
                    newVal = {
                      ...details.email,
                      val: e.target.value,
                      err: true,
                    };
                  }

                  setDetails({ ...details, email: newVal });
                }, 500)}
                //   (e) => {
                //   setDetails({ ...details, email: e.target.value });
                //   // console.log(details.email);
                // }

                error={
                  !details.email.val.match(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  ) && details.email.val.length > 0
                }
                helperText={
                  details.email.val.match(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  ) || details.email.val.length <= 0
                    ? ""
                    : "Please Enter a valid Email!"
                }
              />
              {/* <MuiTelInput
                label="Contact Number"
                fullWidth
                style={{ width: "45%" }}
                onChange={(e) =>
                  // setDetails({ ...details, contact: e.target.value })
                  console.log(e)
                }
              /> */}
              <TelInput
                label="Contact Number"
                setDetails={setDetails}
                details={details}
                stateKey="contact"
              />
              {/* <TextField id="outlined-basic" label="Contact Number" type="number" variant="outlined" /> */}
            </Grid>

            <Grid
              item
              // spacing={5}
              display="flex"
              justifyContent="space-between"
              gap="3vw"
              alignItems="stretch"
              width="100%"
            >
              <TextField
                id="outlined-basic"
                label="Secondary Email ID (Optional)"
                // value={details.sec_email.val}
                variant="outlined"
                style={{ width: "45%" }}
                onChange={debounce(function (e) {
                  let newVal;

                  if (
                    // !details.sec_email.val.match(
                    //   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    // ) &&
                    // details.sec_email.val.length > 0
                    !details.sec_email.val.match(
                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                    ) &&
                    details.sec_email.val.length > 0
                  ) {
                    newVal = {
                      ...details.sec_email,
                      val: e.target.value,
                      err: false,
                    };
                  } else {
                    newVal = {
                      ...details.sec_email,
                      val: e.target.value,
                      err: true,
                    };
                  }

                  setDetails({ ...details, sec_email: newVal });
                }, 500)}
                error={
                  !details.sec_email.val.match(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  ) && details.sec_email.val.length > 0
                }
                helperText={
                  details.sec_email.val.match(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                  ) || details.sec_email.val.length <= 0
                    ? ""
                    : "Please Enter a valid Secondary Email!"
                }
              />
              <TelInput
                label="Alternate Contact No."
                setDetails={setDetails}
                details={details}
                stateKey="alt_contact"
              />
            </Grid>

            <Grid
              item
              display="flex"
              justifyContent="space-between"
              gap="3vw"
              alignItems="stretch"
              width="100%"
            >
              <TextField
                id="outlined-multiline-flexible"
                label="Profile Summary"
                multiline
                rows={4}
                style={{ width: "100%" }}
                onChange={(e) =>
                  setDetails({ ...details, summary: e.target.value })
                }
              />
            </Grid>

            <Grid
              item
              // spacing={5}
              display="flex"
              justifyContent="center"
              gap="3vw"
              alignItems="stretch"
              width="100%"
            >
              <Button
                variant="contained"
                type="submit"
                onClick={() => {
                  handleSend();
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}