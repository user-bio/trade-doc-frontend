import React, { useState, useEffect } from "react";
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
import TableVencidos, { informacao } from "./vencidos";
import TableDominios from "./dominios";
import { httpRequest } from "../../../../services/Api";
import { getToken } from "../../../../services/Auth";
import Usuarios from "../../../../services/Usuarios";

import CustomPieChart from "../graficos/PieChart";

const Inconsistencias = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [inconsistencia, setInconsistencia] = useState(0);
  const [dominio, setDominio] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const unificarRegistrosDuplicados = (registros) => {
    const registroUnificado = registros.reduce((acc, current) => {
      const { envio_id } = current;
      if (!acc[envio_id]) {
        acc[envio_id] = current;
      }
      return acc;
    }, {});

    return Object.values(registroUnificado);
  };
  

  function exibirTiposDocumentos() {
    const setores = Usuarios.getUserStorage();
    let obj = [];

    for (let setor of setores.Setores) {
      if (setor.Usuarios_Setores.permissoes !== null && setor.Usuarios_Setores.permissoes.criaEnvio) {
        obj.push(setor.id);
      }
    }
    return obj;
  }

  useEffect(() => {
    httpRequest(`dashboard/envios?vencidos[gt]=0`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      if (Usuarios.isAdmin()) {
        const registrosUnificados = unificarRegistrosDuplicados(res.body);
        setInconsistencia(registrosUnificados.length)
      } else {
        const idsFiltrados = exibirTiposDocumentos();
        const itensFiltrados = res.body.filter((objeto) =>
          idsFiltrados.includes(objeto.setor_id)
        );
        const registrosUnificados = unificarRegistrosDuplicados(itensFiltrados);
        setInconsistencia(registrosUnificados.length)
      }
    });
  }, []);

  useEffect(() => {
    httpRequest(`dashboard/envios?inconsistencia_dominios[gt]=0`, {
      method: "GET",
      token: getToken(),
    }).then(res => {
        if (Usuarios.isAdmin()) {
          const registrosUnificados = unificarRegistrosDuplicados(res.body);
          setDominio(registrosUnificados);
        } else {
          const idsFiltrados = exibirTiposDocumentos();
          const itensFiltrados = res.body.filter((objeto) =>
            idsFiltrados.includes(objeto.setor_id)
          );
          const registrosUnificados = unificarRegistrosDuplicados(itensFiltrados);
          setDominio(registrosUnificados);
        }
    })
  }, []);

  const data = [
    { name: "Documentos vencidos", value: inconsistencia },
    { name: "Domínio", value: dominio },
  ];

  return (
    <>
      <h4>Inconsistências de envios</h4>
      <Nav className="mt-2" tabs>
        <NavItem>
          <NavLink
            className={activeTab === "0" ? "active" : ""}
            onClick={() => toggleTab("0")}
          >
            Resumo
          </NavLink>
        </NavItem>
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
        <TabPane tabId="0">
          <Row>
            <Col sm="12">
              <CustomPieChart dataValor={data} />
            </Col>
          </Row>
        </TabPane>
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
