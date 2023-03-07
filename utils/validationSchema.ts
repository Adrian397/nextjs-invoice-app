import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required("- All fields must be filled."),
    city: Yup.string().required("- All fields must be filled."),
    postCode: Yup.string().required("- All fields must be filled."),
    country: Yup.string().required("- All fields must be filled."),
  }),
  clientAddress: Yup.object().shape({
    street: Yup.string().required("- All fields must be filled."),
    city: Yup.string().required("- All fields must be filled."),
    postCode: Yup.string().required("- All fields must be filled."),
    country: Yup.string().required("- All fields must be filled."),
  }),
  description: Yup.string().required("- All fields must be filled."),
  clientName: Yup.string().required("- All fields must be filled."),
  clientEmail: Yup.string()
    .email("invalid email format")
    .required("- All fields must be filled."),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required("- All fields must be filled."),
        quantity: Yup.string().required("- All fields must be filled."),
        price: Yup.string().required("- All fields must be filled."),
        total: Yup.number(),
      })
    )
    .min(1, "- An item must be added."),
});

export const reduceErrors = (errors: any): string[] => {
  const messages = [];
  for (const key in errors) {
    const value = errors[key];
    if (typeof value === "string") {
      messages.push(value);
    } else if (typeof value === "object") {
      messages.push(...reduceErrors(value));
    } else if (Array.isArray(value)) {
      for (const item of value) {
        messages.push(...reduceErrors(item));
      }
    }
  }

  return Array.from(new Set(messages));
};
