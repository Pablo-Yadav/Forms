import React from 'react'
import { NavLink} from 'react-router-dom';
import '../App.css';
import { useContext } from 'react'

function MainContent(props){

  console.log("main content props",props);
  return (
    <>
    <div className='main-content'>
       {props.children}
    </div>
    </>
  )
}
function SideBar(){
  return (
    <div className='side-bar'>
      <NavLink to='/firstpage'>firstpage</NavLink>
      <br/>
      <NavLink to='/secondpage'>secondpage</NavLink>
    </div>
  )
}
function Header(props){
  return (
    <div className='header'>
      header
    </div>
  )
}
function DashboardLayout(props) {
  return (
   
      <div className='dashboard-layout'>
        <Header {...props}/>
          <div className='side-main-container'>
            <SideBar {...props}/>
            <MainContent {...props} />
          </div>
      </div>
  )
}

export default DashboardLayout
