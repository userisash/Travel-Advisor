import * as React from 'react';
import { useState } from 'react';
import Map, {Marker} from 'react-map-gl';
import RoomIcon from '@mui/icons-material/Room';



function MapDisplay(){
    return (
        <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 4
          }}
          style={{width: "100vw", height: "100vh"}}
          mapboxAccessToken='pk.eyJ1IjoiYXNocmFmLWFyYWoiLCJhIjoiY2xnMHFuZGEzMW5wbTNlcXVzZTd0bmFvMiJ9.QHjqYJOd6bS4UJOJ6VNXMA'
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
             <Marker longitude={43.72295} latitude={10.39660} anchor="bottom" >
                <RoomIcon/>
            </Marker>
        </Map>
      );
}

export default MapDisplay