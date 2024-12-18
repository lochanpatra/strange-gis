// @flow

import React from 'react';
import { connect } from 'react-redux';


function Calculator(props) {

  return (
    <div>
      <div>
      <input size="20" value = {props.value1} onChange={props.numberChange1} />
      <input size="20" value = {props.value2} onChange={props.numberChange2} />

      <button onClick={props.onAdd}> Add </button>
      <p>Results: {props.result} </p>

      </div>

      <div>
      <input size="20" value = {props.lat} onChange={props.latChange} />
      <input size="20" value = {props.lon} onChange={props.lonChang} />

      <button onClick={props.onFlyTo}> Fly to Lat/Lon </button>
      

      </div>
      
  </div>
  
  )
}

//mapping multiple states to props
const mapStateToProps= (state) =>{
  return{
    result: state.result, value1:state.value1, value2: state.value2,
lat: state.lat, lon: state.lon
  }
}


function mapDispatchToProps(dispatch)
{
  return{
    onAdd: (evt)=>{
      const action={type: 'ADD', value1: evt.target.value, value2:evt.target.value};
      dispatch(action);
    }  ,
    numberChange1: (evt)=>{
      const action={type: 'INPUT_CHANGE1', value1: evt.target.value};
      dispatch(action);
    },
    numberChange2: (evt)=>{
      const action={type: 'INPUT_CHANGE2', value2: evt.target.value};
      dispatch(action);
    },
    onFlyTo: (evt)=>{
      const action={type: 'FLY_TO', lat: evt.target.value, lon:evt.target.value};
      dispatch(action);
    }  ,
    latChange: (evt)=>{
      const action={type: 'LAT_CHANGE', lat: evt.target.value};
      dispatch(action);
    },  
    lonChange: (evt)=>{
      const action={type: 'LON_CHANGE', lat: evt.target.value};
      dispatch(action);
    }  
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator);

