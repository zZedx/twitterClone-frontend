const ModalList = ({ children }) => {
  return (
    <div className="flex flex-col border-2 rounded-md w-fit shadow-shadowMain">
      {children}
    </div>
  );
};

const Item = ({ children, onClick, disabled }) => {
  return (
    <button
      className="z-20 px-4 py-1 font-bold text-left bg-black hover:bg-secondary"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

ModalList.Item = Item;

export default ModalList;
