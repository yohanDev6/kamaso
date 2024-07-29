import userImageSrc from '../../../imgs/user/cesar-rincon-XHVpWcr5grQ-unsplash.jpg'
import './RightTopButtonsStyle.css';
import { IoAdd } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineChat } from "react-icons/md";


export default function RightTopButtons(){
    return (
        <div className="right-top-buttons">
            <button>
                <IoAdd className="icon"/>
            </button>
            <button>
                <IoMdNotificationsOutline className="icon"/>
            </button>
            <button>
                <MdOutlineChat className="icon"/>
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