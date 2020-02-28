// import { GoogleMapReact, GoogleApiWrapper, Marker } from 'google-map-react';
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

//   function displayMarkers() {
//     return stores.map((store, index) => {
//       return (
//         <Marker
//           key={index}
//           id={index}
//           position={{
//             lat: store.lat,
//             lng: store.lng
//           }}
//           onClick={() => console.log('You clicked me!')}
//         />
//       );
//     });
//   }

//   return (
//     <div className="google-map">
//       <h1>
//         HI
//       </h1>
//       <GoogleMapReact
//         google={props.google}
//         zoom={8}
//         style={{width: '50%', height: '50%', position: 'relative', padding: '0', margin: '0'}}
//         initialCenter={{ lat: 51.5074, lng: 0.1278 }}
//         streetViewControl={false}
//         fullscreenControl={false}
//         mapTypeControl={false}
//         zoomControl={false}
//       >
//         {displayMarkers()}
//       </GoogleMapReact>
//     </div>
//   );
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyATLljVpErmx-RrmQGDkVjx9IKqHpCeVv4'
// })(MapContainer);

import GoogleMapReact from 'google-map-react';
import React from 'react'
import './Map.css';

const defaultProps = {
  center: { lat: 40.73, lng: -73.93 },
  zoom: 12
};

function MapContainer(props) {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyATLljVpErmx-RrmQGDkVjx9IKqHpCeVv4',
        language: 'en'
      }}
      styles={'map-style'}
      style={{width: '50%', height: '50%', position: 'relative', padding: '0', margin: '0'}}
      defaultCenter={props.center}
      center={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    />
  );
}

export default MapContainer;
