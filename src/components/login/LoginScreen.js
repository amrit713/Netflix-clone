import React, {useState} from 'react'
import "./loginScreen.css"
import SignupScreen from "../login/SignupScreen";


function LoginScreen() {

    const [signIn, setSignIn] = useState(false);
    

    return (
        <div className="loginScreen">
            < div className="loginScreen_background">

                <img className="loginScreen_logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                <button className="loginScreen_btn" onClick={()=>setSignIn(true)} >
                    Sign In
                </button>

                <div className="loginScreen_gradient" />
            </div>
            <div className="loginScreen_body">
            {signIn?<SignupScreen />:(
                <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership. </h3>

                <div className="loginScreen_input">
                    <form action="">
                    <input type="email" 
                    placeholder="Email Address"/>

                    <button className="loginScreen_getStarted" onClick={()=>setSignIn(true)}>
                        GET STARTED
                    </button>

                    </form>
                </div>
                </>
                
                )}

                
            </div>
            
        </div>
    )
}

export default LoginScreen
