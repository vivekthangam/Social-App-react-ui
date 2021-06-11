import './online.css'
export default function online({user}) {
console.log(user)
    return (
        <div className="rightbarfriend">
        <div className="rightbarProfileImgContainer">
          <img
            src={user.profilePicture}
            alt=""
            className="rightbarProfileImg"
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
      </div>
    )
}
