import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';

function SimpleMap(props) {
  console.log(props.output)
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores(props.output);
    }, []);

  function displayMarkers() {
    return stores.map((store, index) => {
      console.log(store, stores)
      return (
        <FaMapMarkerAlt
          style={{ color: 'red' }}
          size={30}
          key={index}
          id={index}
          lat={store.lat}
          lng={store.lng}
          onClick={() => console.log('You clicked me!')}
        />
      );
    });
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '400px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyATLljVpErmx-RrmQGDkVjx9IKqHpCeVv4' }}
        defaultCenter={{ lat: 51.5074, lng: 0 }}
        defaultZoom={7}
      >
        {displayMarkers()}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap;
