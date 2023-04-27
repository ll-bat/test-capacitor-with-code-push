import './App.css';
import React, {useState, useCallback, useEffect} from 'react';
import {Geolocation} from '@capacitor/geolocation';

import {codePush} from 'capacitor-codepush';

function App() {
  const [loc, setLoc] = useState(null);

  useEffect(() => {
    console.log("codePush.sync()")
    codePush.sync();
  }, [])

  const getCurrentPosition = useCallback(async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    setLoc(coordinates);
  }, [setLoc]);

  return (
    <div>
      <h1>Geolocation</h1>
      <p>Your location is:</p>
      <p>Latitude: {loc?.coords.latitude}</p>
      <p>Longitude: {loc?.coords.longitude}</p>

      <button onClick={getCurrentPosition}>
        Get Current Location
      </button>
    </div>
  );
}

export default App;
