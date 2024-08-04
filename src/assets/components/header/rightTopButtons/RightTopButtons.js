import "./RightTopButtonsStyle.css";
import {
    IoAdd,
    IoNotificationsOutline,
    IoChatboxEllipsesOutline,
    IoPersonOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function RightTopButtons() {
    return (
        <div className="right-top-buttons">
            <button>
                <Link to="/add" className="link">
                    <IoAdd className="rt-icon" />
                </Link>
            </button>
            <button>
                <Link to="/" className="link">
                    <IoNotificationsOutline className="rt-icon" />
                </Link>
            </button>
            <button>
                <Link to="/privatechat" className="link">
                    <IoChatboxEllipsesOutline className="rt-icon" />
                </Link>
            </button>
            <ProfileButton />
        </div>
    );
}

function ProfileButton() {
    return (
        <button className="user-profile-button">
            <Link to="/profile" className="link">
                <IoPersonOutline className="rt-icon" />
            </Link>
        </button>
    );
}
