import  { Popup } from "react-map-gl";
import StarIcon from '@mui/icons-material/Star';
import React from "react";
import '../../src/Map.css'

function Popups({longitude, latitude, setShowPopup}){
    return(
        <>
        <Popup 
              longitude={longitude} 
              latitude={latitude}
              anchor="left"
              maxWidth="none"
              className="popup"
              onClose={() => setShowPopup(false)}
              >
                <div className="card">
              <label>Place</label>
              <h4>Eiffle Tower</h4>
              <label>Review</label>
              <p>You Should Visit</p>
              <label>Rating</label>
              <div className="star-container">
               <StarIcon className="star"/> 
                <StarIcon className="star"/>
                <StarIcon className="star"/>
              </div>
              <label>Information</label><br/>
              <span className="username">created by<b>Ash</b></span><br/>
              <span className="date"><b>1 Hour ago</b></span>
              </div>
        </Popup>
        </>
    )
}

export default Popups;