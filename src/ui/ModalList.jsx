const ModalList = ({ children }) => {
  return (
      <div className="z-10 flex flex-col gap-2 py-2 rounded-md w-fit shadow-shadowMain">
        {children}
      </div>
  );
};

const Item = ({ label, onClick }) => {
  return <button className="px-4 py-1 hover:bg-secondary">{label}</button>;
};

ModalList.Item = Item;

export default ModalList;
