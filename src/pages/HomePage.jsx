import { useState, useRef, useEffect } from "react";
import * as settingsAPI from "../utilities/settings-api"
import SearchBar from "../components/SearchBar";
import YourWatchlist from "../components/YourWatchlist";


export default function HomePage({user}) {

    const [profile, setProfile] = useState({})
    const setProfileRef = useRef(setProfile)

    useEffect(() => {
        getUserProfile(user._id)
    }, [])

    async function getUserProfile(userId) {
        const foundProfile = await settingsAPI.getProfile(userId)
        setProfileRef.current(foundProfile)
    }

    return (
        <>
            <SearchBar />
            <YourWatchlist profile={profile}/>
        </>
    )
}