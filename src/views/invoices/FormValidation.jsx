import * as Yup from "yup";

export const FormValidation = Yup.object().shape({
  client_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Name must only contain letters")
    .min(5, "Name must be atleast 5 characters")
    .required("Name is required"),
  date: Yup.date().required("Date is required"),
  amount: Yup.number()
    .typeError("Amount must be a number")
    .positive("Amount must be greater than zero")
    .required("Amount is required"),
  status: Yup.string()
    .oneOf(["1", "2"], "Select a valid status")
    .required("Status is required"),
});
