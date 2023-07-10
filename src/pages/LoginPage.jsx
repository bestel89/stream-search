import LoginForm from "../components/LoginForm";

export default function LoginPage({setUser}) {
    return (
        <>
        <h1>LoginPage</h1>
        <LoginForm setUser={setUser}/>
        </>
    )
}