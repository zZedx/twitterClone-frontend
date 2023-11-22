import useSearchUser from "../features/user/useSearchUser";
import Spinner from "./Spinner";
import User from "./User";

const SearchResults = ({ query }) => {
  const { searchUserResult , isLoading} = useSearchUser(query);
  return (
    <div className="absolute left-0 w-full overflow-auto bg-black border rounded-lg top-16 max-h-60">
      {isLoading ? <Spinner/> : searchUserResult.length ? <ul>
        {searchUserResult.map((result) => (
          <User user={result} key={result._id} />
        ))}
      </ul> : <div className="p-4 text-center text-white">No results</div>}
    </div>
  );
};

export default SearchResults;
