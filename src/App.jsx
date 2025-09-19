import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from React Router
import RoomKeyLanding from "./components/landingpage"; // RoomKeyLanding component
import Map from "./components/Map"; // Map component
import PhotoGallery from "./components/gallery"; // PhotoGallery component
// Uncomment other components once you create them:
// import RoomListings from "./components/RoomListings"; // RoomListings component
// import Reviews from "./components/Reviews"; // Reviews component
// import FAQ from "./components/FAQ"; // FAQ component
// import Contact from "./components/Contact"; // Contact component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for all the pages */}
        <Route path="/" element={<RoomKeyLanding />} /> {/* Home/Landing page */}
        <Route path="/gallery" element={<PhotoGallery />} /> {/* Photo Gallery page */}
        <Route path="/location" element={<Map />} />  {/* Map page (Location) */}
        
        {/* Uncomment and add these routes if the respective components are created */}
        {/* <Route path="/listings" element={<RoomListings />} /> */}
        {/* <Route path="/reviews" element={<Reviews />} /> */}
        {/* <Route path="/faq" element={<FAQ />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
