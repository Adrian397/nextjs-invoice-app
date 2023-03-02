import { FooterButton } from "../Form/FooterButton/FooterButton";
import { Form } from "../Form/Form";
import { Footer, Panel, Wrapper } from "./CreateInvoiceForm.styled";

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
      </Panel>
    </Wrapper>
  );
};
