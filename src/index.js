import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import HelloComponent from './components/HelloComponent';
// import StateFullComponent from './containers/StateFullComponent';
import Home from './containers/Home/Home';
// import redux from 'redux';

// const createStore = redux.createStore;

// const globalState = {
//   totalOrder: 0
// }

// // Reducer
// const rootReducer = (state = globalState,action)=>{
//   return state;
// }

// // Store
// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
