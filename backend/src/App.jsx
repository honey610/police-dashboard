// import React from 'react'
// import { Routes, Route } from "react-router-dom";
// import PoliceAppBar from "./components/PoliceAppBar";
// import Form from './components/Form';
// import HeatMap from './components/HeatMap';
// import TouristId from './components/TouristId';
// import TouristAlert from './components/TouristAlert';
// import Chart from './components/Chart';
// import Efir from './components/Efir';
// import Dashboard from './components/DashBoard';
// // import SideBar from './components/SideBar';
// //import './App.css'

// function App() {


//   return (
//     <>
//       <Routes>
//        <Route path="/" element={<PoliceAppBar />} />
//                <Route index element={<Dashboard />} /> {/* ✅ shows all components */}

//        <Route path='/efir' element={<Form/>}/>
//         <Route path="/heatmap" element={<HeatMap />} />
//         <Route path="/tourist-ids" element={<TouristId/>} />
//         <Route path="/alerts" element={<TouristAlert />} />
//         <Route path="/charts" element={<Chart/>} />
//         <Route path="/firs" element={<Efir/>} />
        
//       </Routes>
     
       
//     </>
//   )
// }

// export default App 

import React from "react";
import { Routes, Route } from "react-router-dom";
import PoliceAppBar from "./components/PoliceAppBar";
import Dashboard from "./components/DashBoard";
import Form from "./components/Form";
import HeatMap from "./components/HeatMap";
import TouristId from "./components/TouristId";
import TouristAlert from "./components/TouristAlert";
import Chart from "./components/Chart";
import Efir from "./components/Efir";
import AlertHistory from "./components/AlertHistory";

function App() {
  return (
    <Routes>
      {/* Layout Route -> PoliceAppBar is always visible */}
      <Route path="/" element={<PoliceAppBar />}>
        <Route index element={<Dashboard />} /> {/* ✅ default page */}
        <Route path="heatmap" element={<HeatMap />} />
        <Route path="tourist-ids" element={<TouristId />} />
        <Route path="alerts" element={<TouristAlert />} />
        <Route path="charts" element={<Chart />} />
        <Route path="firs" element={<Efir />} />
        <Route path="/efir" element={<Form />} />
        <Route path="alert-history" element={<AlertHistory />} />
      </Route>
    </Routes>
  );
}

export default App;

