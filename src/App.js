// import './normal.css';
// import './App.css';
// // import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
// import FormOut from './components/FormOut';
// import Subjects from './components/Subjects';
// import SelectSubject from './components/SelectSubject';
// import AddSubject from './components/AddSubject';
// import { useEffect, useState } from 'react';
// import SubList from './components/SubList';

// //to set from local storage

// const getLocalItems=()=>{
//   let list = localStorage.getItem('addList');
//   if (list){
//     return JSON.parse(localStorage.getItem('addList'));
//   }
//   else{
//     return [];
//   }
// };




//   function App() {
//     const [listSubject, setListSubject] = useState(getLocalItems());
  
//     const addList = (inputText) => {
//       if (inputText !== "") {
//         setListSubject([...listSubject, inputText]);
//       }
//     };
  
//     const deleteSubject = (subject) => {
//       setListSubject(listSubject.filter((item) => item !== subject));
//     };




//   // add data to localStorage
//   useEffect(()=>{
//     localStorage.setItem('addList',JSON.stringify(listSubject))
//   },[listSubject]);

//   return (
//     <div className="App">
//       <aside className="sidemenu">
//         {/* header  */}
//         <div className="side-menu-button">
//           <b>Subject List</b>
//         </div>
//         <hr className="hline" />

//         <h6 className="app-heading">Add Subject</h6>
//         <AddSubject addList={addList}/>
         
//          <hr/>
//          {listSubject.map((listItem,i)=>{
//           return(
//             <SubList key={i} item={listItem} onDelete={deleteSubject}/>
//           )
//          })}
//         <br />
//         <SelectSubject subjects={listSubject} />
//         <hr className="hline" />
        
//       </aside>
        
//       <FormOut listSubject={listSubject} /> 
         
      
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import "./App.css";
import FormOut from "./components/FormOut";
import Subjects from "./components/Subjects";
import SelectSubject from "./components/SelectSubject";
import AddSubject from "./components/AddSubject";
import { useEffect } from "react";
import SubList from "./components/SubList";

// ...

const getLocalItems=()=>{
  let list = localStorage.getItem('addList');
  if (list){
    return JSON.parse(localStorage.getItem('addList'));
  }
  else{
    return [];
  }
};

function App() {
  const [listSubject, setListSubject] = useState(getLocalItems());
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const addList = (inputText) => {
    if (inputText !== "") {
      setListSubject([...listSubject, inputText]);
    }
  };

  const deleteSubject = (subject) => {
    setListSubject(listSubject.filter((item) => item !== subject));
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("addList", JSON.stringify(listSubject));
  }, [listSubject]);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="App">
      <aside className={`sidemenu ${isSidebarCollapsed ? "collapsed" : ""}`}>
        {/* header  */}
        <div className="side-menu-button" onClick={toggleSidebar}>
          <b>Subject List</b>
        </div>
        <hr className="hline" />

        {!isSidebarCollapsed && (
          <>
            <h6 className="app-heading">Add Subject</h6>
            <AddSubject addList={addList} />

            <hr />
            {listSubject.map((listItem, i) => {
              return <SubList key={i} item={listItem} onDelete={deleteSubject} />;
            })}
            <br />
            <SelectSubject subjects={listSubject} />
            {/* <hr className="hline" /> */}
          </>
        )}
      </aside>

      {/* {isSidebarCollapsed && (
        <div className="sidebar-collapsed-button" onClick={toggleSidebar}>
          Open Sidebar
        </div>
      )} */}

      <FormOut listSubject={listSubject} />
    </div>
  );
}

export default App;
