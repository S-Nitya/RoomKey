import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import necessary components from React Router
import RoomKeyLanding from "./components/landingpage"; // RoomKeyLanding component
import Map from "./components/Map"; // Map component
import PhotoGallery from "./components/gallery"; // PhotoGallery component
// Uncomment other components once you create them:
import RoomsPage from "./components/roomlisting"; // RoomListings component
import ReviewsPage from "./components/reviews_page"; // Reviews component
import FAQPage from "./components/faq"; // FAQ component
import ContactPage from "./components/contact"; // Contact component

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for all the pages */}
        <Route path="/" element={<RoomKeyLanding />} /> {/* Home/Landing page */}
        <Route path="/gallery" element={<PhotoGallery />} /> {/* Photo Gallery page */}
        <Route path="/location" element={<Map />} />  {/* Map page (Location) */}
        
        {/* Uncomment and add these routes if the respective components are created */}
        <Route path="/listings" element={<RoomsPage/>} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
