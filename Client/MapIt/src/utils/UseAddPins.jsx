import { useState } from 'react';

function useHandleAddingPins() {
  const [newPlace, setNewPlace] = useState({
    lng : 43,
    lat: 53
  });

  const handlePinClick = (e) => {
    const {lng, lat} = e.lngLat
    console.log('lng', lng)
    console.log('lat', lat)
    setNewPlace({
      lat,
      lng
    });
    console.log('e', e)
    console.log('e', e.lngLat)
  };

  return {
    newPlace,
    setNewPlace,
    handlePinClick,
  };
}

export default useHandleAddingPins