const Header = ({filter , setFilter}) => {
  return <div className="border-b">
    <ul className="flex">
      <Filter name="For You" active={filter === "for-you"} onClick={()=> setFilter("for-you")}/>
      <Filter name="Following" active={filter === "following"} onClick={()=> setFilter("following")}/>
    </ul>
  </div>;
};

function Filter({name ,active , onClick}){
  return <li className={`px-8 py-4 font-semibold border-b-4 cursor-pointer hover:bg-secondary ${active ? "border-brand" : 'border-transparent'}`} onClick={onClick}>
    {name}
  </li>
}

export default Header;
