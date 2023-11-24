import { useNavigate } from 'react-router-dom'
import FollowButton from '../features/profile/FollowButton'

const UsersList = ({users}) => {
    const navigate = useNavigate()
  return (
    <ul>
        {users.map((user) => (
          <li
            key={user._id}
            className="flex items-center justify-between w-full py-2 space-x-4 rounded-md shadow-md cursor-pointer"
            onClick={()=> navigate(`/${user.username}`)}
          >
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 rounded-full"
                src={user.avatar}
                alt={user.name}
              />
              <div className="flex flex-col">
                <span className="font-semibold">{user.displayName}</span>
                <span className="text-sm text-white/40">@{user.username}</span>
              </div>
            </div>
            <FollowButton userId={user._id} username={user.username}/>
          </li>
        ))}
      </ul>
  )
}

export default UsersList