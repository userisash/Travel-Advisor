import React, {useRef} from "react";
import MapDisplay from "../Components/Map";
import '../home.css'


function HomePage({currentUser}){
    const myStorage = window.localStorage;
    const [currentUsername, setCurrentUsername] = useState(myStorage.getItem("user"));
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    return(
        <>
        { currentUser ? (
            <button className="button log-out">Log out</button>
        ) : (
        <div className="container">
        <button className="button login">Log In</button>
        <button className="button reg">Sign Up</button>
        </div>
        )}
        </>
    )
}

export default HomePage