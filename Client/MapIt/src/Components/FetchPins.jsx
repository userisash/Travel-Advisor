import { useState, useEffect } from 'react'
import axios from 'axios'
import RoomIcon from '@mui/icons-material/Room';
import { Marker } from 'react-map-gl';
import Popups from './Popup';
import '../../src/Map.css'

function FetchPins(props){
    const [pins, setPins] = useState([])
    const [showPopup, setShowPopup] = useState(true);
    const [currentplaceId, setCurrentPlaceId] = useState(null)

   const handleMarkerClick = (id) =>{
      console.log("Marker clicked:", id);
      setCurrentPlaceId(id)
    }
     
    useEffect(()=>{
        const getPins = async() => {
            try {
              const res = await axios.get('http://localhost:8800/api/pins/pins');
              setPins(res.data);
            } catch(err) {
              console.log(err);
            }
          }          
        getPins()
    },[])
    
    return(
        <>
        {pins.map(p=>(
             <Marker key={p._id} longitude={p.long} latitude={p.lat} layer="top" style={{position:'absolute', top:0, left:0}} >
                <RoomIcon color='primary' fontSize='large' style={{ width:'20px', height:'20px'}} onClick={()=>props.handleMarkerClick(p._id)} />
                 {console.log("Popup for:", p._id, "Current place:", currentplaceId)}
                 {p._id === currentplaceId && (
                     <Popups longitude={p.long} latitude={p.lat} setShowPopup={setShowPopup} pin={p}></Popups>
                 )}
             </Marker>
        ))}
        </>
    )
}
export default FetchPins
