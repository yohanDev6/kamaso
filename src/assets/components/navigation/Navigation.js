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
            <div className="main-nav">
                <button>
                    <Link to="/" className="nav-link">
                        <IoHomeOutline className="ln-icon" />
                    </Link>
                </button>
                <button>
                    <Link to="/shirtsordered" className="nav-link">
                        <IoShirtOutline className="ln-icon" />
                    </Link>
                </button>
                <button>
                    <Link to="/shirtstosell" className="nav-link">
                        <IoBagOutline className="ln-icon" />
                    </Link>
                </button>
                <button>
                    <Link to="/settings" className="nav-link">
                        <IoBuildOutline className="ln-icon" />
                    </Link>
                </button>
            </div>
            <button>
                <Link to="/about" className="nav-link">
                    <IoInformationCircleOutline className="ln-icon" />
                </Link>
            </button>
        </nav>
    );
}
