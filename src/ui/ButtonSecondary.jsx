const ButtonSecondary = ({ children, onClick, type , disabled}) => {
  const style = type === "outline" ? "bg-transparent" : "bg-white text-black";
  return (
    <button
      className={`px-4 py-2 font-semibold transition-all border border-white/40 rounded-full hover:opacity-90 ${style}`}
      onClick={onClick}
      disabled = {disabled}
    >
      {children}
    </button>
  );
};

export default ButtonSecondary;
