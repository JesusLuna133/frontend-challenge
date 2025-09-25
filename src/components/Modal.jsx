import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children, size = "md", title }) => {
  const getModalSize = () => {
    switch (size) {
      case "sm":
        return "w-11/12 md:w-1/3 lg:w-1/4";
      case "md":
        return "w-11/12 md:w-1/2 lg:w-1/3";
      case "lg":
        return "w-11/12 md:w-3/4 lg:w-2/3";
      case "full":
        return "w-full h-full";
      default:
        return "w-11/12 md:w-1/2 lg:w-1/3";
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className={`bg-white rounded-lg shadow-lg p-6 relative ${getModalSize()} ${
              size === "full" ? "rounded-none" : ""
            }`}
          >
            <div className="flex justify-between border-b border-gray-200 pb-4 mb-4 text-xl font-bold">
              <h2>{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div
              className={
                size === "full" ? "h-[calc(100vh-8rem)] overflow-y-auto" : ""
              }
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
