import { useState } from "react";
import Modal from "../../components/Modal";
import InvoicesGrid from "./InvoicesGrid";

export default () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleShowModal}>Add new invoice</button>
      <InvoicesGrid />
      <Modal
        title={"New Invoice"}
        onClose={handleCloseModal}
        isOpen={showModal}
      >
        Hi
      </Modal>
    </div>
  );
};
