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
  const currentUser = 'mohammed'
  const [pins, setPins] = useState([]);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [star, setStar] = useState(null);
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

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const newPin ={
      username:currentUser,
      title,
      desc,
      star,
      lat:newPlace.lat,
      long:newPlace.long
    }
    try{
      const response = await fetch('http://localhost:8800/api/pins/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Credentials': 'true',
        },
        credentials: 'include',
        body: JSON.stringify(newPin)
      });
      const data = await response.json();
      setPins([...pins, data]);
      setNewPlace(null);
    } catch(err){
      console.log(err);
    }
  }
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
                <form className='add-pin card' onSubmit={handleSubmit}>
                  <label>Title</label>
                  <input
                    placeholder="Enter a title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Description</label>
                  <textarea
                    placeholder="Say something about this place."
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <label>Rating</label>
                  <select  onChange={(e) => setStar(e.target.value)} >
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
