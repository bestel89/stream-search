import { useState, useEffect } from "react";
import * as settingsAPI from "../utilities/settings-api"
import SearchBar from "../components/SearchBar";
import YourWatchlist from "../components/YourWatchlist";


export default function HomePage({user}) {

    const [profile, setProfile] = useState(null)

    useEffect(() => {
        getUserProfile(user._id)
    }, [user])

    async function getUserProfile(userId) {
        const foundProfile = await settingsAPI.getProfile(userId)
        setProfile(foundProfile)
        // console.log('found profile ',foundProfile)
    }

    // console.log('profile on home component ', profile)

    return (
        <>
            <SearchBar />
            {profile && 
                <YourWatchlist user={user} profile={profile} setProfile={setProfile} getUserProfile={getUserProfile}/>
            }
        </>
    )
}