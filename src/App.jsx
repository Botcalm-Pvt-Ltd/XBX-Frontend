import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Leadboard from "./pages/Leadboard";
import DashboardLayout from "./components/DashboardLayout";
import DashboardBackground from "./components/DashboardBackground";
import Header from "./components/Header";
import Analytics from "./pages/Analytics";
import Referrals from "./pages/Referrals";
import MobileHeader from "./components/MobileView/MobileHeader";
import Mobilefooter from "./components/MobileView/Mobilefooter";
import MobileDashboardBackground from "./components/MobileView/MobileDashboardBackground";
import Analytics_2 from "./pages/Analytics_2";
import DashboardBackground2 from "./components/DashboardBackground2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LandingPage />} path="/" />
        <Route element={ <>
              <Header/>
              <MobileHeader/>
              <DashboardLayout />
              <DashboardBackground />
              <MobileDashboardBackground />
              <Mobilefooter/>
            </>}>
          <Route element={<Leadboard />} path="/leadboard" />
          <Route element={<Referrals />} path="/referral" />
          <Route element={<Analytics />} path="/analytics" />
        </Route>
        <Route element={ <>
              <Header/>
              <MobileHeader/>
              <DashboardLayout />
              <DashboardBackground2 />
              <MobileDashboardBackground />
              <Mobilefooter/>
            </>}>
          <Route element={<Analytics_2 />} path="/analytics2" />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
