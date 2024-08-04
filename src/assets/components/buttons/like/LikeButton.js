import { AiOutlineLike } from "react-icons/ai";
import '../allButtons.css';
import './LikeButtonStyle.css';

export default function LikeButton({ size }){
    return (
        <button className="div-like-button">
            <AiOutlineLike className="like-button" size={size}/>
        </button>
    );
}