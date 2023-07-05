import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'
import { useState } from "react";

export default function AuthPage({ setUser }) {
  const [uiState, setUiState] = useState({
    authState: 1
  });

  function handleUiStateChange() {
    setUiState((previousState) => ({
      authState: -previousState.authState
    }));
  }

  return (
    <main>
      {uiState.authState === 1 ? (
        <>
          <h1>Sign Up</h1>
          <div className="AuthPage">
            <div className="logoandbtn">
              <div className="Logo">
                <div>SEI</div>
                <div>CAFE</div>
              </div>
              <button onClick={handleUiStateChange}>LOGIN</button>
            </div>
            <SignUpForm setUser={setUser} />
          </div>
        </>
      ) : (
        <>
          <h1>Login</h1>
          <div className="AuthPage">
            <div className="logoandbtn">
              <div className="Logo">
                <div>SEI</div>
                <div>CAFE</div>
              </div>
              <button onClick={handleUiStateChange}>SIGN UP</button>
            </div>
            <LoginForm setUser={setUser} />
          </div>
        </>
      )}
    </main>
  );
}