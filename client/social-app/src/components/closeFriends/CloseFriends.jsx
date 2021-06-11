import './closeFriends.css'
export default function CloseFriends({user}) {
  return (
    <li className="sidebarFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendname">{user.username}</span>
    </li>
  );
}
