import { useState } from "react";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome";
import UploadDocument from "./components/upload-document";
import Dashboard from "./components/dashboard";
import Navbar from "./components/Navbar";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import Login from "./components/login";
import RetrieveFileFromIPFS from "./components/upload-document/retrive-doc";
import Help from "./components/help";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userAddress, setUserAddress] = useState(null);

  const handleAuthentication = (address: String) => {
    setIsAuthenticated(true);
    setUserAddress(address);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login/"
            element={<Login onAuthenticate={handleAuthentication} />}
          />
          <Route path="/welcome/" element={<Welcome />} />
          <Route path="/retrive/" element={<RetrieveFileFromIPFS />} />
          <Route
            path="/upload/"
            element={
              <UploadDocument
                isAuthenticated={isAuthenticated}
                userAddress={userAddress}
              />
            }
          />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/contact/" element={<ContactUs />} />
          <Route path="/help/" element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
