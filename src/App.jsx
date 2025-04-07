import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./views/auth/Login";
import Landing from "./views/landng/Landing";
import XSCoreConsumerFullCredit from "./views/pdf/consumer/XSCoreConsumerFullCredit";
import ConsumerBasicTrace from "./views/pdf/consumer/ConsumerBasicTrace";
import ConsumerBasicCredit from "./views/pdf/consumer/ConsumerBasicCredit";
import SnapCheck from "./views/pdf/consumer/SnapCheck";
import XscoreConsumerPrime from "./views/pdf/consumer/XscoreConsumerPrime";
import IScore from "./views/pdf/consumer/IScore";
import CommercialFullCredit from "./views/pdf/commercial/CommercialFullCredit";
import CommercialBasicCredit from "./views/pdf/commercial/CommercialBasicCredit";
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkExpiration } from "./redux/features/auth/authSlice";
import Dashboard from "./views/Dashboard";
import ConsumerFullCredit from "./views/pdf/consumer/ConsumerFullCredit";
import Kyc from "./views/pdf/consumer/Kyc";
import DirectorCreditReport from "./views/pdf/consumer/DirectorCreditReport";

function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(checkExpiration()); 
  }, [dispatch, location]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="auth/*" element={<Login />} />


      <Route path="" element={<PrivateRoute />}>
      <Route path="dashboard" element={<Dashboard />} />

      </Route>
      <Route path="consumer-kyc" element={<Kyc />} />
      <Route path="director" element={<DirectorCreditReport />} />
      <Route path="ConsumerFullCredit" element={<ConsumerFullCredit />} />
      <Route path="XSCoreConsumerFullCredit" element={<XSCoreConsumerFullCredit />} />
      <Route path="ConsumerBasicTrace" element={<ConsumerBasicTrace />} />
      <Route path="consumerbasiccredit" element={<ConsumerBasicCredit />} />
      <Route path="snapcheck" element={<SnapCheck />} />
      <Route path="xscoreconsumerprime" element={<XscoreConsumerPrime/>} />
      <Route path="iscore" element={<IScore/>} />
      <Route path="commercicalfullcredit" element={<CommercialFullCredit/>} />
      <Route path="commercicalbasiccredit" element={<CommercialBasicCredit/>} />
      </Routes>

  )
}

export default App
