import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  

  const Maps = () => {
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: -8.783195, lng: 34.508522 }}
      
    >
      <Marker
        position={{ lat: 17.570692, lng: -3.996166 }}
      />
    </GoogleMap>
  ));

  return (
      <div>
  
  <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPyB11asJyyC6LaXPMqQniVBQdyj8hL8E&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
  </div>
  );
};

export default Maps;
