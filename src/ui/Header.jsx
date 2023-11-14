const Header = ({ filter, setFilter }) => {
  return (
    <div className="fixed top-0 w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6 border-b bg-opacity-80 backdrop-blur-lg bg-black">
      <ul className="flex">
        <Filter
          name="For You"
          active={filter === "for-you"}
          onClick={() => setFilter("for-you")}
        />
        <Filter
          name="Following"
          active={filter === "following"}
          onClick={() => setFilter("following")}
        />
      </ul>
    </div>
  );
};

function Filter({ name, active, onClick }) {
  return (
    <li
      className={`px-8 py-4 font-semibold border-b-4 cursor-pointer hover:bg-secondary ${
        active ? "border-brand text-white" : "border-transparent text-white/50"
      }`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}

export default Header;
