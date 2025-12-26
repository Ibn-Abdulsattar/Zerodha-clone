import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  BarElement,
  Legend,
} from "chart.js";

import {Bar} from 'react-chartjs-2';

ChartJs.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  BarElement,
  Legend,
);

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: "Holdings"
    },
    legend: {
      display: true,
      position: "top",
      labels:{
        color: "red"
      }
    },
    tooltip: {}
  }
 }

export function VerticalGraph ({data}){
  return (
    <>
    <Bar data={data} options={options} />
    </>
  )
}
