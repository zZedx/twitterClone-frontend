import { Link, useParams } from "react-router-dom";
import useUserProfile from "../features/profile/useUserProfile";
import Spinner from "../ui/Spinner";
import ServerError from "../ui/ServerError";
import Header, { Filter } from "../ui/Header";
import BackButton from "../ui/BackButton";
import {
  HiCalendar,
  HiEllipsisVertical,
  HiOutlineEnvelope,
} from "react-icons/hi2";
import { useCurrentUser } from "../ui/ProtectedRoutes";
import Posts from "../features/posts/Posts";
import EditProfile from "../features/profile/EditProfile";
import { profileDate } from "../utils/date";
import FollowButton from "../features/profile/FollowButton";
import Modal from "../ui/Modal";
import ModalList from "../ui/ModalList";
import useLogout from "../features/auth/useLogout";
import FullModal from "../ui/FullModal";
import ConfirmDelete from "../ui/ConfirmDelete";
import useDeleteAccount from "../features/profile/useDeleteAccount";

const Profile = () => {
  const { username } = useParams();
  const { user: currentUser } = useCurrentUser();
  const { user, isLoading, isError } = useUserProfile(username);
  const { logout, status } = useLogout();
  const { deleteAccount , status : deleteStatus} = useDeleteAccount();

  if (isLoading) return <Spinner />;
  if (!user || isError) return <ServerError>Profile not found</ServerError>;

  let isAdmin = false;
  if (currentUser.username === username) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  const profile = user;
  const {
    posts,
    following,
    followers,
    displayName,
    avatar,
    coverImage,
    bio,
    createdAt,
  } = profile;

  const handleDelete = () => {
    deleteAccount();
  };

  return (
    <>
      <Header addClass="gap-4 px-4 py-3 w-full sm:w-[calc(100%-6rem)] md:w-3/4 lg:w-[calc(66.66%-6rem)] xl:w-2/4 2xl:w-2/6">
        <BackButton />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{displayName}</span>
          <span className="text-sm text-white/50">{posts.length} posts</span>
        </div>
      </Header>

      <div className="relative mt-16">
        <img
          src={
            coverImage ||
            "https://images.unsplash.com/photo-1528731708534-816fe59f90cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="object-cover object-center w-full outline-none bg-white/10 h-44"
        />
        <img
          src={avatar}
          alt=""
          className="absolute object-cover object-center w-36 h-36 border-[3px] border-black rounded-full bottom-0 left-4"
        />
        <div className="flex items-center justify-end w-full gap-3 px-4 py-3">
          {isAdmin ? (
            <>
              <EditProfile />
              <Modal>
                <Modal.Button>
                  <HiEllipsisVertical className="text-2xl cursor-pointer" />
                </Modal.Button>
                <Modal.Body>
                  <ModalList>
                    <ModalList.Item
                      onClick={logout}
                      disabled={status === "pending"}
                    >
                      Logout
                    </ModalList.Item>
                    <FullModal>
                      <FullModal.Button opens={"delete"}>
                        <ModalList.Item>
                          <span className="text-red-600 whitespace-nowrap">
                            Delete Account
                          </span>
                        </ModalList.Item>
                      </FullModal.Button>
                      <FullModal.Window name={"delete"}>
                        <ConfirmDelete
                          onConfirm={handleDelete}
                          text={"Account"}
                          disabled={deleteStatus === "pending"}
                        />
                      </FullModal.Window>
                    </FullModal>
                  </ModalList>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <>
              <Link to={`/message/${username}`} className="flex items-center justify-center w-10 h-10 text-2xl bg-transparent border rounded-full hover:bg-secondary">
                <HiOutlineEnvelope />
              </Link>
              <FollowButton username={username} userId={profile._id} />
            </>
          )}
        </div>
      </div>
      <div className="px-5 py-2">
        <h1 className="text-2xl font-bold">{displayName}</h1>
        <span className=" text-white/40">@{username}</span>
        <p
          className="mt-2"
          dangerouslySetInnerHTML={{
            __html: bio?.replace(/\n/g, "<br>"),
          }}
        />

        <span className="flex items-center gap-1 mt-2 text-white/40">
          <HiCalendar /> {profileDate(createdAt)}
        </span>

        <div className="flex gap-6 mt-2 mb-3">
          <Link to={`/${username}/following`} className="flex gap-1">
            <span className="font-semibold">{following.length}</span>
            <span className="text-white/40">Following</span>
          </Link>
          <Link to={`/${username}/followers`} className="flex gap-1">
            <span className="font-semibold">{followers.length}</span>
            <span className="text-white/40">Followers</span>
          </Link>
        </div>
      </div>
      <ul className="flex h-12">
        <Filter name="Posts" active={true} />
      </ul>
      <Posts postsObj={{ posts: posts }} profileUser={user} />
    </>
  );
};

export default Profile;
