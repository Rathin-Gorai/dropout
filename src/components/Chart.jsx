"use client"
// import React, { useEffect, useState } from 'react';

import { Chart } from 'react-google-charts';
import { Data } from '../../../public/data';
function GoogleChartExample() {
    // const [user, setUser] = useState()

    // useEffect(() => {
    //     async function getData() {
    //         const res = await fetch('http://localhost:3000/api/data')
    //         const data = await res.json()
    //         if (!res.ok) {
    //             console.log('Failed to fetch data')
    //         }
    //         setUser(data)
    //     }
    //     getData()
    // }, [])
    // setUser(Data)
    // console.log(user)
    // console.log(Data)


    const yearData = {};

    // Iterate through the inputData and count males and females by year
    Data.data.forEach(entry => {
        const { year, Gender } = entry;
        if (!yearData[year]) {
            yearData[year] = { year, male: 0, female: 0 };
        }
        if (Gender === 'M') {
            yearData[year].male++;
        } else if (Gender === 'F') {
            yearData[year].female++;
        }
    });

    // Convert yearData object into an array of values
    const resultData = Object.values(yearData);

    console.log(resultData);

    const options = {
        title: 'Dropout student Year Wise',
    };


    return (
        <div>
            <Chart
                chartType="BarChart"
                width="400px"
                height="400px"
                data={[['Year', 'Male', 'Female'], ...resultData.map(item => [item.year, item.male, item.female])]}
                options={options}
            />
        </div>
    )
}


export default GoogleChartExample;
