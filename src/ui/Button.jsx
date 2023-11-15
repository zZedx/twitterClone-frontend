const Button = ({
  children,
  size = "large",
  width = "fit",
  style = {},
  disabled = false,
  addClass = "",
}) => {
  let buttonSizeClass = "";

  switch (size) {
    case "small":
      buttonSizeClass = "px-2 py-1 text-sm";
      break;
    case "normal":
      buttonSizeClass = "px-3 py-2 text-base";
      break;
    case "large":
    default:
      buttonSizeClass = "px-4 py-3 text-xl";
      break;
  }

  const buttonWidthClass =
    width === "full" ? "w-full" : width === "fit" ? "w-fit" : "";

  return (
    <button
      style={style}
      className={`${addClass} font-bold tracking-wide text-white transition-all rounded-full bg-brand hover:bg-brand/90  ${buttonSizeClass} ${buttonWidthClass} ${
        disabled ? "opacity-50 cursor-not-allowed " : "hover:bg-brand/90"
      }}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
