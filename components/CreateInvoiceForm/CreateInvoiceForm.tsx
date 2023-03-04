import { Form } from "../Form/Form";
import { Panel, Wrapper } from "./CreateInvoiceForm.styled";

type Props = {
  isFormVisible: boolean;
  onFormVisibilityChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CreateInvoiceForm = ({
  isFormVisible,
  onFormVisibilityChange,
}: Props) => {
  return (
    <Wrapper
      isVisible={isFormVisible}
      onClick={() => onFormVisibilityChange(false)}
    >
      <Panel isVisible={isFormVisible} onClick={(e) => e.stopPropagation()}>
        <h2>New Invoice</h2>
        <Form />
      </Panel>
    </Wrapper>
  );
};
