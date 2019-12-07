import "leaflet/dist/leaflet.css";
import React from "react";
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import Card from "../Card/Card";
import './Contact.css';

class ContactAdress extends React.Component {

    render() {
        return (
            <Card>
                You can find us at:
                <br></br><br></br>
                <span className='adress'>
                    ul. prof. Stanisława Łojasiewicza 6
                    <br></br>
                    30-348 Kraków
                </span>
                <br></br><br></br>
                <LeafletMap className='map'
                    center={[50.0306, 19.907]}
                    zoom={18}
                    maxZoom={18}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                </LeafletMap>
            </Card>

        );
    }
}

export default ContactAdress