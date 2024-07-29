import RightTopButtons from "./rightTopButtons/RightTopButtons";
import Search from "./search/Search";
import './HeaderStyle.css'

export default function Header({ colorTheme }){
    return (
        <header style={{backgroundColor: colorTheme}}>
            <div className="logo">
                <h1>
                    KAMASO
                </h1>
            </div>
            <Search/>
            <RightTopButtons/>
        </header>
    );
}