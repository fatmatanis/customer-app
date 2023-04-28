import CustomerItem from "../CustomerItem";
import { ICustomer, ICustomerListProps } from "../../types/interfaces";

const CustomerList = ({ customers, onDelete }: ICustomerListProps) => {
  const handleDelete = (customer: ICustomer) => {
    onDelete(customer);
  };

  return (
    <ul className="customer-list">
      {customers.map((customer) => (
        <CustomerItem
          customer={customer}
          key={customer.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
