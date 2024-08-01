import Aside from "./assets/components/aside/Aside";
import Header from "./assets/components/header/Header";
import Navigation from "./assets/components/navigation/Navigation";

function App() {
    let colorTheme = "#fff";

    return (
        <div className="App">
            <Header colorTheme={colorTheme}/>
            <div className="nav-aside">
                <Navigation colorTheme={colorTheme}/>
                <Aside/>
            </div>
        </div>
    );
}

export default App;
