import shirtImg from '../../imgs/post/images.jpg';
import TrashButton from '../../components/buttons/trash/TrashButton';
import './ShirtsOrderedStyle.css';

export default function ShirtsOrdered() {
    return (
        <aside>
            <h3>Camisas pedidas</h3>
            <ShirtOrdered 
            img={shirtImg}
            title="INFO4M"
            price={49.99}
            description={{
                seller: "INFO4M",
                style: "M Adulto, Preta, 41, João",
                payment: "PIX 1X"
            }}
            paymentStatus="PAGO"
            shirtStatus="ENTREGUE"
            />
            <ShirtOrdered
            img={shirtImg} 
            title="INFO4M"
            price={49.99}
            description={{
                seller: "INFO4M",
                style: "M Adulto, Preta, 41, João",
                payment: "PIX 1X"
            }}
            paymentStatus="PAGO"
            shirtStatus="ENTREGUE"
            />
        </aside>
    );
}

function ShirtOrdered({ img, title, price, description, paymentStatus, shirtStatus }) {
    return (
        <div className="order">
            <div className="shirt-img">
                <img src={img} alt="Imagem da camisa"/>
            </div>
            <div className="about">
                <div className="text">
                    <div className="top-text">
                        <p className="title">{title}</p>
                        <p className="price">R$ {price}</p>
                    </div>
                    <div className="bottom-text">
                        <h4>Características</h4>
                        <Description content={description}/>
                    </div>
                </div>
                <div className="so-actions">
                    <TrashButton size={25}/>
                    <div className="flex-row">
                        <div className="paid flex">
                            <p>{paymentStatus}</p>
                        </div>
                        <div className="delivered flex">
                            <p>{shirtStatus}</p>
                        </div>
                        <button className='contact'>
                            CONTATO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Description({content}){
    return (
        <div className="description">
            <p>Camisa vendida por {content.seller}</p>
            <p>{content.style}</p>
            <p>{content.payment}</p>
        </div>
    );
}