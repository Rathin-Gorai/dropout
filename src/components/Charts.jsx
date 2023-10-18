"use client"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { Chart } from "react-google-charts";
const Charts = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])
    const options = {
        title: "Age vs. Weight comparison",
        hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
        vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
        legend: "none"
    };

    const data = [
        ["Age", "Weight"],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7]
    ];
    return (
        <section className='md:px-[60px] px-[1.25rem] py-[1rem] relative flex flex-col' data-aos='fade-left'>
            <h3 className="text-center text-4xl font-bold mb-8">Charts</h3>
            <div className='flex flex-col md:flex-row'>
                <Chart
                    chartType="ScatterChart"
                    data={data}
                    options={options}
                    width="100%"
                    height="400px"
                    legendToggle
                />
                <Chart
                    chartType="BarChart"
                    data={data}
                    options={options}
                    width="100%"
                    height="400px"
                    legendToggle
                />
            </div>
        </section>
    )
}

export default Charts