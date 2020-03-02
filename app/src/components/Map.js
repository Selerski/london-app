// import { Map, GoogleApiWrapper, Marker } from 'google-map-react';
// import React, { useEffect, useState } from 'react';
// import './Map.css'

// const mapStyles = {
//   width: '50%',
//   height: '50%'
// };

// function MapContainer(props) {
//   const [stores, setStores] = useState([]);

//   useEffect(() => {
//     setStores([{ lat: 51.5074, lng: 0 }]);
//   }, []);

//   // function displayMarkers() {
//   //   return stores.map((store, index) => {
//   //     return (
//   //       <Marker
//   //         key={index}
//   //         id={index}
//   //         position={{
//   //           lat: store.lat,
//   //           lng: store.lng
//   //         }}
//   //         onClick={() => console.log('You clicked me!')}
//   //       />
//   //     );
//   //   });
//   // }

import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function SimpleMap() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setStores([
      { lat: 51.5074, lng: 0 },
      { lat: 51.5074, lng: -0.5 }
    ]);
  }, []);

  function displayMarkers() {
    return stores.map((store, index) => {
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
