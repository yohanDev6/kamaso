import { IoTrashOutline } from "react-icons/io5";
import '../allButtons.css';
import './TrashButtonStyle.css';

export default function TrashButton({ size }){
    return (
        <button className="div-trash-button">
            <IoTrashOutline className="trash-icon" size={size}/>
        </button>
    );
}