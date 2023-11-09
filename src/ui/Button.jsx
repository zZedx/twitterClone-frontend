const Button = ({ children }) => {
  return (
    <button className="px-4 py-3 mt-3 text-xl font-bold tracking-wide text-white transition-all rounded-full bg-brand hover:bg-brand/90 w-fit xl:w-full">
      {children}
    </button>
  );
};

export default Button;
