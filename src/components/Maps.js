import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class Maps extends React.Component {
    render() {
        return (
            <Map google={this.props.google} 
            zoom={10}
            initialCenter={{
            lat: 22.687845,
            lng: 114.209931
            }}>
            <Marker />
            </Map>
)}};

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCPNd7-B-Rh6BL-5N5sfnKRI-l_YN9XRR0')
})(Maps);