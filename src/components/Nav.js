import React,{useEffect,useState} from 'react'
import "./nav.css"
import { useHistory} from "react-router-dom"

function Nav() {
    const [show , handleShow] = useState(false)
    const history = useHistory()
    
    const transationNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }

    }

    useEffect(()=>{
        window.addEventListener("scroll",transationNavBar);

        return () => window.removeEventListener("scroll", transationNavBar)
    },[])
    

    return (
        <div className={show?"nav nav_black ":"nav "}>
            <div className="nav_content">
            <img onClick={()=>history.push("/")}
            className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
            
            <img onClick={()=> history.push("/profile")}
             className="nav_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="" />


            </div>
            
         
        </div>
    )
}

export default Nav
