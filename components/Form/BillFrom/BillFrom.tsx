import { FormikProps } from "formik";
import { InitValuesType } from "../Form.utils";
import { NarrowInput, NarrowInputs, WideInput } from "../Inputs/Inputs.styled";
import { Bill } from "./BillFrom.styled";

type Props = {
  formik: FormikProps<InitValuesType>;
};

export const BillFrom = ({ formik }: Props) => {
  console.log(formik.errors);
  return (
    <Bill>
      <p>Bill From</p>
      <WideInput isError={formik.errors.sendAddrStreet}>
        <div>
          <label>Street Address</label>
          <span>{formik.errors.sendAddrStreet}</span>
        </div>

        <input
          type="text"
          {...formik.getFieldProps("sendAddrStreet")}
          onBlur={
            // formik.handleBlur
            () => formik.validateField("sendAddrStreet")
          }
        />
      </WideInput>

      <NarrowInputs>
        <NarrowInput isError={formik.errors.sendAddrCity}>
          <div>
            <label>City</label>
            <span>{formik.errors.sendAddrCity}</span>
          </div>
          <input
            type="text"
            {...formik.getFieldProps("sendAddrCity")}
            onBlur={() => {
              formik.validateField("sendAddrCity");
            }}
          />
        </NarrowInput>
        <NarrowInput isError={formik.errors.sendAddrPostCode}>
          <div>
            <label>Post Code</label>
            <span>{formik.errors.sendAddrPostCode}</span>
          </div>
          <input
            type="text"
            {...formik.getFieldProps("sendAddrPostCode")}
            onBlur={() => {
              formik.validateField("sendAddrPostCode");
            }}
          />
        </NarrowInput>
        <NarrowInput isError={formik.errors.sendAddrCountry}>
          <div>
            <label>Country</label>
            <span>{formik.errors.sendAddrCountry}</span>
          </div>
          <input
            type="text"
            {...formik.getFieldProps("sendAddrCountry")}
            onBlur={() => {
              formik.validateField("sendAddrCountry");
            }}
          />
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};
