import "./AsideStyle.css";
import Posts from "./posts/Post";

export default function Aside({ colorTheme }) {
    return (
        <aside style={{ backgroundColor: colorTheme }}>
            <Posts/>
        </aside>
    );
}
