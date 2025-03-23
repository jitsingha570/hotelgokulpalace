import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";

import Home from "./sections/home";
import Rooms from "./sections/rooms";

import Registration from "./pages/registration";
import Roomscreen from "./pages/roomscreen";

import Events from "./pages/events";
import Footer from "./sections/footer";

import Service from "./sections/service";
import Visitingplace from "./sections/visitingplace";

import Booking from "./pages/booking";
import Aboutus from "./pages/aboutus";


function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
             
                <Home />
                <Rooms />
                <Visitingplace />
                
                <Service />
                
                <Footer />
              </>
            }
          />
         
          <Route path="/registration" element={<Registration />} />
          <Route path="/roomscreen" element={<Roomscreen />} />
         
          <Route path="/events" element={<Events />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    overflowX: "hidden", // Hide horizontal scrollbar
  },
};

export default App;