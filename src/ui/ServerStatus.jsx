import useServerStatus from "../services/useServerStatus";
import SpinnerMini from "./SpinnerMini";

const ServerStatus = () => {
  const {status , isLoading} = useServerStatus();

  if(status) return null;
  return (
    <div
      className={`fixed top-0 left-0 p-4 text-2xl text-center w-full flex justify-center items-center gap-4 z-[10000] ${
        isLoading
          ? "bg-red-700 text-white"
          : "bg-green-600 text-black"
      }`}
    >
      {isLoading ? (
        <>
          <span>😕 Server is Loading. Please Wait. This might take a few minutes.</span>
          <SpinnerMini />
        </>
      ) : (
        <span>😀 Server is Up !!</span>
      )}
    </div>
  );
};

export default ServerStatus;
