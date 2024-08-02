import "./PostStyle.css";
import {
    AiOutlineComment,
    AiOutlineLike,
    AiOutlineShareAlt,
} from "react-icons/ai";

// tests
const posts = [];

for (let i = 0; i < 10; i++) {
    const post = {
        title: "INFO4M",
        price: 49.99,
    };
    posts.push(post);
}

const listPosts = posts.map((post) => (
    <Post key={post.id} title={post.title} price={post.price} />
));

export default function Posts() {
    return (
        <aside>
            <h3>Principais postangens</h3>
            <div className="posts">{listPosts}</div>
        </aside>
    );
}

function Post({ title, price }) {
    return (
        <div className="post">
            <div className="staticContent">
                <p>{title}</p>
                <p>R$ {price}</p>
            </div>
            <div className="actions">
                <div className="likes">
                    <AiOutlineLike className="icon" />
                    <span>0</span>
                </div>
                <div className="comment">
                    <AiOutlineComment className="icon" />
                    <span>0</span>
                </div>
                <div className="shares">
                    <AiOutlineShareAlt className="icon" />
                    <span>0</span>
                </div>
            </div>
        </div>
    );
}
