import { IoIosAdd } from 'react-icons/io';
import { FaRegBell } from 'react-icons/fa';
import { MdOutlineChat } from "react-icons/md";

import './Actions.css';

export default function Actions(){
    return (
        <div>
            <button>
                <IoIosAdd size={25}/>
            </button>
            <button>
                <FaRegBell size={22}/>
            </button>
            <button>
                <MdOutlineChat size={23}/>
            </button>
        </div>
    );
}