import ButtonSecondary from "../../ui/ButtonSecondary";
import { useCurrentUser } from "../../ui/ProtectedRoutes";
import useFollowUnfollow from "./useFollowUnfollow";

const FollowButton = ({ userId, username }) => {
  const { user: currentUser } = useCurrentUser();
  const { followUnfollow, status } = useFollowUnfollow(username);

  const handleClick = () => {
    followUnfollow();
  };
  return (
    <>
      {currentUser.following.includes(userId) ? (
        <ButtonSecondary
          type={"outline"}
          onClick={handleClick}
          disabled={status === "pending"}
        >
          Unfollow
        </ButtonSecondary>
      ) : (
        <ButtonSecondary onClick={handleClick} disabled={status === "pending"}>
          Follow
        </ButtonSecondary>
      )}
    </>
  );
};

export default FollowButton;
