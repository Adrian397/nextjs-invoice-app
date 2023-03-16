import { CreateInvoiceForm } from "@/components/CreateInvoiceForm/CreateInvoiceForm";
import { Invoice } from "@/components/Index/index.utils";
import { useState } from "react";
import {
  Arrow,
  Buttons,
  Dropdown,
  H1,
  Header,
  Info,
  Menu,
  NewInvoice,
} from "./InvoiceListHeader.styled";
import { countFilteredInvoices } from "./InvoiceListHeader.utils";

type Props = {
  activeStatuses: string[];
  setActiveStauses: React.Dispatch<React.SetStateAction<string[]>>;
  filteredInvoices: Invoice[];
};

export const InvoiceListHeader = ({
  activeStatuses,
  setActiveStauses,
  filteredInvoices,
}: Props) => {
  const statuses = ["draft", "pending", "paid"];

  const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false);

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleCheckboxChange = (status: string) => {
    if (activeStatuses.includes(status)) {
      setActiveStauses(activeStatuses.filter((s) => s !== status));
    } else {
      setActiveStauses([...activeStatuses, status]);
    }
  };

  return (
    <Header>
      <Info activeStatuses={activeStatuses}>
        <H1 activeStatuses={activeStatuses}>Invoices</H1>
        <p>{countFilteredInvoices(activeStatuses, filteredInvoices)}</p>
      </Info>
      <Buttons>
        <Menu>
          <button
            onClick={() =>
              setIsFilterDropdownVisible((prevState) => !prevState)
            }
          >
            <span>Filter by status</span>
            <Arrow
              isVisible={isFilterDropdownVisible}
              src="/icon-arrow-down.svg"
              alt="arrow"
            />
          </button>
          <Dropdown isVisible={isFilterDropdownVisible}>
            {statuses.map((status, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  checked={activeStatuses.includes(status)}
                  onChange={() => handleCheckboxChange(status)}
                />
                <span>{status}</span>
              </label>
            ))}
          </Dropdown>
        </Menu>
        <NewInvoice onClick={() => setIsFormVisible(true)}>
          <img src={"/icon-plus.svg"} alt="add new invoice" />
          <span>New Invoice</span>
        </NewInvoice>
      </Buttons>

      <CreateInvoiceForm
        isFormVisible={isFormVisible}
        onFormVisibilityChange={setIsFormVisible}
      />
    </Header>
  );
};
