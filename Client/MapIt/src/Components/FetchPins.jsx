import { useState, useEffect } from 'react'
import axios from 'axios'
import RoomIcon from '@mui/icons-material/Room';
import { Marker } from 'react-map-gl';
import Popups from './Popup';
import '../../src/Map.css'

function FetchPins(props){
    const [pins, setPins] = useState([])
    const [showPopup, setShowPopup] = useState(true);
    useEffect(()=>{
        const getPins = async() => {
            try {
              const res = await fetch('http://localhost:8800/api/pins/pins');
              console.log(res);
              if (!res.ok) {
                throw new Error('HTTP Error ' + res.status);
              }
              const data = await res.json();
              setPins(data);
            } catch(err) {
              console.log(err);
            }
          }          
        getPins()
    },[])
    console.log(pins)
    return(
        <>
        {props.pins.map(p=>(
             <Marker key={p._id} longitude={p.long} latitude={p.lat} layer="top" style={{position:'absolute', top:0, left:0}} >
                 <RoomIcon color='primary' fontSize='large' style={{ width:'20px', height:'20px'}} />
                 {showPopup && (
                     <Popups longitude={p.long} latitude={p.lat} setShowPopup={setShowPopup} pin={p}></Popups>
                 )}
             </Marker>
        ))}
        </>
    )
}
export default FetchPins
