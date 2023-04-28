import React, { useState } from "react";
import { ICustomerFormProps } from "../../types/interfaces";
import "./styles.css";

const CustomerForm = ({ onAdd }: ICustomerFormProps) => {
  const [customerName, setCustomerName] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      name: customerName,
    };
    customerName.length > 0 && onAdd(newCustomer);
    setCustomerName("");
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
      />
      <button>
        <i className="bi bi-plus-lg" />
      </button>
    </form>
  );
};

export default CustomerForm;
