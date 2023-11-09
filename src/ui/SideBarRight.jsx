import Search from "./Search";

const SideBarRight = () => {
  return (
    <div className="fixed top-0 right-0 w-1/4 h-screen border-l">
      <div className="px-12 py-4">
        <Search />
      </div>
    </div>
  );
};

export default SideBarRight;
