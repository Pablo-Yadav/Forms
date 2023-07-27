// import * as React from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// // import { DateRange } from '@mui/x-date-pickers-pro';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// export default function DateRangePickerValue() {
//   // const [value, setValue] = React.useState<DateRange<Dayjs>>([
//   //   dayjs('2022-04-17'),
//   //   dayjs('2022-04-21'),
//   // ]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
//         <DemoItem label="Select Date" component="DateRangePicker" disableFuture>
//           <DateRangePicker
//             calendars={2}
//             // defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
//           />
//         </DemoItem>
         
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }




// import Grid from '@mui/material/Grid';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// const today = dayjs();

// export default function ValidationBehaviorView() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Grid
//         container
//         columns={{ xs: 1, lg: 2 }}
//         spacing={4}
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Grid item>
//           <DateCalendar defaultValue={today} disableFuture />
//         </Grid>
//       </Grid>
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');
const todayStartOfTheDay = today.startOf('day');

export default function DateValidationDisablePast() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoItem label="Start Date">
            <DatePicker
              disableFuture
              views={['day', 'month', 'year']}
            />
          </DemoItem>

          <DemoItem style = {{padding: "10px", marginTop:"10px"}} label="End Date">
            <DatePicker
              disablePast
              views={['day', 'month', 'year']}
            />
          </DemoItem>
          </LocalizationProvider>
        );
      }