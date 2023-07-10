import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../utilities/users-service'
import './App.css'
import AuthPage from './AuthPage'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import NavBar from '../components/NavBar'
import LandingPage from './LandingPage'
import SearchResultsPage from './SearchResultsPage'


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App" data-bs-theme="dark">
      <NavBar user={user} />
      { user ?
          <>
            <Routes>
              {/* ROUTES AVAILABLE TO LOGGED IN USERS */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/searchresults" element={<SearchResultsPage />} />
            </Routes>
          </>
          :
          <Routes>
            {/* ROUTES AVAILABLE TO ANON USERS */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<AuthPage setUser={setUser}/>} />
            <Route path="/login" element={<LoginPage setUser={setUser}/>} />
          </Routes>
      }
    </main>
  );
}
