import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import profilePic from "../../../assets/images/profile-pic.webp";
import "./Topbar.css";

function TopBarIcon({ icon, badge }) {
  return (
    <a href="Javascript:void(0)" className="top-bar__icon-wrapper">
      {icon}
      {badge && <span className="topbar__icon-badge">{badge}</span>}
    </a>
  );
}

export default function Topbar() {
  const topBarIconsArray = [
    { id: 3, icon: <NotificationsNoneIcon classes="topbar__icon" />, badge: 2 },
    { id: 2, icon: <LanguageIcon classes="topbar__icon" />, badge: 2 },
    { id: 1, icon: <SettingsIcon classes="topbar__icon" /> },
  ];

  return (
    <div className="top-bar container">
      <div className="top-bar__left">
        <div className="top-bar__left-content">
          <h1 className="top-bar__logo-title">SabzLearn❤</h1>
        </div>
      </div>
      <div className="top-bar__right">
        {topBarIconsArray.map((topBarIcon) => (
          <TopBarIcon key={topBarIcon.id} {...topBarIcon} />
        ))}
        <a href="Javascript:void(0)" className="top-bar__profile-pic-wrapper">
          <img src={profilePic} alt="user" className="top-bar__profile-pic" />
        </a>
      </div>
    </div>
  );
}
