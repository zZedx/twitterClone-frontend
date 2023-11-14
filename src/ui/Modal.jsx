import { cloneElement, useState } from "react";
import { createContext, useContext } from "react";
import { useOutsideClick } from "../helpers/useOutsideClick";

const Context = createContext();

const Modal = ({ children , className}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      <div className={className}>{children}</div>
    </Context.Provider>
  );
};

const Button = ({ children }) => {
  const { setIsOpen } = useContext(Context);
  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((e) => !e);
  }
  return cloneElement(children, { onClick: handleClick});
};

const Body = ({ children , position}) => {
  const ref = useOutsideClick(() => setIsOpen(false), false);
  const { isOpen, setIsOpen } = useContext(Context);
  if (!isOpen) return null;
  return <div ref={ref} className={`absolute ${position}`}>{children}</div>;
};

Modal.Button = Button;
Modal.Body = Body;

export default Modal;
