import React  from 'react'
import "./Nav.css"
import { useEffect , useState} from "react";

function Nav() {
    const [Show, handleShow] =useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true)
            }
            else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])
    return (
        <div className = {`nav ${Show && "nav__black"}`}>
            <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix logo"/>
            <img className="nav_logo2" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt=""/>
        </div>
    )
}

export default Nav
