import  { Popup } from "react-map-gl";
import StarIcon from '@mui/icons-material/Star';
import React from "react";
import '../../src/Map.css'
import {format} from 'timeago.js'

function Popups({longitude, latitude, setShowPopup, pin}){
    return(
        <>
        <Popup 
              pin={pin}
              longitude={pin.long} 
              latitude={pin.lat}
              anchor="left"
              maxWidth="none"
              className="popup"
              onClose={() => setShowPopup(false)}
              >
                <div className="card">
              <label>Place</label>
              <h4 className="tilte">{pin.title}</h4>
              <label>Review</label>
              <p>{pin.desc}</p>
              <label>Rating</label>
              <div className="star-container">
               <StarIcon className="star"/> 
                <StarIcon className="star"/>
                <StarIcon className="star"/>
              </div>
              <label>Information</label><br/>
              <span className="username">created by<b>{pin.username}</b></span><br/>
              <span className="date"><b>{format(pin.createdAt)}</b></span>
              </div>
        </Popup>
        </>
    )
}

export default Popups;