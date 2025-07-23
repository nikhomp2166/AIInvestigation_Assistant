import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EvidenceDashboard from "./pages/EvidenceDashboard";
import Interrogation from "./pages/Interrogation";
import CaseDetail from "./pages/CaseDetail";
import Predictive from "./pages/Predictive";

function App() {
  return (
    <Router>
      <div className="container mx-auto py-8">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cases/:id" element={<CaseDetail />} />
          <Route path="/evidence" element={<EvidenceDashboard />} />
          <Route path="/interrogation" element={<Interrogation />} />
          <Route path="/predictive" element={<Predictive />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;