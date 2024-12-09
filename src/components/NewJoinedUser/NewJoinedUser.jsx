import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import noUserImg from "../../assets/images/no-user-img.png";
import "./NewJoinedUser.css";
import PropTypes from "prop-types";

function NewJoinedUser({ userName, userRole, userImg = noUserImg }) {
  return (
    <li className="new-joined-user">
      <img src={userImg} alt={userName} className="new-joined-user__img" />
      <div className="new-joined-user__infos">
        <p className="new-joined-user__name">{userName}</p>
        <span className="new-joined-user__role">{userRole}</span>
      </div>
      <button className="new-joined-user__action-btn">
        <VisibilityIcon />
      </button>
    </li>
  );
}

NewJoinedUser.propTypes = {
  userName: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  userImg: PropTypes.string,
};

export default NewJoinedUser;
