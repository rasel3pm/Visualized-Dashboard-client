import { Pie } from "react-chartjs-2";
import { Container } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Year",
    },
  },
};

const Year = () => {
  const [apiData, setApiData] = useState({
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [], // You can initialize this with your default data if needed
        backgroundColor: "rgb(350, 99, 132)",
      },
    ],
  });

  useEffect(() => {
    axios
      .get("https://visualized-dashboard-server.vercel.app/api/v1/Year")
      .then((res) => {
        if (res.status === 200 && res.data.data.length > 0) {
          // Assuming your API response has "region" and "intensity" properties
          const newData = {
            labels: res.data.data.map((item) => item["country"]),
            datasets: [
              {
                label: "Dataset 1",
                data: res.data.data.map((item) => item["start_year"]),
                backgroundColor: "rgb(350, 99, 132)",
              },
            ],
          };
          setApiData(newData);
        }
      });
  }, []);
  return (
    <Container>
      <Pie data={apiData} options={options} />
    </Container>
  );
};

export default Year;
