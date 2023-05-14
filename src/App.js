import { Navigate, Route, Routes } from "react-router-dom";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import Home from "./pages/home/Home";
import { useState } from "react";
import Header from "./components/base/Header";

const App = () => {
  const [auth, setAuth] = useState(true);

  return (
    <>
      {!auth && (
        <Routes>
          <Route path="/" element={<ComingSoon />} />
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
        <Route path="/contact-us" element={<Home />} />
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};

export default App;
