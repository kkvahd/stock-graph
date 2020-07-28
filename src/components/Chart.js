import React from 'react';
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts';

const data = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];


export const Chart = (stockData) => {
    let chartData = [];
    if (stockData.data && stockData.data.data) {
        chartData = stockData.data.data.prices;
        chartData = formatData(chartData);
    }

    return (
        <div style={{marginRight: '10vw', marginLeft: '1vw'}}>
            <LineChart
                width={1500}
                height={600}
                data={chartData}
                // margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
                <XAxis dataKey='month' />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey='price' stroke="#ff7300" yAxisId={0} />
                {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
            </LineChart>
        </div>
    )
}

const formatData = (data) => {
    let obj = [];
    for (let i = 0; i < data.length; i++) {
        let currentDate = new Date(data[i][0]);
        currentDate = currentDate.toDateString() + ' ' + currentDate.toString().split(' ')[4]
        obj.push({
            month: currentDate,
            price: data[i][1]
        });
    };
    return obj;
}
