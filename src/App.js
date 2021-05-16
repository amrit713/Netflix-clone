import React, { useEffect } from "react"
import './App.css';
import HomeScreen from "./components/HomeScreen"
import {BrowserRouter as Router
,Switch,
 Route

} from "react-router-dom"
import LoginScreen from "./components/login/LoginScreen"
import { auth } from "./firebase";
import {useDispatch, useSelector} from "react-redux"
import ProfileScreen from "./components/login/ProfileScreen"


function App() {
  const user = useSelector(state=> state.user)

  const dispatch = useDispatch()

  useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(userAuth =>{
        if(userAuth){
          //Logged in
          console.log(userAuth)
          dispatch({
            type: "LOGIN",
            payload:{
              uid: userAuth.uid,
              email: userAuth.email,
            }
          })

         
        }
        else  {
        //logged out

        dispatch({
          type:"LOGOUT",
          payload: null
        })
      }
    })

    return unsubscribe;
  },[])

  return (
    <Router>
    <div className="app">

      {
        !user ? (<Route path="/" component={LoginScreen} />):
        (
          <Switch>
            <Route path="/profile" component={ProfileScreen}/>
          <Route  path="/" component={HomeScreen} />

        </Switch>
        )
      }
        

     
    
     
    </div>
     </Router>
  );
}

export default App;
