import React, { useState } from 'react';
import { InsightaChart } from 'insighta-chart'
import { createWeb3Name } from '@web3-name-sdk/core'
import './App.css'

function App() {
    const timeout = 10000; // 10 seconds

    const [address, setAddress] = useState('0x032995de5c5D6ee2352595887fE5379e77606004');
    const [searchAddress, setSearchAddress] = useState('0x032995de5c5D6ee2352595887fE5379e77606004');

    const handleSearch = async () => {
      if (/^[a-zA-Z0-9\-]+\.[a-zA-Z]+$/.test(address)) { // 简单的域名格式判断
        const web3name = createWeb3Name()
        const addr = await web3name.getAddress(address)
        setSearchAddress(addr)
      }else{
        setSearchAddress(address)
      }
    }

    return (
        <div className="App">
            <h1>Insighta For Ability Analysis</h1>
            <div className="searchContainer">
              <input
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
            <div className='chartContainer'>
                <InsightaChart address={searchAddress} timeout={timeout} />
            </div>
        </div>
    );
}

export default App;

