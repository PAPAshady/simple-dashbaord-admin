import React from "react";
import StatisticBox from "../../components/StatisticBox/StatisticBox";
import "./Home.css";

function Home() {
  const statisticBoxesInfos = [
    { id: 1, boxTitle: "Revanue", currentValue: 2_415, prevValue: 2_690 },
    { id: 2, boxTitle: "Sales", currentValue: 4_415, prevValue: 4_476 },
    { id: 3, boxTitle: "Cost", currentValue: 2_225, prevValue: 2_172 },
  ];

  return (
    <div className="sections-wrapper">
      <div className="statistic-boxes-wrapper">
        {statisticBoxesInfos.map((box) => (
          <StatisticBox key={box.id} {...box} />
        ))}
      </div>
    </div>
  );
}

export default Home;
