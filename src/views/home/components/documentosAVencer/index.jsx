// ** React Imports
import React, { useState, useEffect } from "react";

import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";
import TableVencidos from "./vencidos";

import { httpRequest } from "../../../../services/Api";
import { getToken } from "../../../../services/Auth";

const DocumentosVencidos = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [data, setDados] = useState([]);

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  useEffect(() => {
    httpRequest(`dashboard/setores`, {
      method: "GET",
      token: getToken(),
    }).then((res) => {
      const setoresObjeto = res.body.reduce((acc, current) => {
        const {
          setor_id,
          setor,
          documentos_tipo_id,
          nome,
          a_vencer,
          vencido,
          list_id,
        } = current;
        if (!acc[setor_id]) {
          acc[setor_id] = { setor, documentos: [] };
        }
        acc[setor_id].documentos.push({
          documentos_tipo_id,
          nome,
          a_vencer,
          vencido,
          list_id,
        });
        return acc;
      }, {});

      const setoresArray = Object.values(setoresObjeto);

      setDados(setoresArray);

      // Definir a primeira aba ativa com base na condição
      const firstTab = setoresArray.findIndex((item) =>
        item.documentos.some((documento) => documento.a_vencer > 0)
      );
      setActiveTab(firstTab >= 0 ? firstTab.toString() : "0");
    });
  }, []);

  return (
    <>
      <h4>Documentos vencimento próximo</h4>
      <Nav className="mt-2" tabs>
        {data.map((item, index) => {
          const hasExpiredDocument = item.documentos.some(
            (documento) => documento.a_vencer > 0
          );

          if (hasExpiredDocument) {
            return (
              <NavItem key={index}>
                <NavLink
                  className={activeTab === `${index}` ? "active" : ""}
                  onClick={() => toggleTab(`${index}`)}
                >
                  {item.setor}
                </NavLink>
              </NavItem>
            );
          }

          return null;
        })}
      </Nav>

      <TabContent activeTab={activeTab}>
        {data.map((item, index) => {
          const hasExpiredDocument = item.documentos.some(
            (documento) => documento.a_vencer > 0
          );

          if (hasExpiredDocument) {
            // Filtrar documentos com vencido maior que zero
            const documentosVencidos = item.documentos.filter(
              (documento) => documento.a_vencer > 0
            );

            return (
              <TabPane tabId={`${index}`}>
                <Row>
                  <Col sm="12">
                    <TableVencidos documentos={documentosVencidos} />
                  </Col>
                </Row>
              </TabPane>
            );
          }

          return null;
        })}
      </TabContent>
    </>
  );
};

export default DocumentosVencidos;
