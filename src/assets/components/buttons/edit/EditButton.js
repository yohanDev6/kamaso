import { IoPencilOutline } from "react-icons/io5";
import './EditButtonStyle.css';

export default function EditButton({ size }){
    return (
        <button className="div-edit-button">
            <IoPencilOutline size={size} className="edit-icon"/>
        </button>
    );
}