import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./views/auth/Login";
import Landing from "./views/landng/Landing";

import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


function App() {



  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="auth/*" element={<Login />} />

      </Routes>

  )
}

export default App
