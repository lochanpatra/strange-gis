import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
  return (
    <div>
      <h1> I Have No Musical Talent</h1>
      <p>Count: {props.count} </p>
      <button onClick={props.onIncrementClick}> increment</button>
      <button onClick={props.onDecrementClick}> decrement</button>
      <button onClick={props.onResetClick}> ReSeT</button>

    </div>
  )
}

function mapStateToProps(state)
{
  console.log("counter:" + state.count);
  return{
    count: state.count
  }
}


function mapDispatchToProps(dispatch)
{
  return{
    onIncrementClick: ()=> {
      const action={type: 'INCREMENT'};
      dispatch(action);
    }

    ,onDecrementClick: ()=> {
      const action={type: 'DECREMENT'};
      dispatch(action);
    }
    ,
    onResetClick:  ()=>{
      const action={type: 'RESET'};
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
