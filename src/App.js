import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.scss';
import MultiLineChart from "./components/MultiLineChart";
import FuelChart from './components/FuelChart';
import SpeedChart from './components/SpeedChart';
import MapLeaflet from './components/MapLeaflet';
import MultiLineChartLegend from './components/MultiLineChartLegend';

class App extends React.Component {
  render() {
    return (
      <div>
      
      <h1 className="headline">BigMatFleet loT Sensors Dashboard</h1>

      <div id="map-container" className="map_container_class_div">
        <div className="headline_div">
          <h2 className="headline_h2 d3_chart_h2" >Trucks location</h2>
          <span className="status success"><i className="pulse"></i>Connected</span>
        </div>
        <div id="map-container" className="map_container_class">
          <MapLeaflet />
        </div>
      </div>
      
      <div className="all_charts">
        <div className="chart_row">
          <div className="d3_chart_div">
            <div className="headline_div">
              <h2 className="headline_h2 d3_chart_h2" >Temperature inside refrigerators</h2>
              <span className="status success"><i className="pulse"></i>Connected</span>
            </div>
            <div className="d3_charts_flex" >
              <div className="d3_chart">
                <MultiLineChart />
              </div>
              <div className="d3_chart_legend">
                <MultiLineChartLegend />
              </div>
            </div>
          </div>
        </div>

        <div className="map">
          
        </div>

        <div className="chart_row">
          <div className="arrow_chart">
            <div className="headline_div">
              <h2 className="headline_h2" >Speed, KPH</h2>
              <span className="status success"><i className="pulse"></i>Connected</span>
            </div>
            <div className="arrow_charts">
              <SpeedChart sensorId="1"/> 
              <SpeedChart sensorId="2"/>
              <SpeedChart sensorId="3"/>
              <SpeedChart sensorId="4"/>
              <SpeedChart sensorId="5"/> 
              <SpeedChart sensorId="6"/>
              <SpeedChart sensorId="7"/>
              <SpeedChart sensorId="8"/> 
              <SpeedChart sensorId="9"/>
              <SpeedChart sensorId="10"/>
            </div>
          </div>
        </div>

        <div className="chart_row">
          <div className="arrow_chart">
            <div className="headline_div">
              <h2 className="headline_h2" >Fuel Consumption, L/100km</h2>
              <span className="status success"><i className="pulse"></i>Connected</span>
            </div>
            <div className="arrow_charts">
              <FuelChart sensorId="1"/> 
              <FuelChart sensorId="2"/>
              <FuelChart sensorId="3"/>
              <FuelChart sensorId="4"/>
              <FuelChart sensorId="5"/> 
              <FuelChart sensorId="6"/>
              <FuelChart sensorId="7"/>
              <FuelChart sensorId="8"/> 
              <FuelChart sensorId="9"/>
              <FuelChart sensorId="10"/>
            </div>
          </div>
        </div>

      </div>

    </div>
    
    );
  }
}

export default App;
