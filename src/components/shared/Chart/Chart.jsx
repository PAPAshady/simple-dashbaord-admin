import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  CartesianGrid,
} from "recharts";
import "./Chart.css";

export default function Chart({ chartTitle, dataArray, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chart__title">{chartTitle}</h3>
      <ResponsiveContainer width="100%" aspect="3">
        <LineChart data={dataArray}>
          <XAxis stroke="#5550bd" dataKey="month" />
          <Line dataKey={dataKey} stroke="#5550bd" type="monotone" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Chart.propTypes = {
  chartTitle: PropTypes.string.isRequired,
  dataArray: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  grid: PropTypes.bool,
};
