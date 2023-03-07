export type ItemType = {
  name: string;
  quantity: string;
  price: string;
  total: string;
};

export type InitValuesType = {
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientName: string;
  clientEmail: string;
  description: string;
  items: ItemType[];
};
