import * as React from 'react';
import { useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import Popups from './Popup';
import '../../src/Map.css'
import FetchPins from './FetchPins';

function MapDisplay(){
  const [showPopup, setShowPopup] = useState(true);
    return (
        <Map
          initialViewState={{
              longitude: -122.4,
              latitude: 37.8,
              zoom: 4
          }}
          style={{width: "100vw", height: "100vh" ,position:'relative'}}
          mapboxAccessToken='pk.eyJ1IjoiYXNocmFmLWFyYWoiLCJhIjoiY2xnM2NuNzFrMDNpeTNkbTJvZXY2c3pqeiJ9.C7iovVKPmBIj4IKUlJ_S_g'
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
            <FetchPins></FetchPins> 
        </Map> 
      );
}

export default MapDisplay