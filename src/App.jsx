import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import LoginPage from "./routes/LoginPage";
import LeaderboardPage from "./routes/LeaderboardPage";
import QuizPage from "./routes/QuizPage";
import './App.css'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </Router>
  )
}

export default App
