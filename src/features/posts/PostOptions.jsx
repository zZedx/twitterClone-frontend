import { HiEllipsisHorizontal } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import ModalList from "../../ui/ModalList";
import useDeletePost from "./useDeletePost";
import FullModal from "../../ui/FullModal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const PostOptions = ({ postId, isComment }) => {
  const { deletePost, status: deleteStatus } = useDeletePost(isComment);

  const onClickDelete = (e) => {
    e.stopPropagation();
    deletePost(postId);
  };
  return (
    <Modal className={"ml-auto relative"}>
      <Modal.Button>
        <span className="block p-1 text-xl transition-all rounded-full hover:bg-brand/20 hover:text-brand text-white/60">
          <HiEllipsisHorizontal />
        </span>
      </Modal.Button>
      <Modal.Body position={"left-0 top-full"}>
        <ModalList>
          {/* <ModalList.Item>Edit</ModalList.Item> */}
          <FullModal>
            <FullModal.Button opens={"delete"}>
              <ModalList.Item
                disabled={deleteStatus === "pending"}
              >
                Delete
              </ModalList.Item>
            </FullModal.Button>
            <FullModal.Window name={"delete"}>
                <ConfirmDelete onConfirm={onClickDelete} text={"Post"}/>
            </FullModal.Window>
          </FullModal>
        </ModalList>
      </Modal.Body>
    </Modal>
  );
};

export default PostOptions;
