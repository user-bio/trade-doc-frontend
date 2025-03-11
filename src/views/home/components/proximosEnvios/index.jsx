import React, { useState, useEffect } from "react";
import TableProximos from "./proximos";
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

import CustomBarChart from "../graficos/BarChart";
import { httpRequest } from "../../../../services/Api";
import { getToken } from "../../../../services/Auth";
import Usuarios from "../../../../services/Usuarios";

const ProximosEnvios = () => {
  const [activeTab, setActiveTab] = useState("0");
  const [dias, setDias] = useState([]);

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
      if (setor.Usuarios_Setores.permissoes !== null && setor.Usuarios_Setores.permissoes.criaEnvio
      ) {
        obj.push(setor.id);
      }
    }
    return obj;
  }

  useEffect(() => {
    httpRequest(`dashboard/envios?aprovacao=aprovada`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      if (Usuarios.isAdmin()) {
        const registrosUnificados = unificarRegistrosDuplicados(res.body);
        setDias(registrosUnificados);
      } else {
        const idsFiltrados = exibirTiposDocumentos();
        const itensFiltrados = res.body.filter((objeto) =>
          idsFiltrados.includes(objeto.setor_id)
        );
        const registrosUnificados = unificarRegistrosDuplicados(itensFiltrados);
        setDias(registrosUnificados);
      }
    });
  }, []);

  // Agrupar os envios pela próxima data e contar a quantidade
  const dadosAgrupados = dias.reduce((agrupados, item) => {
    const proximaData = new Date(item.proxima_data).toLocaleDateString("pt-BR");

    if (!agrupados[proximaData]) {
      agrupados[proximaData] = {
        proximaData,
        quantidade: 1,
      };
    } else {
      agrupados[proximaData].quantidade += 1;
    }

    return agrupados;
  }, {});

  // Converter os dados agrupados de objeto para array
  
  const data = Object.values(dadosAgrupados);
  const sortedData = [...data].sort((a, b) => {
    const dateA = new Date(a.proximaData.split('/').reverse().join('/'));
    const dateB = new Date(b.proximaData.split('/').reverse().join('/'));
    return dateA - dateB;
});

  return (
    <>
      <h4>Próximos envios</h4>

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
            Listar envios
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="0">
          <Row>
            <Col sm="12">
              <div style={{ width: "100%", height: "300px" }}>
                <CustomBarChart dataValor={sortedData} heightCampo="" />
              </div>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <TableProximos />
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </>
  );
};

export default ProximosEnvios;
