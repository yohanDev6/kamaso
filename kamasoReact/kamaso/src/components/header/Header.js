import Actions from './Actions';
import './HeaderStyles.css';

function Header(){
    return (
        <header>
            <div>
                <h1>
                    KAMASO
                </h1>
            </div>
        </header>
    );
}

function HeaderFull(){
    return (
        <header>
            <div>
                <h1>
                    KAMASO
                </h1>
            </div>
            <Actions/>
        </header>
    );
}

export {Header, HeaderFull};