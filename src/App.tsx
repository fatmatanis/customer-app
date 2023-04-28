import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerForm from "./components/CustomerForm";
import CustomerList from "./components/CustomerList";
import { ICustomer } from "./types/interfaces";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setCustomers(response.data);
      } catch (error) {
        setError("An error occurred while fetching users.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const addNewCustomers = (newCustomer: ICustomer) => {
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  const handleDelete = (customer: ICustomer) => {
    const filterCustomer = customers.filter((item) => item.id !== customer.id);
    setCustomers(filterCustomer);
  };
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm onAdd={addNewCustomers} />
      {customers.length > 0 ? (
        <CustomerList customers={customers} onDelete={handleDelete} />
      ) : (
        <p>There are no customers...</p>
      )}
    </div>
  );
}

export default App;
