import { FormikProps } from "formik";
import { InitValuesType } from "../Form.utils";
import { NarrowInput, NarrowInputs, WideInput } from "../Inputs/Inputs.styled";
import { Bill } from "./BillTo.styled";

type Props = {
  formik: FormikProps<InitValuesType>;
};

export const BillTo = ({ formik }: Props) => {
  return (
    <Bill>
      <p>Bill To</p>
      <WideInput isError={formik.errors.clientName}>
        <div>
          <label>Client's Name</label>
          <span>{formik.errors.clientName}</span>
        </div>
        <input
          type="text"
          {...formik.getFieldProps("clientName")}
          onBlur={() => {
            formik.validateField("clientName");
          }}
        />
      </WideInput>
      <WideInput isError={formik.errors.clientEmail}>
        <div>
          <label>Client's Email</label>
          <span>{formik.errors.clientEmail}</span>
        </div>
        <input
          type="text"
          placeholder="e.g. email@example.com"
          {...formik.getFieldProps("clientEmail")}
          onBlur={() => {
            formik.validateField("clientEmail");
          }}
        />
      </WideInput>
      <WideInput isError={formik.errors.clntAddrStreet}>
        <div>
          <label>Street Address</label>
          <span>{formik.errors.clntAddrStreet}</span>
        </div>
        <input
          type="text"
          {...formik.getFieldProps("clntAddrStreet")}
          onBlur={() => {
            formik.validateField("clntAddrStreet");
          }}
        />
      </WideInput>

      <NarrowInputs>
        <NarrowInput isError={formik.errors.clntAddrCity}>
          <div>
            <label>City</label>
            <span>{formik.errors.clntAddrCity}</span>
          </div>
          <input
            type="text"
            {...formik.getFieldProps("clntAddrCity")}
            onBlur={() => {
              formik.validateField("clntAddrCity");
            }}
          />
        </NarrowInput>
        <NarrowInput isError={formik.errors.clntAddrPostCode}>
          <div>
            <label>Post Code</label>
            <span>{formik.errors.clntAddrPostCode}</span>
          </div>
          <input
            type="text"
            {...formik.getFieldProps("clntAddrPostCode")}
            onBlur={() => {
              formik.validateField("clntAddrPostCode");
            }}
          />
        </NarrowInput>
        <NarrowInput isError={formik.errors.clntAddrCountry}>
          <div>
            <label>Country</label>
            <span>{formik.errors.clntAddrCountry}</span>
          </div>
          <input
            type="text"
            {...formik.getFieldProps("clntAddrCountry")}
            onBlur={() => {
              formik.validateField("clntAddrCountry");
            }}
          />
        </NarrowInput>
      </NarrowInputs>
    </Bill>
  );
};
