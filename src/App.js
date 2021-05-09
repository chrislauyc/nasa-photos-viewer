import React, {useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import APOD from './pages/APOD';
import Rover from './pages/Rover';
import {Route, Switch} from 'react-router-dom';
import {BASE_URL,API_KEY} from "./constants";
import axios from 'axios';
function App() {
  const [apod, setApod] = useState(null);
  const [roverData, setRoverData] = useState({});
  let tempRoverData = {...roverData};
  const fetchRoverData = (key,query) =>{
    if(!(roverData[key]&&roverData[key].query===query)){
      axios.get(`${query}&api_key=${API_KEY}`)
      .then((response)=>{
        tempRoverData[key] = {...response.data,query:query};
        setRoverData({...roverData,...tempRoverData});
      })
      .catch((e)=>console.log(e));
    }
  };
  useEffect(()=>{
    axios.get(`${BASE_URL}/planetary/apod/?api_key=${API_KEY}`)
    .then((response)=>{
        setApod(response.data);
    })
    .catch((e)=>console.log(e));
  },[]);
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path='/'>
            <APOD data={apod}/>
          </Route>
          <Route path='/rovers/:rover'>
            <Rover data={roverData} fetchRoverData={fetchRoverData}/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
