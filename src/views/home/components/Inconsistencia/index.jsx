import React, { useState } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import TableVencidos from "./vencidos";
import TableDominios from "./dominios";

const Inconsistencias = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <h4>Inconsistências de envios</h4>
      <Nav className="mt-2" tabs>
        <NavItem>
          <NavLink
            className={activeTab === "1" ? "active" : ""}
            onClick={() => toggleTab("1")}
          >
            Documento vencido
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={activeTab === "2" ? "active" : ""}
            onClick={() => toggleTab("2")}
          >
            Domínio
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TableVencidos />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <TableDominios />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
};

export default Inconsistencias;
