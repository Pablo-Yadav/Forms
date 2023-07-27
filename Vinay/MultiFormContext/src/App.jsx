import './App.css'
import FirstPage from './Components/FirstPage'
import SecondPage from './Components/SecondPage'
import DashboardLayout from '../src/Components/DashboardLayout';
import PageNotFound from './PageNotFound';
import FinalPage from './Components/FinalPage';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { BasicContext, EduContext } from './MyContext';
import { useState } from 'react';
function App() {
  const [basicDetails,setBasicDetails]=useState({})
  const [multiEduDetails,setMultiEduDetails]=useState([{}]);
  return (
    <>
     
      <BrowserRouter>
        <Routes>
            <Route path="/" element={
                  <DashboardLayout/>
            }/>
            <Route path="/firstpage" element={
              <BasicContext.Provider value={{basicDetails,setBasicDetails}}>
                  <FirstPage/>
              </BasicContext.Provider>
            }/>
            <Route path="/secondpage" element={
              <EduContext.Provider value={{multiEduDetails,setMultiEduDetails}}>
                  <SecondPage/>
              </EduContext.Provider>
            }/>
            <Route path="/finalpage" element={<FinalPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
