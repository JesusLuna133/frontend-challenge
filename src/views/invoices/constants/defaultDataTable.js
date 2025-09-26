import { setLocale } from "yup";

export const TableData = [
  {
    invoice_number: 1,
    client_name: "Rachel Walker",
    date: new Date("09/23/2024"),
    status: "Paid",
    amount: Number(14050).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  },
  {
    invoice_number: 2,
    client_name: "Jacqueline Bell",
    date: new Date("05/08/2023"),
    status: "Paid",
    amount: Number(89201).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  },
  {
    invoice_number: 3,
    client_name: "Tiffany Myers",
    date: new Date("09/11/2023"),
    status: "Unpaid",
    amount: Number(38291).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  },
  {
    invoice_number: 4,
    client_name: "Emily Jackson",
    date: new Date("12/10/2024"),
    status: "Paid",
    amount: Number(8392).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  },
  {
    invoice_number: 5,
    client_name: "Florence Boyd",
    date: new Date("04/18/2024"),
    status: "Unpaid",
    amount: Number(47292).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    }),
  },
];
