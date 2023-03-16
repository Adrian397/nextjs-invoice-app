import { Invoice } from "@/components/Index/index.utils";

export const countFilteredInvoices = (
  activeStatuses: string[],
  filteredInvoices: Invoice[]
) => {
  if (activeStatuses.length === 0) {
    return `There are ${filteredInvoices.length} total invoices`;
  }

  if (activeStatuses.length > 0) {
    if (filteredInvoices.length === 1) {
      return `There is ${filteredInvoices.length} ${activeStatuses} invoice`;
    }

    return `There are ${filteredInvoices.length} ${activeStatuses.join(
      ", "
    )} invoices`;
  }
};
