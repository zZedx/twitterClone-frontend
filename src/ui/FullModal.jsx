import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";

const ModalContext = createContext();

const FullModal = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (opensWindowName) => setOpenName(opensWindowName);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

function Button({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    open(opensWindowName);
  }

  return cloneElement(children, { onClick: handleClick });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-[1000] overflow-hidden backdrop-blur-sm"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-20"
        onClick={close}
      ></div>
      <div className="fixed p-8 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-lg shadow-lg top-1/2 left-1/2">
        <button
          className="absolute p-1 transition duration-300 bg-gray-300 rounded-full top-4 right-4 hover:bg-gray-400"
          onClick={close}
        >
          <HiX className="w-6 h-6 text-gray-600" />
        </button>
        {cloneElement(children, { onCloseFullModal: close })}
      </div>
    </div>,
    document.body
  );
}

FullModal.Button = Button;
FullModal.Window = Window;

export default FullModal;
