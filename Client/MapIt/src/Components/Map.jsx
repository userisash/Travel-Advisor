import * as React from 'react';
import { useState, useEffect } from 'react';
import Map, {Marker} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import Popups from './Popup';
import '../../src/Map.css'
import FetchPins from './FetchPins'
import useHandleAddingPins from '../utils/UseAddPins';
import  { Popup } from "react-map-gl";

function MapDisplay() {
  const [pins, setPins] = useState([]);
  const { newPlace, setNewPlace, handlePinClick } = useHandleAddingPins();

  useEffect(() => {
    const getPins = async () => {
      try {
        const res = await fetch("http://localhost:8800/api/pins/pins");
        console.log(res);
        if (!res.ok) {
          throw new Error("HTTP Error " + res.status);
        }
        const data = await res.json();
        setPins(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPins();
  }, []);

  return (
    <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 4,
      }}
      style={{ width: "100vw", height: "100vh", position: "relative" }}
      mapboxAccessToken="pk.eyJ1IjoiYXNocmFmLWFyYWoiLCJhIjoiY2xnM2NuNzFrMDNpeTNkbTJvZXY2c3pqeiJ9.C7iovVKPmBIj4IKUlJ_S_g"
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onDblClick={handlePinClick}
    >
      <FetchPins pins={pins}></FetchPins>
      {newPlace && (
        <Popup 
          longitude={newPlace.lng} 
          latitude={newPlace.lat}
          anchor="left"
          maxWidth="none"
          className="popup"
          onClose={() => setNewPlace(null)}
        >
         <div>
                <form className='add-pin card'>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    placeholder="Say something about this place."
                    // onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <button type="submit" className="submitButton">
                    Add Pin
                  </button>
                </form>
              </div>
        </Popup>
      )}
    </Map>
  );
}

export default MapDisplay
