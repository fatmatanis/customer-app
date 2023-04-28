export interface ICustomer {
  id: number;
  name: string;
}

export interface ICustomerItemProps {
  customer: ICustomer;
  onDelete: (customer: ICustomer) => void;
}

export interface ICustomerListProps {
  customers: ICustomer[];
  onDelete: (customer: ICustomer) => void;
}

export interface ICustomerFormProps {
  onAdd: (newCustomer: ICustomer) => void;
}
