import { AiOutlineComment } from "react-icons/ai";
import '../allButtons.css';
import './CommentButtonStyle.css';

export default function CommentButton({size}) {
    return (
        <button className="div-comment-button">
            <AiOutlineComment className="comment-icon" size={size}/>
        </button>
    );
}