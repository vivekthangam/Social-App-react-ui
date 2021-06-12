import "./rightbar.css";
import { Users } from "../../dummydata";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContaner">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b> Pola Fost</b> and <b>3 other </b>have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <div className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarinfoItem">
            <span className="rightbarInfoKey">city:</span>
            <span className="rightbarInfovalue">New york</span>
          </div>

          <div className="rightbarinfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfovalue">India</span>
          </div>

          <div className="rightbarinfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfovalue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">

          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        
          <div className="rightbarFollowing">
            <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        
          <div className="rightbarFollowing">
            <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        
          <div className="rightbarFollowing">
            <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        
          <div className="rightbarFollowing">
            <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        

        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile? 
        <ProfileRightbar />:<HomeRightbar/>}
      </div>
    </div>
  );
}
