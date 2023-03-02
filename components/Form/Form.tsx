import { useState } from "react";
import { BillFrom } from "./BillFrom/BillFrom";
import { BillTo } from "./BillTo/BillTo";
import { DateButton } from "./DateButton/DateButton";
import {
  AddItem,
  Box,
  InputWrapper,
  InvoiceForm,
  ItemList,
  Labels,
  Scroll,
} from "./Form.styled";
import { Item } from "./Item/Item";
import { PaymentTermsButton } from "./PaymentTermsButton/PaymentTermsButton";

export const Form = () => {
  const [items, setItems] = useState<string[]>([]);

  const handleAddItem = () => {
    setItems([...items, ""]);
  };

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
              <label>Project Description</label>
              <input type="text" placeholder="e.g. Graphic Design Service" />
            </InputWrapper>
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

              {items.map((item, index) => (
                <Item key={index} />
              ))}

              <button type="button" onClick={handleAddItem}>
                + Add New Item
              </button>
            </AddItem>
          </ItemList>
        </Scroll>
      </div>
    </InvoiceForm>
  );
};
