import { useState, useEffect } from "react";
import axios from "axios";
import RoomIcon from "@mui/icons-material/Room";
import { Marker } from "react-map-gl";
import Popups from "./Popup";
import "../../src/Map.css";

function FetchPins({currentUserRef}) {
  const currentUser = 'mohammed';
  const [pins, setPins] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentplaceId, setCurrentPlaceId] = useState(null);
  const [pin , setPin]= useState(null)
  

  const handleMarkerClick = (p) => {
    console.log("Marker clicked:", p);
    setPin(p)
    setCurrentPlaceId(p._id);
    setShowPopup(true);
  };

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/pins/pins");
        setPins(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  return (
    <>
      {pins.map((p) => (
        <Marker

          key={p._id}
          longitude={p.long}
          latitude={p.lat}
          layer="top"
          style={{ position: "absolute", top: 0, left: 0,zIndex:11 }}
          onClick={() => handleMarkerClick(p)}
        >
          <RoomIcon color='primary' fontSize='large' style={{zIndex:11, width:'80px', height:'80px', color: p.username === currentUser ? "tomato": "blue" }}  />
        </Marker>
      ))}
      {showPopup === true &&  (
          <Popups   setShowPopup={setShowPopup} handleMarkerClick={handleMarkerClick} pin={pin}></Popups>
      )}
    </>
  );
}
export default FetchPins;
