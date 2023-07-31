import React from "react";

//components
import isAzure from "../../components/isAzure";
import { Card, CardBody } from "reactstrap";
import Inconsistencias from "./components/Inconsistencia";
import ProximosEnvios from "./components/proximosEnvios";
import DocumentosVencidos from "./components/documentosVencidos";
import DocumentosAVencer from "./components/documentosAVencer";

const Home = () => {

  isAzure();

  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <Card>
            <CardBody className="pb-0">
              <Inconsistencias />
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardBody className="pb-0">
              <ProximosEnvios />
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardBody className="pb-0">
              <DocumentosVencidos />
            </CardBody>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <CardBody className="pb-0">
              <DocumentosAVencer />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
