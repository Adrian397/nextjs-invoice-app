import * as Yup from "yup";

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

export const validationSchema = Yup.object().shape({
  // sendAddrStreet: Yup.string().required("can't be empty"),
  // sendAddrCity: Yup.string().required("can't be empty"),
  // sendAddrPostCode: Yup.string().required("can't be empty"),
  // sendAddrCountry: Yup.string().required("can't be empty"),
  // clntAddrStreet: Yup.string().required("can't be empty"),
  // clntAddrCity: Yup.string().required("can't be empty"),
  // clntAddrPostCode: Yup.string().required("can't be empty"),
  // clntAddrCountry: Yup.string().required("can't be empty"),

  senderAddress: Yup.object().shape({
    street: Yup.string().required("can't be empty"),
    city: Yup.string().required("can't be empty"),
    postCode: Yup.string().required("can't be empty"),
    country: Yup.string().required("can't be empty"),
  }),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("can't be empty"),
    city: Yup.string().required("can't be empty"),
    postCode: Yup.string().required("can't be empty"),
    country: Yup.string().required("can't be empty"),
  }),
  description: Yup.string().required("can't be empty"),
  clientName: Yup.string().required("can't be empty"),
  clientEmail: Yup.string()
    .email("invalid email format")
    .required("can't be empty"),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("can't be empty"),
        quantity: Yup.string().required(),
        price: Yup.string().required(),
        total: Yup.number(),
      })
    )
    .min(1, "- An item must be added."),
});
