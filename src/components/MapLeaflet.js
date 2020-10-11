import React from 'react';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Basemap from './Basemaps';
import {  iconPerson  } from './Icon';
import './Map.css';

//L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapLeaflet extends React.Component {
    constructor(props) {
        super (props);

        this.onBMChange=this.onBMChange.bind(this);
    }

    state = {
        lat0: 40.72,
        lng0: -99.457,
        lat1: 45.557927,
        lng1: -122.782274,
        lat2: 37.709544,
        lng2: -122.473444,
        lat3: 32.710731,
        lng3: -117.113119,
        lat4: 30.593956,
        lng4: -97.806923,
        lat5: 36.662699,
        lng5: -89.633094,
        lat6: 41.798763,
        lng6: -88.051064,
        lat7: 50.368948,
        lng7: -104.926065,
        lat8: 41.206357,
        lng8: -81.547157,
        lat9: 42.709493,
        lng9: -114.418253,
        lat10: 40.189367,
        lng10: -104.454333,
        zoom: 5,
        basemap: 'osm',
        abc: 0,
        trucks: ['Truck 1','Truck 2','Truck 3','Truck 4','Truck 5','Truck 6','Truck 7','Truck 8','Truck 9','Truck 10']
    };

    onBMChange(bm) {
        this.setState({
            basemap:bm
        })
    }

    componentDidMount() {
        setInterval(this.updateMarkers.bind(this), 1000);
    }
    
    updateMarkers() {
        this.setState({lat0: this.state.lat0 - 0.007 })
        this.setState({lng0: this.state.lng0 + 0.0045 })

        this.setState({lat1: this.state.lat1 + 0.0015 })
        this.setState({lng1: this.state.lng1 + 0.0045 })

        this.setState({lat2: this.state.lat2 - 0.0015 })
        this.setState({lng2: this.state.lng2 + 0.0045 })

        this.setState({lat3: this.state.lat3 + 0.0005 })
        this.setState({lng3: this.state.lng3 + 0.0045 })

        this.setState({lat4: this.state.lat4 + 0.005 })
        this.setState({lng4: this.state.lng4 + 0.0045 })

        this.setState({lat5: this.state.lat5 + 0.003 })
        this.setState({lng5: this.state.lng5 - 0.0045 })

        this.setState({lat6: this.state.lat6 - 0.002 })
        this.setState({lng6: this.state.lng6 - 0.005 })

        this.setState({lat7: this.state.lat7 - 0.007 })
        this.setState({lng7: this.state.lng7 + 0.0045 })

        //this.setState({lat8: this.state.lat8 - 1.001 })
        //this.setState({lng8: this.state.lng8 - 1.0045 })

        this.setState({lat9: this.state.lat9 - 0.002 })
        this.setState({lng9: this.state.lng9 + 0.002 })
    }

    render () {
        var center = [40.72, -99.457];

        const basemapsDict = {
            osm: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
            dark: "https://{s}.basemaps.cartocdn.org/dark_all/{z}/{x}/{y}@2x.png"
        }
        return (        
            <Map zoom={this.state.zoom} center={center}>
                <TileLayer
                url={basemapsDict[this.state.basemap]}
                />
                <Basemap basemap={this.state.basemap} onChange={this.onBMChange}></Basemap>
                <Marker icon={ iconPerson } position={[this.state.lat0, this.state.lng0]}>
                    <Popup>{this.state.trucks[0]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat1, this.state.lng1]}>
                    <Popup>{this.state.trucks[1]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat2, this.state.lng2]}>
                    <Popup>{this.state.trucks[2]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat3, this.state.lng3]}>
                    <Popup>{this.state.trucks[3]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat4, this.state.lng4]}>
                    <Popup>{this.state.trucks[4]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat5, this.state.lng5]}>
                    <Popup>{this.state.trucks[5]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat6, this.state.lng6]}>
                    <Popup>{this.state.trucks[6]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat7, this.state.lng7]}>
                    <Popup>{this.state.trucks[7]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat8, this.state.lng8]}>
                    <Popup>{this.state.trucks[8]}</Popup>
                </Marker>
                <Marker icon={ iconPerson } position={[this.state.lat9, this.state.lng9]}>
                    <Popup>{this.state.trucks[9]}</Popup>
                </Marker>
            </Map>
        );
        }

}

export default MapLeaflet