import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomBarChart = (props) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <BarChart width={520} height={props.heightCampo != "" ? props.heightCampo : 300} data={props.dataValor}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="proximaData" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="quantidade" fill="#0b5ca9" />
    </BarChart>
    </div>
  );
};

export default CustomBarChart;
