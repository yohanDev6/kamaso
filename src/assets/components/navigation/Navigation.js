import { IoHomeOutline, IoShirtOutline, IoBagOutline, IoBuildOutline, IoInformationCircleOutline } from "react-icons/io5";

import './NavigationStyle.css';
export default function Navigation({ colorTheme }){
    return (
        <nav style={{backgroundColor: colorTheme}}>
            <a href="http://localhost:3000">
                <IoHomeOutline className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <IoShirtOutline className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <IoBagOutline className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <IoBuildOutline className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <IoInformationCircleOutline className="icon"/>
            </a>
            <div className="rest"></div>
        </nav>
    );
}