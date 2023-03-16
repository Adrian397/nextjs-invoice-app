import { Form } from "../Form/Form";
import { Invoice } from "../Index/index.utils";
import { Panel, Wrapper } from "./EditInvoiceForm.styled";

type Props = {
  isFormVisible: boolean;
  onFormVisibilityChange: React.Dispatch<React.SetStateAction<boolean>>;
  invoice: Invoice;
};

export const EditInvoiceForm = ({
  invoice,
  isFormVisible,
  onFormVisibilityChange,
}: Props) => {
  return (
    <Wrapper
      isVisible={isFormVisible}
      onClick={() => onFormVisibilityChange(false)}
    >
      <Panel isVisible={isFormVisible} onClick={(e) => e.stopPropagation()}>
        <h2>
          Edit <span>#</span>
          {invoice.id}
        </h2>
        <Form />
      </Panel>
    </Wrapper>
  );
};
