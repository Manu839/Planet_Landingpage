import {
  BrowserRouter as Router , Routes , Route
} from "react-router-dom";

import HomePage from "./routes/HomePage";
import VenusPage from "./routes/VenusPage";
import MercuryPage from "./routes/MercuryPage";
import MarsPage from "./routes/MarsPage";
import JupiterPage from "./routes/JupiterPage";
import SaturnPage from "./routes/SaturnPage";
import UranusPage from "./routes/UranusPage";
import NeptunePage from "./routes/NeptunePage";
import Navi from "./components/MainNavigation"
import React from 'react'

function App() {
  return (
<Router>
  <Navi/>
  <Routes>
     <Route path="/" element={<HomePage />}  />
      <Route path="venus" element={<VenusPage />}/>
      <Route
        path="mercury"
       element={<MercuryPage />}
    
     />
     <Route path="mars" element={<MarsPage />}  />
      <Route
        path="jupiter"
        element={<JupiterPage />}
     />
      <Route
        path="saturn"
        element={<SaturnPage />}
       />
      <Route
        path="uranus"
       element={<UranusPage />}

      />
      <Route
         path="neptune"
       element={<NeptunePage />}
      />
      </Routes>
 </Router>
  )
}

export default App

 
