import React from 'react'
import "./profileScreen.css"
import Nav from "../Nav"
import { useSelector } from 'react-redux'
import { auth } from '../../firebase'




function ProfileScreen() {
    const user = useSelector(state =>state.user)
    
   
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                
                <h1>Edit Profile</h1>
                <div className="profileScreen_info">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />
                    
                    <div className="profileScreen_details">
                        <h2>{user.email}</h2>

                        <div className="profileScreen_plan">
                            <h3>Plans(Current Plans)</h3>
                            <p>Renew daate:4/03/2021 </p>
                            <div className="profileScreen_subscribe">
                               <div className="profileScreen_subName">
                                   <h4>Netflix Standard</h4>
                                   <p>1080p</p>
                               </div>
                               <button className="profileScreen_subBtn">Subscribe</button>
                            </div>

                            <div className="profileScreen_subscribe">
                               <div className="profileScreen_subName">
                                   <h4>Netflix Standard</h4>
                                   <p>480p</p>
                               </div>
                               <button className="profileScreen_subBtn">Subscribe</button>
                            </div>

                            <div className="profileScreen_subscribe">
                               <div className="profileScreen_subName">
                                   <h4>Netflix Standard</h4>
                                   <p>4K+HDR</p>
                               </div>
                               <button className="profileScreen_subBtn subscribed">Current Package </button>
                            </div>


                            <button onClick={()=>auth.signOut()} className="profileScreen_signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProfileScreen
