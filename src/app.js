import React, { Component } from "react";
import "./styles.css";
import Counter from "./Counter";
import store from "./store/";
import store2 from "./store/sort.js";
import Sorter from "./List";
import Calculator from "./Calculator";
import CalcStore from "./store/Calculator.js";
import OLMapFragment from "./OpenLayers.js";
import SimpleExample from "./Leaflet.js";
import Map from "./ol2.js";
import "leaflet-draw/dist/leaflet.draw.css";
import OLMap from "./Openlayers2.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <OLMap />
      </div>
    );
  }
}

export default App;
