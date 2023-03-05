import { FieldArray, Formik } from "formik";
import { BillFrom } from "./BillFrom/BillFrom";
import { BillTo } from "./BillTo/BillTo";
import { DateButton } from "./DateButton/DateButton";
import { FooterButton } from "./FooterButton/FooterButton";
import {
  AddItem,
  Box,
  Footer,
  InvoiceForm,
  ItemList,
  Labels,
  Scroll,
} from "./Form.styled";
import { InitValuesType, validationSchema } from "./Form.utils";
import { Item } from "./Item/Item";
import { PaymentTermsButton } from "./PaymentTermsButton/PaymentTermsButton";

export const Form = () => {
  const initialValues: InitValuesType = {
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },

    clientName: "",
    clientEmail: "",
    description: "",
    items: [],
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => (
        <InvoiceForm onSubmit={formik.handleSubmit}>
          <div>
            <Scroll>
              <BillFrom formik={formik} />
              <BillTo formik={formik} />
              <Box>
                <div>
                  <DateButton />
                  <PaymentTermsButton />
                </div>
                {/* <InputWrapper isError={formik.errors.description}>
                  <div>
                    <label>Project Description</label>
                    <span>{formik.errors.description}</span>
                  </div>
                  <input
                    type="text"
                    placeholder="e.g. Graphic Design Service"
                    {...formik.getFieldProps("description")}
                    onBlur={() => {
                      formik.validateField("description");
                    }}
                  />
                </InputWrapper> */}
              </Box>
              <ItemList>
                <h2>Item List</h2>
                <AddItem>
                  <Labels>
                    <span>Item Name</span>
                    <span>Qty.</span>
                    <span>Price</span>
                    <span>Total</span>
                  </Labels>
                  <FieldArray
                    name="items"
                    render={(helpers) => (
                      <>
                        {formik.values.items.map((item, index) => (
                          <Item
                            key={index}
                            item={item}
                            index={index}
                            helpers={helpers}
                          />
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            helpers.push({
                              name: "",
                              quantity: "",
                              price: "",
                              total: "",
                            })
                          }
                        >
                          + Add New Item
                        </button>
                      </>
                    )}
                  />
                </AddItem>
              </ItemList>
            </Scroll>
          </div>
          <Footer>
            <FooterButton
              bgColor="rgba(249, 250, 254, 1)"
              txtColor="rgba(126, 136, 195, 1)"
              type="button"
            >
              Discard
            </FooterButton>
            <div>
              <FooterButton
                bgColor="rgba(55, 59, 83, 1)"
                txtColor="rgba(136, 142, 176, 1)"
                type="button"
              >
                Save as Draft
              </FooterButton>
              <FooterButton
                bgColor="rgba(124, 93, 250, 1)"
                txtColor="white"
                type="submit"
              >
                Save & Send
              </FooterButton>
            </div>
          </Footer>
        </InvoiceForm>
      )}
    </Formik>
  );
};
