import React from 'react'
import {Chart} from 'react-google-charts';
// import {render} from 'react-dom';



const data = [
    ["Country", "Latitude"],
    ["Algeria", 36],
    ["Angola", -8],
    ["Benin", 6],
    ["Botswana", -24],
    ["Burkina Faso", 12],
    ["Burundi", -3],
    ["Cameroon", 3],
    ["Canary Islands", 28],
    ["Cape Verde", 15],
    ["Central African Republic", 4],
    ["Ceuta", 35],
    ["Chad", 12],
    ["Comoros", -12],
    ["Cote d'Ivoire", 6],
    ["Democratic Republic of the Congo", -3],
    ["Djibouti", 12],
    ["Egypt", 26],
    ["Equatorial Guinea", 3],
    ["Eritrea", 15],
    ["Ethiopia", 9],
    ["Gabon", 0],
    ["Gambia", 13],
    ["Ghana", 5],
    ["Guinea", 10],
    ["Guinea-Bissau", 12],
    ["Kenya", -1],
    ["Lesotho", -29],
    ["Liberia", 6],
    ["Libya", 32],
    ["Madagascar", null],
    ["Madeira", 33],
    ["Malawi", -14],
    ["Mali", 12],
    ["Mauritania", 18],
    ["Mauritius", -20],
    ["Mayotte", -13],
    ["Melilla", 35],
    ["Morocco", 32],
    ["Mozambique", -25],
    ["Namibia", -22],
    ["Niger", 14],
    ["Nigeria", 8],
    ["Republic of the Congo", -1],
    ["Réunion", -21],
    ["Rwanda", -2],
    ["Saint Helena", -16],
    ["São Tomé and Principe", 0],
    ["Senegal", 15],
    ["Seychelles", -5],
    ["Sierra Leone", 8],
    ["Somalia", 2],
    ["Sudan", 15],
    ["South Africa", -30],
    ["South Sudan", 5],
    ["Swaziland", -26],
    ["Tanzania", -6],
    ["Togo", 6],
    ["Tunisia", 34],
    ["Uganda", 1],
    ["Western Sahara", 25],
    ["Zambia", -15],
    ["Zimbabwe", -18],
  ];
  
    const options = {
    
  region: "002", // Africa
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#fffff",
  datalessRegionColor: "#f8bbd0",
  defaultColor: "#f5f5f5",
};

export function Maps () {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}


export default Maps;

// ReactDOM.render (<GoogleCharts/>, document.querySelector('#root'))













// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";


// const Maps = ({ location,position2}) => {

// const MapWithAMarker = withScriptjs(withGoogleMap(props =>
//   <GoogleMap
//     defaultZoom={3}
//     defaultCenter={{ lat: -8.783195, lng: 34.508522 }}
    
//   >
//     {location ===  <Marker/> && position2}
//     {/* <Marker
    
//       position={{ lat: 17.570692, lng: -3.996166 }}
//     /> */}
//   </GoogleMap>
// ));

// return (
//     <div>

// <MapWithAMarker
//   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPyB11asJyyC6LaXPMqQniVBQdyj8hL8E&v=3.exp&libraries=geometry,drawing,places"
//   loadingElement={<div style={{ height: `100%` }} />}
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` }} />}
// />
// </div>
// );
// };

// export default Maps;