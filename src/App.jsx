import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"
import Jobs from "./pages/Jobs"
import Candidates from "./pages/Candidates"
import CandidateProfile from "./pages/CandidateProfile"
import Scheduler from "./pages/Scheduler"
import Insights from "./pages/Insights"
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/jobs" element={<Jobs />} />
          <Route path="/admin/candidates" element={<Candidates />} />
          <Route path="/admin/candidates/:id" element={<CandidateProfile />} />
          <Route path="/admin/scheduler" element={<Scheduler />} />
          <Route path="/admin/insights" element={<Insights />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
