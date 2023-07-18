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
import SettingsPage from './SettingsPage'
import DetailsPage from './DetailsPage'
import Footer from '../components/Footer'

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App" data-bs-theme="dark" style={{
      minHeight: '100vh',
    }}>
      <NavBar user={user} setUser={setUser}/>
      <div className="App-content">
        { user ?
            <>
              <Routes>
                {/* ROUTES AVAILABLE TO LOGGED IN USERS */}
                <Route path="/home" element={<HomePage user={user}/>} />
                <Route path="/searchresults" element={<SearchResultsPage />} />
                <Route path="/settings" element={<SettingsPage user={user}/>} />
                <Route path="/details" element={<DetailsPage user={user}/>} />
              </Routes>
            </>
            :
            <Routes>
              {/* ROUTES AVAILABLE TO ANON USERS */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<AuthPage user={user} setUser={setUser}/>} />
              <Route path="/login" element={<LoginPage setUser={setUser}/>} />
            </Routes>
        }
      </div>
      <Footer />
    </main>
  )
}
