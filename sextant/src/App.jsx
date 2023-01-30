import { useState } from 'react'
import './App.css'
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import Latency from './components/Latency';
import RequestIP from './components/RequestIP';

function App() {

  return (
    <div className="App">
      <Banner title='Sextant Dashboard' />
      <div className="metrics">
        <Exhibit title='IP Address'>
          <RequestIP version='v4' />
          <RequestIP version='v6' />
        </Exhibit>
        <Exhibit title='Latency'>
          <Latency />
        </Exhibit>
        <Exhibit title='3rd Metric'>
          <p>0xDEADBEEF</p>
        </Exhibit>
      </div>
    </div>
  )
}

export default App
