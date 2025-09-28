import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const InvoicesGrid = ({ rowData = [] }) => {
  const [colDefs, setColDefs] = useState([
    { headerName: "Invoice Number", field: "invoice_number" },
    { headerName: "Client Name", field: "client_name" },
    {
      headerName: "Date",
      field: "date",
      cellDataType: "date",
      filter: true,
      valueFormatter: (params) => {
        if (!params.value) return "";
        const date = new Date(params.value);
        return date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });
      },
      filterParams: {
        filterOptions: ["between"], //Only show equals filter
      },
    },
    {
      headerName: "Status",
      field: "status",
      filter: true,
      valueFormatter: (params) => {
        if (params.value === "1") return "Paid";
        if (params.value === "2") return "Unpaid";
        return params.value || "";
      },
      filterValueGetter: (params) => {
        if (params.data.status === "1") return "Paid";
        if (params.data.status === "2") return "Unpaid";
        return "";
      },
      filterParams: {
        values: ["Paid", "Unpaid"], // Only show these in the filter dropdown
        filterOptions: ["equals"], // Only show "equals" filter
      },
    },
    {
      headerName: "Amount",
      field: "amount",
      valueFormatter: (params) => {
        if (!params.value) return "";
        const amount = Number(
          params.value.toString().replace(/[^0-9.-]+/g, "")
        );
        return amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      },
    },
  ]);

  const defaultColDef = {
    flex: 1,
  };

  return (
    <div className="mt-6 flex justify-center">
      <div className="ag-theme-quartz" style={{ height: 520, width: "90%" }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={false}
        />
      </div>
    </div>
  );
};

export default InvoicesGrid;
