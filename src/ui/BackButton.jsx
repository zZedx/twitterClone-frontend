import { HiArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary"
          onClick={() => navigate(-1)}
        >
          <HiArrowLeft className="text-2xl" />
        </button>
  )
}

export default BackButton