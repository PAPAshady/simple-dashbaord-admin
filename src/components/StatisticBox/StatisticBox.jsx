import React from "react";
import PropTypes from "prop-types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./StatisticBox.css";

function StatisticBox({ boxTitle, currentValue, prevValue }) {
  const hadProgress = currentValue >= prevValue;
  const percentChange =
    prevValue !== 0 ? ((currentValue - prevValue) / prevValue) * 100 : 0;

  return (
    <div className="statistic-box">
      <p className="statistic-box__title">{boxTitle}</p>
      <div className="statistic-box__numbers">
        <span className="statistic-box__current-value">
          ${currentValue.toLocaleString()}
        </span>
        <div className="statistic-box__progress-number-wrapper">
          <span className="statistic-box__progress-number">
            {percentChange.toFixed(1)}%
          </span>
          {hadProgress ? (
            <ArrowUpwardIcon className="statistic-box__arrow-icon statistic-box__arrow-icon--positive" />
          ) : (
            <ArrowDownwardIcon className="statistic-box__arrow-icon statistic-box__arrow-icon--negative" />
          )}
        </div>
      </div>
      <p className="statistic-box__sub-text">Compared to last month</p>
    </div>
  );
}

StatisticBox.propTypes = {
  boxTitle: PropTypes.string.isRequired,
  currentValue: PropTypes.number.isRequired,
  prevValue: PropTypes.number.isRequired,
};

export default StatisticBox;
