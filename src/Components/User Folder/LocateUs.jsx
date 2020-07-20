import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const LocateUs = (props) => {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    return ( 
        <div>
            
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
        </div>
     );
}
 
export default LocateUs;