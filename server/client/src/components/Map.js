import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';
import Result from './Result';
function SimpleMap(props) {
  const [stores, setStores] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setStores(props.output);
    setSelected(props.output[0]);
  }, [props.output]);

  function handleClick(e, name) {
    e.preventDefault();
    const passDown = stores.find(item => item.name === name);
    setSelected(passDown);
  }

  function displayMarkers() {
    return stores.map((store, index) => {
      return (
        <FaMapMarkerAlt
          style={{ color: 'red' }}
          size={30}
          key={store.storeId}
          id={index}
          lat={store.lat}
          lng={store.lng}
          onClick={e => handleClick(e, store.name)}
        />
      );
    });
  }

  return (
    <>
      <div style={{ height: '55vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={{ lat: 51.5074, lng: 0 }}
          defaultZoom={9}
        >
          {displayMarkers()}
        </GoogleMapReact>
      </div>
      <Result selected={selected}></Result>
    </>
  );
}

export default SimpleMap;
