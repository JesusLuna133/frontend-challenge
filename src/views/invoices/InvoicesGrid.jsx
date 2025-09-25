import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
//import NewInvoice from "./NewInvoice";
ModuleRegistry.registerModules([AllCommunityModule]);

const InvoicesGrid = () => {
  const [rowData, setRowData] = useState([
    {
      invoice_number: 1,
      client_name: "Rachel Walker",
      date: "23/09/2024",
      status: "Paid",
      amount: "14050",
    },
    {
      invoice_number: 2,
      client_name: "Jacqueline Bell",
      date: "05/08/2023",
      status: "Paid",
      amount: "89201",
    },
    {
      invoice_number: 3,
      client_name: "Tiffany Myers",
      date: "09/11/2023",
      status: "Unpaid",
      amount: "38291",
    },
    {
      invoice_number: 4,
      client_name: "Emily Jackson",
      date: "10/12/2024",
      status: "Paid",
      amount: "8392",
    },
    {
      invoice_number: 5,
      client_name: "Florence Boyd",
      date: "18/04/2024",
      status: "Unpaid",
      amount: "47292",
    },
  ]);

  const [colDefs, setColDefs] = useState([
    { headerName: "Invoice Number", field: "invoice_number" },
    { headerName: "Client Name", field: "client_name" },
    { headerName: "Date", field: "date" },
    { headerName: "Status", field: "status" },
    { headerName: "Amount", field: "amount" },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default InvoicesGrid;
