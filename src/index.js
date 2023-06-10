import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SolarPanels} from './components/SolarPanels'
import {Account} from './components/Account'
import {ChargingStations} from './components/ChargingStations'
import {Menu} from './components/Menu'
import {Shop} from './components/Shop'
import {OurFuture} from './components/OurFuture';
import {OrderSolarNow} from './components/OrderSolarNow';
import  createRoot from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  HashRouter as Router,
  
} from "react-router-dom";

const routerBaseName = process.env.REACT_APP_BASENAME;
  ReactDOM.createRoot (
    document.getElementById("root"),
  ).render(
    <BrowserRouter basename={routerBaseName}>
      <Routes>
      <Route exact path="./App" element={<App />}/>
      <Route exact path="/SolarPanels" element={<SolarPanels />}/>
      <Route exact path="/Account" element={<Account />}/>
      <Route exact path="/ChargingStations" element={<ChargingStations />}/>
      <Route exact path="/Menu" element={<Menu />}/>
      <Route exact path="/Shop" element={<Shop />}/>
      <Route exact path="/OurFuture" element={<OurFuture />}/>
      <Route exact path="/OrderSolarNow" element={<OrderSolarNow />}/>
      </Routes>
    </BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
