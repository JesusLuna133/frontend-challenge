import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import InvoicesGrid from "./InvoicesGrid";
import InvoicesForm from "./InvoicesForm";
import { TableData } from "./constants/defaultTableData";
import { useModalStore, useStore } from "../../store";
import FileImport from "../../components/FileImport";

export default () => {
  const { showModal, setShowModal } = useModalStore();
  const {rowData, setRowData} = useStore();

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

    //Find the highest invoice number
    const maxInvoiceNumber = allInvoices.reduce((max, inv) => {
      const num = Number(inv.invoice_number) || 0;
      return num > max ? num : max;
    }, 0);

    //Assign the next invoice number
    const nextInvoiceNumber = maxInvoiceNumber + 1;
    const newInvoice = { ...invoice, invoice_number: nextInvoiceNumber };

    localInvoices.push(newInvoice);
    localStorage.setItem("invoice", JSON.stringify(localInvoices));
    handleCloseModal();
    getData();
  };

  const getData = () => {
    const defaultData = [...TableData];
    const localInvoices = JSON.parse(localStorage.getItem("invoice") || "[]");
    const allInvoices = [...defaultData, ...localInvoices];
    setRowData(allInvoices);
    console.log("localInvoices", localInvoices);
  };

  return (
    <div>
      <header className="relative bg-gray-700 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-100 p-4">
          Invoicing
        </h1>
      </header>

      <div className="flex justify-end mt-5 mr-8">
        
        <FileImport/>
        <button
          className="text-white bg-sky-600 py-1 px-2 hover:bg-sky-500 rounded hover:cursor-pointer"
          onClick={handleShowModal}>
          Add new invoice
        </button>
      </div>

      <InvoicesGrid rowData={rowData}/>
        <Modal
          title={"New Invoice"}
          size={"sm"}
          onClose={handleCloseModal}
          isOpen={showModal}
        >
          <InvoicesForm onClose={handleCloseModal} addNewInvoice={addNewInvoice}/>
        </Modal>
    </div>
  );
};
