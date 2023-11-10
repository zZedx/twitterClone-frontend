import { useRef, useState } from "react";
import Avatar from "../../ui/Avatar";
import Button from "../../ui/Button";
import { PiImageBold } from "react-icons/pi";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { useForm } from "react-hook-form";

const CreatePostForm = () => {
  const fileInputRef = useRef(null);
  const [imageName, setImageName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleTextareaChange = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleFileClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const handleEmojiClick = (e) => {
    e.preventDefault();
  };
  const handleFileChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      setValue("image", file);
    }
  };

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-start w-full gap-4 p-4 border-b">
      <Avatar />
      <form className="w-full" onSubmit={handleSubmit(formSubmit)}>
        <textarea
          name="text"
          onChange={handleTextareaChange}
          placeholder="What is happening?!"
          className="w-full overflow-y-hidden pb-4 text-xl bg-transparent outline-none min-h-[4rem] resize-none"
          {...register("text", { required: true })}
        />
        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-4">
            <div className="flex items-center justify-center gap-1">
              <button
                className="text-2xl text-brand hover:text-brand/90"
                onClick={handleFileClick}
              >
                <PiImageBold />
              </button>
              <span className="text-gray-300">{imageName}</span>
            </div>
            <button
              className="text-2xl text-brand hover:text-brand/90"
              onClick={handleEmojiClick}
            >
              <HiOutlineFaceSmile />
            </button>
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
            disabled={errors.text}
          >
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
