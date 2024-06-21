import RegisterForm from "../components/forms/RegisterForm";
import {Header, HeaderFull} from "../components/header/Header";

export default function LoginRegister(){
    return (
        <div>
            <HeaderFull/>
            {/* loginform */}
            <RegisterForm/>
            {/* footer */}
        </div>
    );
}