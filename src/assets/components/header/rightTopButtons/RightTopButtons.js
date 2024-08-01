import userImageSrc from '../../../imgs/user/cesar-rincon-XHVpWcr5grQ-unsplash.jpg'
import './RightTopButtonsStyle.css';
import { IoAdd, IoNotificationsOutline, IoChatboxEllipsesOutline } from "react-icons/io5";

export default function RightTopButtons(){
    return (
        <div className="right-top-buttons">
            <button>
                <IoAdd className="icon"/>
            </button>
            <button>
                <IoNotificationsOutline className="icon"/>
            </button>
            <button>
                <IoChatboxEllipsesOutline className="icon"/>
            </button>
            <ProfileButton/>
        </div>
    );
}

function ProfileButton() {
    return (
        <button className="user-image">
            <img src={userImageSrc} alt="User Profile"/>
        </button>
    );
}