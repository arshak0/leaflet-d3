import L from 'leaflet';

const iconPerson = new L.Icon({
    //iconUrl: require('../pics/truck_icon.png'),
    iconRetinaUrl: require('../pics/truck_icon.png'),
    //iconAnchor: null,
    //popupAnchor: null,
    //shadowUrl: null,
    //shadowSize: null,
    //shadowAnchor: null,
    iconSize: new L.Point(40, 35),
    className: 'leaflet-div-icon'
});

export { iconPerson };