import { BillFrom } from "./BillFrom/BillFrom";
import { BillTo } from "./BillTo/BillTo";
import { DateButton } from "./DateButton/DateButton";
import { FooterButton } from "./FooterButton/FooterButton";
import {
  AddList,
  Box,
  Footer,
  InputWrapper,
  InvoiceForm,
  ItemList,
  Scroll,
} from "./Form.styled";
import { PaymentTermsButton } from "./PaymentTermsButton/PaymentTermsButton";

export const Form = () => {
  return (
    <InvoiceForm>
      <div>
        <Scroll>
          <BillFrom />
          <BillTo />
          <Box>
            <div>
              <DateButton />
              <PaymentTermsButton />
            </div>
            <InputWrapper>
              <label htmlFor="projectDesc">Project Description</label>
              <input
                type="text"
                id="projectDesc"
                placeholder="e.g. Graphic Design Service"
              />
            </InputWrapper>
          </Box>
          <ItemList>
            <h2>Item List</h2>
            <AddList>
              <div>
                <span>Item Name</span>
                <span>Qty.</span>
                <span>Price</span>
                <span>Total</span>
              </div>
            </AddList>
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
  );
};
