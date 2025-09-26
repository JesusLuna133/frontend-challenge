import React from "react";
import { CForm, CFormInput } from "@coreui/react";
import { CCol, CRow } from "@coreui/react";
import { CFormSelect } from "@coreui/react";
import { useFormik } from "formik";
import { FormValidation } from "./FormValidation";

const initialValues = {
  client_name: "",
  date: "",
  amount: "",
  status: "",
};

const InvoicesForm = ({ addNewInvoice, onClose }) => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: FormValidation,
      onSubmit: (values) => addNewInvoice(values),
      validateOnBlur: false,
      validateOnChange: false,
    });
  return (
    <CForm
      onSubmit={handleSubmit}
      className="p-5 border border-gray-300 rounded-md shadow-md bg-white"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <CFormInput
          className="py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          type="text"
          name="client_name"
          value={values.client_name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.client_name ? (
          <div className="text-sm text-red-600">{errors.client_name}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label className="py-1 block text-sm font-medium text-gray-700">
          Date
        </label>
        <div>
          <input
            type="date"
            locale="en-US"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.date ? (
          <div className="text-sm text-red-600">{errors.date}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <CFormInput
          className="py-1 no-arrows border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          type="number"
          placeholder="0"
          name="amount"
          value={values.amount}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.amount ? (
          <div className="text-sm text-red-600">{errors.amount}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <CFormSelect
          className="py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          name="status"
          value={values.status}
          onChange={handleChange}
          onBlur={handleBlur}
          options={[
            { label: "Select a status" },
            { label: "Paid", value: "1" },
            { label: "Unpaid", value: "2" },
          ]}
        />
        {errors.status ? (
          <div className="text-sm text-red-600">{errors.status}</div>
        ) : null}
      </div>

      <div className="flex justify-end mt-5">
        <button
          type="submit"
          className="text-white bg-sky-500 py-1 px-2 hover:bg-sky-300 rounded hover:cursor-pointer"
        >
          Add Invoice
        </button>
      </div>
    </CForm>
  );
};

export default InvoicesForm;
