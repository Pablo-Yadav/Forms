import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { createTheme, ThemeProvider } from "@mui/material";

const shortcutsItems = [
  {
    label: "This Week",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("week"), today.endOf("week")];
    },
  },
  {
    label: "Last Week",
    getValue: () => {
      const today = dayjs();
      const prevWeek = today.subtract(7, "day");
      return [prevWeek.startOf("week"), prevWeek.endOf("week")];
    },
  },
  {
    label: "Last 7 Days",
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7, "day"), today];
    },
  },
  {
    label: "Current Month",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
  {
    label: "Next Month",
    getValue: () => {
      const today = dayjs();
      const startOfNextMonth = today.endOf("month").add(1, "day");
      return [startOfNextMonth, startOfNextMonth.endOf("month")];
    },
  },
  { label: "Reset", getValue: () => [null, null] },
];

// const formLabelsTheme = createMuiTheme({
//   overrides: {
//     MuiFormLabel: {
//       asterisk: {
//         color: "#db3131",
//         "&$error": {
//           color: "#db3131",
//         },
//       },
//     },
//   },
// });

// export const theme = createTheme({
//   components: {
//     MuiFormLabel: {
//       styleOverrides: {
//         asterisk: {
//           color: "#db3131",
//           "&$error": {
//             color: "#db3131",
//           },
//         },
//       },
//     },
//   },
// });
const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: { color: "red" },
      },
    },
  },
});

function AddEdu(props) {
    
  const handleUpdate = (val, idx, key) => {
    let temp = [...props.components];
    let targetObj = { ...temp[idx] };
    targetObj[key] = val;
    temp[idx] = targetObj;
    props.setComponents(temp);
  };

  const handleUpdateDate = (val, idx) => {
    let temp = [...props.components];
    let targetObj = { ...temp[idx] };
    targetObj["start"] = String(val[0]?.$d);
    targetObj["end"] = String(val[1]?.$d);
    temp[idx] = targetObj;
    props.setComponents(temp);
  };
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
    <Grid
      container
      spacing={2}
      marginTop={10}
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
        key={props.keyHelp}
      >
        <ThemeProvider theme={theme}>
          <TextField
            required
            //   InputLabelProps={{
            //     shrink: true,
            //     FormLabelClasses: {
            //       asterisk: this.props.classes.labelAsterisk,
            //     },
            //   }}
            // theme={theme}
            className="starlabel"
            id="outlined-basic"
            label="University/Institution"
            variant="outlined"
            value={props?.components?.university}
            key={props.keyHelp}
            style={{ width: "45%" }}
            onChange={(e) => {
              handleUpdate(e.target.value, props?.keyHelp, "university");
            }}
          />
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <TextField
            required
            id="outlined-basic"
            label="Degree"
            variant="outlined"
            value={props?.components?.degree}
            style={{ width: "45%" }}
            key={props.keyHelp + 1}
            onChange={(e) => {
              handleUpdate(e.target.value, props?.keyHelp, "degree");
            }}
          />
        </ThemeProvider>
      </Grid>

      <Grid
        item
        display="flex"
        justifyContent="space-between"
        gap="3vw"
        alignItems="flex-end"
        width="100%"
        key={props.keyHelp + 1}
      >
        <ThemeProvider theme={theme}>
          <TextField
            required
            id="outlined-basic"
            label="Specialisation"
            variant="outlined"
            key={props.keyHelp}
            value={props?.components?.specialisation}
            style={{ width: "45%" }}
            onChange={(e) => {
              handleUpdate(e.target.value, props?.keyHelp, "specialisation");
            }}
          />
        </ThemeProvider>
        <Grid
          item
          display="flex"
          justifyContent="space-between"
          gap="3vw"
          alignItems="stretch"
          width="45%"
          key={props.keyHelp + 1}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker", "DateRangePicker"]}>
              <DemoItem label="Time Period" component="DateRangePicker">
                <DateRangePicker
                  // defaultValue={[dayjs("2022-04-17"), dayjs("2022-04-21")]}
                  calendars={2}
                  slotProps={{
                    shortcuts: {
                      items: shortcutsItems,
                    },
                    actionBar: { actions: [] },
                  }}
                  //   value={props?.components?.start}
                  onChange={(e) => {
                    handleUpdateDate(e, props?.keyHelp);
                  }}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddEdu;
