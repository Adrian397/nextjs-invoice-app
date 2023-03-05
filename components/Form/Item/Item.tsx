import { FieldArrayRenderProps, useFormikContext } from "formik";
import { useEffect } from "react";
import { InitValuesType, ItemType } from "../Form.utils";
import { InputsWrapper } from "./Item.styled";
import { ItemInput } from "./ItemInput/ItemInput";

type Props = {
  index: number;
  item: ItemType;
  helpers: FieldArrayRenderProps;
};

export const Item = ({ item, index, helpers }: Props) => {
  const { values, setFieldValue, getFieldProps } =
    useFormikContext<InitValuesType>();

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof ItemType,
    name: string
  ) => {
    const value = e.target.value;

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

    setFieldValue(name, value);
  };

  useEffect(() => {
    const total = +values.items[index].quantity * +values.items[index].price;
    const rounded = (
      Math.round((total + Number.EPSILON) * 100) / 100
    ).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    setFieldValue(`items[${index}].total`, rounded || "0.00");
  }, [values.items[index].quantity, values.items[index].price]);

  return (
    <InputsWrapper>
      <ItemInput
        name={`items[${index}].name`}
        onChange={(e) => handleInputValue(e, "name", `items[${index}].name`)}
        isDisabled={false}
      />
      <ItemInput
        {...getFieldProps(`items[${index}].quantity`)}
        name={`items[${index}].quantity`}
        onChange={(e) =>
          handleInputValue(e, "quantity", `items[${index}].quantity`)
        }
        placeholder={!item.quantity ? "0" : ""}
        isDisabled={false}
      />
      <ItemInput
        name={`items[${index}].price`}
        onChange={(e) => handleInputValue(e, "price", `items[${index}].price`)}
        placeholder={!item.price ? "0.00" : ""}
        isDisabled={false}
      />
      <ItemInput name={`items[${index}].total`} isDisabled={true} />
      <div>
        <button type="button" onClick={() => helpers.remove(index)} />
      </div>
    </InputsWrapper>
  );
};
