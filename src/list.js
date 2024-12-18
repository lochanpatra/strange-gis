// @flow

import React from 'react';
import { connect } from 'react-redux';


function Items(props) {

  return (
    <div>
      <div>
      <input size="50" value = {props.text} onChange={props.numberChange} />
      <button onClick={props.onSort}> SORT </button>
      </div>
      <p></p>
      <div>
      <input size="50" value = {props.text} onChange={props.numberChange} />
      <button onClick={props.onReverse}> Reverse </button>
      </div>
  </div>
  
  )
}

const mapStateToProps= (state) =>{
  return{
    text: state.text
  }
}


function mapDispatchToProps(dispatch)
{
  return{
    onSort: (evt)=>{
      const action={type: 'SORT', text: evt.target.value};
      dispatch(action);
    },
    onReverse: (evt)=>{
      const action={type: 'REVERSE', text: evt.target.value};
      dispatch(action);
    },
    numberChange: (evt)=>{
      const action={type: 'INPUT_CHANGE', text: evt.target.value};
      dispatch(action);
    }

    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);
