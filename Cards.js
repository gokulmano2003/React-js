import "./Cards.css"
export var Card = (props) => {
    return (
        <>
            <div>
                <img src={props.img} alt="products" />
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            </div>
        </>
    );
} 