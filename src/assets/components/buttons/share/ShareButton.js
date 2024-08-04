import { AiOutlineShareAlt } from "react-icons/ai";
import '../allButtons.css';
import './ShareButtonStyle.css';

export default function ShareButton({ size }){
    return (
        <button className="div-share-button">
            <AiOutlineShareAlt size={size} className="share-icon"/>
        </button>
    );
}