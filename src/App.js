import Header from "./assets/components/header/Header";
import Navigation from "./assets/components/navigation/Navigation";
import { Outlet } from "react-router-dom";

function App() {
    let colorTheme = "#fff";

    return (
        <div className="App">
            <Header colorTheme={colorTheme} />
            <div className="nav-aside">
                <Navigation colorTheme={colorTheme} />
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
