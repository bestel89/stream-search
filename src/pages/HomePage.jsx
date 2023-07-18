import { useState, useEffect } from "react"
import * as settingsAPI from "../utilities/settings-api"
import SearchBar from "../components/SearchBar"
import YourWatchlist from "../components/YourWatchlist"
import NoServices from "../components/NoServices"
import NoWatchlist from "../components/NoWatchlist"
import { Container } from "react-bootstrap"

export default function HomePage({ user }) {
  const [profile, setProfile] = useState(null)


  useEffect(() => {
    getUserProfile(user._id)
  }, [user])


  async function getUserProfile(userId) {
    const foundProfile = await settingsAPI.getProfile(userId)
    setProfile(foundProfile)
  }


  return (
    <>
      <SearchBar />
      {profile && profile.services.length === 0 && profile.watchlist.length === 0 ? (
        <>
            <Container className="my-4">
                <h2>Welcome {user.name}</h2>
                <NoServices />
                <NoWatchlist />
            </Container>
        </>
        ) : profile && profile.watchlist.length === 0 ? (
        <>
            <Container className="my-4">
                <h1>Welcome {user.name}</h1>
                <NoWatchlist />
            </Container>
        </>
        ) : profile && profile.services.length > 0 && profile.watchlist.length > 0 ? (
            <Container className="my-4">
                <h1>Welcome {user.name}</h1>
                <YourWatchlist user={user} profile={profile} setProfile={setProfile} getUserProfile={getUserProfile} />
            </Container>
      ) : null}
    </>
  );
}

