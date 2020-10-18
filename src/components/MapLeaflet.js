import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Basemap from './Basemaps';
import {  iconPerson  } from './Icon';
import './Map.css';

//L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class MapLeaflet extends React.Component {

    constructor(props) {
        super (props);    
        this.state = {
            data: [],
            all_data: [],
            array_for_markers: [],
            zoom: 5,
            basemap: 'osm',
            abc: 0,
            trucks: ['Truck 1','Truck 2','Truck 3','Truck 4','Truck 5','Truck 6','Truck 7','Truck 8','Truck 9','Truck 10'],
            currentCount: 0,
            ...props
        };
        this.onBMChange=this.onBMChange.bind(this);
    }

    onBMChange(bm) {
        this.setState({
            basemap:bm
        })
    }

    componentDidMount() {
        setInterval(this.updateMarkers.bind(this), 1000);
    }
    
    updateMarkers() {
        this.setState({
            currentCount: this.state.currentCount + 1
          })
          
          if(this.state.all_data[0][this.state.currentCount*2] === undefined) {
            this.setState({
              currentCount: 0
            })
          }
          console.log(this.state.data);
          console.log(this.state.all_data);

        for ( let ii=0; ii<10; ii++ ) {
            this.state.data[ii][0] = this.state.all_data[ii][this.state.currentCount*2]
            this.state.data[ii][1] = this.state.all_data[ii][this.state.currentCount*2+1]
        }
        this.setState({
            data: this.state.data
        })
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

                { this.state.array_for_markers.map( element => 
                    <Marker icon={ iconPerson } position={[this.state.data[element-1][0], this.state.data[element-1][1]]}>
                        <Popup>{this.state.trucks[element-1]}</Popup>
                    </Marker>
                ) }
            </Map>
        );
        }

}

export default MapLeaflet