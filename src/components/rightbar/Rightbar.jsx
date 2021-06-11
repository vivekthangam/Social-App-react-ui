import "./rightbar.css";
import {Users} from '../../dummydata';
import Online from "../online/Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContaner">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b> Pola Fost</b> and <b>3 other </b>have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <div className="rightbarFriendList">
        {
            Users.map(u=>
                <Online key={u.id} user={u}/>)
        }  
        
        </div>
      </div>
    </div>
  );
}
