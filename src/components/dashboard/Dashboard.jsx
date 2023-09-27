import React from "react";
import { Container } from "react-bootstrap";
import Intensity from "./../intensity/Intensity";
import Likelihood from "../likelihood/Likelihood";
import Relevance from "./../relevance/Relevance";
import Year from "./../year/Year";

const Dashboard = () => {
  return (
    <Container>
      <div className="row m-2">
        <div className="col-md-6 shadow-sm p-2 rounded">
          <Intensity />
        </div>
        <div className="col-md-6 shadow-sm p-2 rounded">
          <Likelihood />
        </div>
        <div className="col-md-6 shadow-sm p-2 rounded">
          <Relevance />
        </div>
        <div className="col-md-6 shadow-sm p-2 rounded">
          <Year />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
