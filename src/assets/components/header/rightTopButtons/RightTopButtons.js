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
                <Link to="/add">
                    <IoAdd className="th-icon" />
                </Link>
            </button>
            <button>
                <Link to="/">
                    <IoNotificationsOutline className="th-icon" />
                </Link>
            </button>
            <button>
                <Link to="/privatechat">
                    <IoChatboxEllipsesOutline className="th-icon" />
                </Link>
            </button>
            <ProfileButton />
        </div>
    );
}

function ProfileButton() {
    return (
        <button className="user-image">
            <Link to="/profile">
                <IoPersonOutline className="th-icon" />
            </Link>
        </button>
    );
}
