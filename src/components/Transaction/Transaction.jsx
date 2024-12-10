import React from "react";
import noUserImg from "../../assets/images/no-user-img.png";
import PropTypes from "prop-types";
import "./Transaction.css";

function Transaction({
  customerName,
  customerImg = noUserImg,
  date,
  amount,
  status,
}) {
  return (
    <tr className="transaction">
      <td className="transaction-table-cell transaction__customer-img-and-name">
        <img
          className="transaction__customer-img"
          src={customerImg}
          alt={customerName}
        />
        <span className="transaction__customer-name">{customerName}</span>
      </td>
      <td className="transaction-table-cell transaction__date">{date}</td>
      <td className="transaction-table-cell transaction__amount">${amount}</td>
      <td className="transaction-table-cell">
        <span className={`transaction__status transaction__status--${status}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

Transaction.propTypes = {
  customerName: PropTypes.string.isRequired,
  customerImg: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default Transaction;
