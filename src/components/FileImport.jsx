import React, { useState } from "react";
import { FlatfileButton } from "@flatfile/react";
import InvoicesGrid from "../views/invoices/InvoicesGrid";

export default function FileImport() {
  const [rowData, setRowData] = useState([]);

  const handleFlatfileData = (results) => {
    // results.data is an array of objects from the CSV
    setRowData(results.data);
  };

  return (
    <div>
      <FlatfileButton
        licenseKey="YOUR_FLATFILE_LICENSE_KEY"
        settings={{
          type: "Invoices Import",
          fields: [
            { label: "Invoice Number", key: "invoice_number" },
            { label: "Client Name", key: "client_name" },
            { label: "Date", key: "date" },
            { label: "Status", key: "status" },
            { label: "Amount", key: "amount" },
          ],
        }}
        onData={handleFlatfileData}
      >
        Import CSV
      </FlatfileButton>
      <InvoicesGrid rowData={rowData} />
    </div>
  );
}