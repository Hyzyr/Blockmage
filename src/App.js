import { Navigate, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import Home from "./pages/home/Home";
import Contacts from "./pages/contacts/Contacts";
import { useState } from "react";
import Header from "./components/base/Header";
import Footer from "./components/base/footer/Footer";

const App = () => {
  const [auth, setAuth] = useState(false);

  return (
    <>
      {!auth && (
        <Routes>
          <Route
            path="/"
            element={
              <ComingSoon
                onClick={() => {
                  setAuth(true);
                }}
              />
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      )}
      {auth && <AppInner />}
    </>
  );
};

const AppInner = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
