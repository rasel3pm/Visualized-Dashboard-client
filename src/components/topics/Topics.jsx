import React, { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import axios from "axios";
import { Container } from "react-bootstrap";
import {
  PointElement,
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
ChartJS.register(
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "topics",
    },
  },
};

const Topics = () => {
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
      .get("https://visualized-dashboard-server.vercel.app/api/v1/Topics")
      .then((res) => {
        if (res.status === 200 && res.data.data.length > 0) {
          // Assuming your API response has "region" and "intensity" properties
          const newData = {
            labels: res.data.data.map((item) => item["_id"]),
            datasets: [
              {
                label: "Dataset 1",
                data: res.data.data.map((item) => item["_id"]),
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

export default Topics;
