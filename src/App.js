import React, { useEffect, useState } from 'react';
import './App.css';


import axios from 'axios';
import CoinGecko from 'coingecko-api';
import { Chart } from './components/Chart';


function App() {

  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let stockData = await fetchBitcoinData()
      setData(stockData);

      setInterval(async () => {
        stockData = await fetchBitcoinData();
        setData(stockData);
      }, 1000 * 60 * 60, true);

    })();
  }, []);

  return (
    <div className="App">
      <h1>Bitcoin data</h1>
      <Chart data={data} />
    </div>
  );
}

const fetchBitcoinData = async () => {
  const coingecko = new CoinGecko();
  const data = await coingecko.coins.fetchMarketChart('bitcoin');
  return data;
}

export default App;
