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
          hello
        </Popup>
      )}
    </Map>
  );
}

export default MapDisplay