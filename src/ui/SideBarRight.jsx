import Search from "./Search";

const SideBarRight = () => {
  return (
    <aside className="fixed top-0 right-0 hidden w-2/6 h-screen border-l xl:w-1/4 lg:block">
      <div className="px-12 py-4">
        <Search />
      </div>
    </aside>
  );
};

export default SideBarRight;
