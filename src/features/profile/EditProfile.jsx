import ButtonSecondary from "../../ui/ButtonSecondary";
import FullModal from "../../ui/FullModal";
import EditProfileForm from "./EditProfileForm";

const EditProfile = () => {
  return (
    <FullModal>
      <FullModal.Button opens={"edit-form"}>
        <ButtonSecondary type={"outline"}>Edit Profile</ButtonSecondary>
      </FullModal.Button>
      <FullModal.Window name={"edit-form"}>
        <EditProfileForm />
      </FullModal.Window>
    </FullModal>
  );
};

export default EditProfile;
