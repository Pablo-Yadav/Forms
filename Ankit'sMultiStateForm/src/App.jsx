import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; // Grid version 1
import Button from '@mui/material/Button';
import BasicForm from './validation.jsx'
import Add_more_page from './Add_more';
import Edu_form from './EduForm';
function App() {
  return(
    <>
      {/* // <BasicForm/>   */}
      <Add_more_page/>
    </>
    )
}
export default App
