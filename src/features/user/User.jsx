import Avatar from "../../ui/Avatar";
import Modal from "../../ui/Modal";
import ModalList from "../../ui/ModalList";
import { HiOutlineEllipsisHorizontal } from "react-icons/hi2";
import useLogout from "../auth/useLogout";
import { useCurrentUser } from "../../ui/ProtectedRoutes";

const User = () => {
  const {logout , status} = useLogout()
  const {user} = useCurrentUser()
  return (
    <Modal className={"mt-auto mb-2 relative xl:w-full hidden sm:block"}>
      <Modal.Button>
        <div className="flex items-center gap-4 px-4 py-2 rounded-full cursor-pointer hover:bg-secondary">
          <Avatar />
          <div className="flex-col hidden xl:flex">
            <span className="ml-1 font-bold">{user.displayName}</span>
            <span className="text-gray-500">@{user.username}</span>
          </div>
          <div className="hidden ml-auto text-3xl text-white xl:block">
            <HiOutlineEllipsisHorizontal />
          </div>
        </div>
      </Modal.Button>
      <Modal.Body position={"-top-full right-0"}>
        <ModalList>
          <ModalList.Item label="Logout" onClick={logout} disabled={status === "pending"}/>
        </ModalList>
      </Modal.Body>
    </Modal>
  );
};

export default User;
