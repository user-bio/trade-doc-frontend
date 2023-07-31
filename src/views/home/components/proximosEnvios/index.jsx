import React, { useState } from "react";
import TableVencidos from "./proximos";

const ProximosEnvios = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <h4>Próximos envios</h4>

      <TableVencidos />
    </>
  );
};

export default ProximosEnvios;
