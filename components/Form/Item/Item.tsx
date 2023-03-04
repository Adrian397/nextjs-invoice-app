import { useFormikContext } from "formik";
import { Dispatch, SetStateAction } from "react";
import { ItemType } from "../Form.utils";
import { InputsWrapper } from "./Item.styled";

type Props = {
  index: number;
  items: ItemType[];
  item: ItemType;
  onValueChange: Dispatch<SetStateAction<ItemType[]>>;
};

export const Item = ({ item, onValueChange, items, index }: Props) => {
  const formik = useFormikContext();

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ItemType
  ) => {
    const value = e.target.value;
    const updatedItems = [...items];
    const updatedItem = {
      ...item,
      [field]: value,
    };

    if (field === "price") {
      if (value && !/^\d+(\.\d{0,2})?$/.test(value)) {
        return;
      }
    }

    if (field === "quantity") {
      if (value && !/^[0-9\b]+$/.test(value)) {
        return;
      }
    }

    updatedItem.total = (
      +updatedItem.quantity * +updatedItem.price
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    updatedItems[index] = updatedItem;

    onValueChange(updatedItems);
    formik.setFieldValue("items", updatedItems);
  };

  return (
    <InputsWrapper>
      <input value={item.name} onChange={(e) => handleInputValue(e, "name")} />
      <input
        value={item.quantity}
        onChange={(e) => handleInputValue(e, "quantity")}
        placeholder={!item.quantity ? "0" : ""}
      />
      <input
        value={item.price}
        onChange={(e) => handleInputValue(e, "price")}
        placeholder={!item.price ? "0.00" : ""}
      />
      <span>{item.quantity && item.price ? item.total : "0.00"}</span>
      <div>
        <button type="button" />
      </div>
    </InputsWrapper>
  );
};
