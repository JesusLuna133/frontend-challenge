import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import InvoicesGrid from "./InvoicesGrid";
import InvoicesForm from "./InvoicesForm";
import { TableData } from "./constants/defaultDataTable";

export default () => {
  const [showModal, setShowModal] = useState(false);
  const [rowData, setRowData] = useState([]);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getData();
  }, []);

  const addNewInvoice = (invoice) => {
    const localInvoices = JSON.parse(localStorage.getItem("invoice") || "[]");
    const allInvoices = [...TableData, ...localInvoices];

    // Find the highest invoice number
    const maxInvoiceNumber = allInvoices.reduce((max, inv) => {
      const num = Number(inv.invoice_number) || 0;
      return num > max ? num : max;
    }, 0);

    // Assign the next invoice number
    const nextInvoiceNumber = maxInvoiceNumber + 1;
    const newInvoice = { ...invoice, invoice_number: nextInvoiceNumber };

    localInvoices.push(newInvoice);
    localStorage.setItem("invoice", JSON.stringify(localInvoices));
    handleCloseModal();
    getData();
  };

  const getData = () => {
    const defaultData = [...TableData]; // create a copy
    const localInvoices = JSON.parse(localStorage.getItem("invoice") || "[]");
    const allInvoices = [...defaultData, ...localInvoices];
    setRowData(allInvoices);
    console.log("localInvoices", localInvoices);
  };

  return (
    <div>
      <div className="flex justify-end mt-5 mr-8">
        <button
          className="text-white bg-sky-500 py-1 px-2 hover:bg-sky-300 rounded hover:cursor-pointer"
          onClick={handleShowModal}
        >
          Add new invoice
        </button>
      </div>
      <InvoicesGrid rowData={rowData} />
      <Modal
        title={"New Invoice"}
        size={"md"}
        onClose={handleCloseModal}
        isOpen={showModal}
      >
        <InvoicesForm
          onClose={handleCloseModal}
          addNewInvoice={addNewInvoice}
        />
      </Modal>
    </div>
  );
};
