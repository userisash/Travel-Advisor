import * as React from 'react';
import { useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';
import Popups from './Popup';
import '../../src/Map.css'

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
              <Marker longitude={2.294694} latitude={48.858093} layer="top" style={{position:'absolute', top:0, left:0}} >
                <RoomIcon color='primary' fontSize='large' style={{ width:'20px', height:'20px'}} />
             </Marker>
            {/* {showPopup && (
              <Popups longitude={2.294694} latitude={48.858093} setShowPopup={setShowPopup}></Popups>
            )} */}
        </Map> 
      );
}

export default MapDisplay