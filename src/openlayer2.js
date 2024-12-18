import React, { Component } from "react";
import ReactDOM from "react-dom";
import Map from "ol/Map.js";
import View from "ol/View.js";
import Overlay from "ol/Overlay.js";
import LayerTile from "ol/layer/Tile.js";
import SourceOSM from "ol/source/OSM.js";
import { toStringHDMS } from "ol/coordinate";
import { toLonLat } from "ol/proj";
import * as proj from "ol/proj";
import "./map.css";

const posBg = proj.fromLonLat([25.12, 42.35]);

export default class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = { center: posBg, zoom: 7.5 };

    this.map = new Map({
      target: null, // set this in componentDidMount
      layers: [
        new LayerTile({
          source: new SourceOSM()
        })
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      })
    });
  }

  componentDidMount() {
    this.map.setTarget("map");
    // Listen to map changes
    this.map.on("moveend", () => {
      let center = this.map.getView().getCenter();
      let zoom = this.map.getView().getZoom();
      this.setState({ center, zoom });
    });

    // Basic overlay
    const overlay = new Overlay({
      position: posBg,
      element: ReactDOM.findDOMNode(this).querySelector("#overlay"),
      positioning: "center-center",
      stopEvent: false
    });

    this.map.addOverlay(overlay);
    var content = document.getElementById("popup-content");
    var closer = document.getElementById("popup-closer");

    // Popup showing the position the user clicked
    this.popup = new Overlay({
      element: ReactDOM.findDOMNode(this).querySelector("#popup")
    });

    // Listener to add Popup overlay showing the position the user clicked
    // this.map.on('click', evt => {
    //   this.popup.setPosition(evt.coordinate);
    //   this.map.addOverlay(this.popup);
    // })
    /**
     * Add a click handler to hide the popup.
     * @return {boolean} Don't follow the href.
     */
    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };
    this.map.on("singleclick", function (evt) {
      var coordinate = evt.coordinate;
      var hdms = toStringHDMS(toLonLat(coordinate));

      content.innerHTML =
        "<p>The house is placed here:</p><code>" + hdms + "</code>";
      overlay.setPosition(coordinate);
    });
  }

  componentWillUnmount() {
    this.map.setTarget(null);
  }

  render() {
    return (
      <div>
        <div id="map" style={{ width: "100%", height: "1000px" }} />
        <div className="blue-circle" id="overlay" title="overlay" />
        <div className="blue-circle" id="popup" title="Welcome to OpenLayers" />
        <div className="ol-popup" id="popup">
          <a href="#" id="popup-closer" class="ol-popup-closer" />
          <div id="popup-content" />
        </div>
      </div>
    );
  }
}

