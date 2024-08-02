import {
    IoHomeOutline,
    IoShirtOutline,
    IoBagOutline,
    IoBuildOutline,
    IoInformationCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

import "./NavigationStyle.css";
export default function Navigation({ colorTheme }) {
    return (
        <nav style={{ backgroundColor: colorTheme }}>
            <button className="ancora">
                <Link to="/">
                    <IoHomeOutline className="ln-icon" />
                </Link>
            </button>
            <button className="ancora">
                <Link to="/shirtsordered">
                    <IoShirtOutline className="ln-icon" />
                </Link>
            </button>
            <button className="ancora">
                <Link to="/shirtstosell">
                    <IoBagOutline className="ln-icon" />
                </Link>
            </button>
            <button className="ancora">
                <Link to="/settings">
                    <IoBuildOutline className="ln-icon" />
                </Link>
            </button>
            <button className="ancora">
                <Link to="/about">
                    <IoInformationCircleOutline className="ln-icon" />
                </Link>
            </button>
            <div className="rest"></div>
        </nav>
    );
}
