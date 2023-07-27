import * as React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BasicDetails from "./BasicDetails";
import EducationDetails from "./EducationDetails";

const MyContext = React.createContext();
function App()
{
    const [data, setData] = React.useState({});
    return (
        <>
        <MyContext.Provider value={{data, setData}}>
            <BrowserRouter>
            <Routes>
                <Route path="/basic" element={<BasicDetails />}/>
                <Route path="/edu" element={<EducationDetails />}/>
            </Routes>
            </BrowserRouter>
        </MyContext.Provider>
        </>
    )
}
export {MyContext, App}