import { IoMdHome } from "react-icons/io";
import { FaShirt } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";

import './NavigationStyle.css';
export default function Navigation({ colorTheme }){
    return (
        <nav style={{backgroundColor: colorTheme}}>
            <a href="http://localhost:3000">
                <IoMdHome className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <FaShirt className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <FaShoppingBag className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <FaGear className="icon"/>
            </a>
            <a href="http://localhost:3000">
                <IoIosInformationCircle className="icon"/>
            </a>
        </nav>
    );
}