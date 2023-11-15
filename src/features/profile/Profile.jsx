import { useParams } from "react-router-dom";
import useUserProfile from "./useUserProfile";
import Spinner from "../../ui/Spinner";
import ServerError from "../../ui/ServerError";
import Header, { Filter } from "../../ui/Header";
import BackButton from "../../ui/BackButton";
import { HiCalendar, HiOutlineEnvelope } from "react-icons/hi2";
import { useCurrentUser } from "../../ui/ProtectedRoutes";
import Posts from "../posts/Posts";
import ProfileButton from "../../ui/ProfileButton";

const Profile = () => {
  const { username } = useParams();
  const { user: currentUser } = useCurrentUser();
  const { user, isLoading, isError } = useUserProfile(username);

  if (isLoading) return <Spinner />;
  if (isError) return <ServerError />;

  let isAdmin = false;
  if (currentUser.username === username) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }
  const profile = user;

  return (
    <>
      <Header addClass="gap-4 px-4 py-3">
        <BackButton />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{profile.displayName}</span>
          <span className="text-sm text-white/50">
            {profile?.posts.length} posts
          </span>
        </div>
      </Header>

      <div className="relative mt-16">
        <img
          src={profile.cover}
          alt=""
          className="object-contain object-center w-full bg-gray-500 border-none h-44"
        />
        <img
          src={profile.avatar}
          alt=""
          className="absolute object-cover object-center w-36 h-36 border-[3px] border-black rounded-full bottom-0 left-4"
        />
        <div className="flex justify-end w-full gap-3 px-4 py-3">
          {isAdmin ? (
            <ProfileButton type={"outline"}>Edit Profile</ProfileButton>
          ) : (
            <>
              <button className="flex items-center justify-center w-10 h-10 text-2xl bg-transparent border rounded-full hover:bg-secondary">
                <HiOutlineEnvelope />
              </button>
              <ProfileButton>Follow</ProfileButton>
            </>
          )}
        </div>
      </div>
      <div className="px-5 py-2">
        <h1 className="text-2xl font-bold">{profile.displayName}</h1>
        <span className="-m-1 text-white/40">@{profile.username}</span>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          vero soluta ex consequuntur saepe, voluptatum expedita est maiores
          cumque, architecto pariatur nostrum quia a rerum illum autem natus
          libero corrupti?
        </p>

        <span className="flex items-center gap-1 mt-2 text-white/40">
          <HiCalendar /> Joined Mar 14
        </span>

        <div className="flex gap-6 mt-2 mb-3">
          <div className="flex gap-1">
            <span className="font-semibold">{profile.following.length}</span>
            <span className="text-white/40">Following</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">{profile.followers.length}</span>
            <span className="text-white/40">Followers</span>
          </div>
        </div>
      </div>
      <ul className="flex h-12">
      <Filter name="Posts" active={true} />
      </ul>
      <Posts postsObj={{ posts: profile.posts }} profileUser={user} />
    </>
  );
};

export default Profile;
