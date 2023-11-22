const ConfirmDelete = ({ onConfirm, onCloseFullModal, text, disabled }) => {
  return (
    <div className="relative z-50 flex flex-col items-center justify-center rounded-xl">
      <h1 className="text-xl font-bold">Delete {text}</h1>
      <p className="mt-2 text-center">
        Are you sure you want to delete this {text}?
      </p>
      <div className="flex gap-4 mt-4">
        <button
          className="w-1/2 px-4 py-2 text-white bg-gray-500 rounded-xl"
          onClick={onCloseFullModal}
        >
          Cancel
        </button>
        <button
          className="w-1/2 px-4 py-2 text-white bg-red-500 rounded-xl"
          onClick={onConfirm}
          disabled={disabled}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
