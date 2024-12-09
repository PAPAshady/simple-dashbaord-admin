import React from "react";
import StatisticBox from "../../components/StatisticBox/StatisticBox";
import Chart from "../../components/shared/Chart/Chart";
import NewJoinedUser from "../../components/NewJoinedUser/NewJoinedUser";
import profilePic from "../../assets/images/profile-pic.webp";
import "./Home.css";

function Home() {
  const statisticBoxesInfos = [
    { id: 1, boxTitle: "Revanue", currentValue: 2_415, prevValue: 2_690 },
    { id: 2, boxTitle: "Sales", currentValue: 4_415, prevValue: 4_476 },
    { id: 3, boxTitle: "Cost", currentValue: 2_225, prevValue: 2_172 },
  ];

  const userAnalyticsChartDatas = [
    { month: "Jan", users: 992 },
    { month: "Feb", users: 1900 },
    { month: "Mar", users: 1540 },
    { month: "Apr", users: 1922 },
    { month: "May", users: 1357 },
    { month: "Jun", users: 2001 },
    { month: "Jul", users: 1900 },
    { month: "Aug", users: 1700 },
    { month: "Sep", users: 1300 },
    { month: "Oct", users: 1600 },
    { month: "Nov", users: 1131 },
    { month: "Dec", users: 802 },
  ];

  const newJoinedUsersArray = [
    {
      id: 1,
      userName: "Nima Zamani",
      userRole: "Web Developer",
      userImg: profilePic,
    },
    {
      id: 2,
      userName: "Tina Bahrami",
      userRole: "Scientist",
      userImg: profilePic,
    },
    {
      id: 3,
      userName: "Akbar Zamani",
      userRole: "Colonel",
    },
    {
      id: 4,
      userName: "Keyvan Zamani",
      userRole: "Soldier",
      userImg: profilePic,
    },
  ];

  return (
    <div className="sections-wrapper">
      <div className="statistic-boxes-wrapper">
        {statisticBoxesInfos.map((box) => (
          <StatisticBox key={box.id} {...box} />
        ))}
      </div>
      <div className="chart-wrapper">
        <Chart
          chartTitle="User Analytics"
          dataArray={userAnalyticsChartDatas}
          dataKey="users"
          grid
        />
      </div>
      <div className="widgets-wrapper">
        <div className="joined-users-box">
          <h3 className="joined-users-box__title">New Joined Members</h3>
          <ul className="joined-users-box__wrapper">
            {newJoinedUsersArray.map((user) => (
              <NewJoinedUser key={user.id} {...user} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
