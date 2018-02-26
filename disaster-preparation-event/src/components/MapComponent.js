import React, { Component } from 'react'
import GoogleMapReact from "google-map-react";
import styled from 'styled-components'

import API_KEY from './env'
import EarthquakeCircle from './EarthquakeCircle'

const Body = styled.div`
  height: 60vh;
  padding-left: 10vh;
  padding-right: 10vh;
`;

class MapComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            center: { lat: 45.492336, lng: -115.788731 },
            zoom: 5.5
        }

    }

    render() {
        return (
            <Body>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: API_KEY
                    }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}>



                </GoogleMapReact>
            </Body>
        );
    }
}

export default MapComponent;