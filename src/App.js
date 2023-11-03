// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const[search,setSearch]=useState("");
  const api={key:"907dff55739e934a287719da4ae9ee71",
  base:"https://api.openweathermap.org/data/2.5/"
  }
  const[wheather,setWheather]=useState({});

  function searchPress(){
            fetch(`${api.base}/weather?q=${search}&units=metric&AppID=${api.key}`).then(res=>res.json()).then(d=>setWheather(d));

  }
return (
  <div className='wheather'>
            <div className='wheather_Data'>
                      <input id={'search_feild'} type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
                      <button id='wheather_submit' onClick={searchPress}>Submit</button>
                      {(typeof wheather.main !=="undefined")?(
                                <div className='wheather_info'>
                                          <p>Name: {wheather.name}</p>
                                          <p>Temp: {wheather.main.temp}</p>
                                          <p>{wheather.weather[0].main}</p>
                                          <p>Description: {wheather.weather[0].description}</p>
                                </div>
                      ):("Not Found")}
            </div>
</div>
)
}

export default App;




