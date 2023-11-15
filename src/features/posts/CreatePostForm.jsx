import { useRef, useState } from "react";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { PiImageBold } from "react-icons/pi";

import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import EmojiPicker from "emoji-picker-react";
import Modal from "../../ui/Modal";
import useCreatePost from "./useCreatePost";
import SpinnerMini from "../../ui/SpinnerMini";

const CreatePostForm = ({onCloseFullModal}) => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");

  const { createPost, status } = useCreatePost();

  const handleTextareaChange = (e) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleFileClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(
      { body: text, image },
      {
        onSettled: () => {
          onCloseFullModal();
          setText("");
          setImage(null);
        },
      }
    );
  };

  return (
    <div className="flex items-start w-full gap-4 p-4 border-b min-w-[30rem]">
      <Avatar />
      <form className="w-full" onSubmit={handleSubmit}>
        <textarea
          name="text"
          onChange={handleTextareaChange}
          placeholder="What is happening?!"
          className="w-full overflow-y-hidden pb-4 text-xl bg-transparent outline-none min-h-[4rem] resize-none focus:border-b whitespace-pre-wrap"
          value={text}
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-2">
            <div className="flex items-center justify-center gap-1">
              <button
                className="text-2xl text-brand hover:text-brand/90"
                onClick={handleFileClick}
              >
                <PiImageBold />
              </button>
              <span className="text-gray-300">{image?.name}</span>
            </div>
            <Modal className={"mt-1"}>
              <Modal.Button>
                <button className="text-2xl text-brand hover:text-brand/90">
                  <HiOutlineFaceSmile />
                </button>
              </Modal.Button>
              <Modal.Body>
                <div className="absolute left-0 top-full">
                  <EmojiPicker
                    theme={"dark"}
                    onEmojiClick={(e) => setText(text + e.emoji)}
                  />
                </div>
              </Modal.Body>
            </Modal>

            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </div>

          <Button
            type="submit"
            size="normal"
            style={{ padding: "0.5rem 1.5rem" }}
            disabled={(text.length === 0 && !image) || status === "pending"}
          >
            {status === "pending" ? <SpinnerMini /> : "Post"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
