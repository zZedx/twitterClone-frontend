const Header = ({children , addClass = ""}) => {
  return (
    <div className={`bg-black h-16 flex items-center fixed top-0 border bg-opacity-80 backdrop-blur-lg z-50 ${addClass}`}>
      {children}
    </div>
  );
};

export function Filter({ name, active, onClick }) {
  return (
    <li
      className={`px-8 h-full flex items-center font-semibold border-b-4 cursor-pointer hover:bg-secondary ${
        active ? "border-brand text-white" : "border-transparent text-white/50"
      }`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default Header;
