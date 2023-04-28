import React from "react";
import { ICustomerItemProps } from "../../types/interfaces";
import "./styles.css";

const CustomerItem = ({ customer, onDelete }: ICustomerItemProps) => {
  return (
    <li className="customer-item">
      <div className="customer-info">
        <img
          src="https://i.pravatar.cc/300"
          alt="customer-avatar"
          className="customer-avatar"
        />
        <span className="customer-name">{customer.name}</span>
      </div>
      <button className="delete-button" onClick={() => onDelete(customer)}>
        <i className="bi bi-trash3" />
      </button>
    </li>
  );
};
export default CustomerItem;
