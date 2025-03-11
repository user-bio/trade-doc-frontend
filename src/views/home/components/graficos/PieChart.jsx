import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { Circle } from "react-feather";

const COLORS = ["#FF6384", "#FFCE56"];

const CustomPieChart = (props) => {
  return (
    <>
      <div className="row d-flex align-items-center">
        <div className="col-lg-6">
          <PieChart width={300} height={300}>
            <Pie
              data={props.dataValor}
              cx={100}
              cy={140}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {props.dataValor.map(
                (
                  entry,
                  index // <--- Alteração aqui
                ) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                )
              )}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
        <div className="col-lg-6 py-3">
          {props.dataValor.map(
            (
              entry,
              index // <--- Alteração aqui
            ) => (
              <div className="nav">
                <div className="nav-item">
                  <Circle
                    className="text-white me-1"
                    fill={COLORS[index % COLORS.length]}
                  />
                  {entry.name}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default CustomPieChart;
