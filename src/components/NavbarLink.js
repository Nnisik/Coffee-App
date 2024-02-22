export default function NavbarLink(props) {
    return <a href={props.href} className="link active">{props.text}</a>
}

export function CartLink(props) {
    return (
        <a className="link" id="cart-link">
            <img src={props.imgLink} alt="" />{props.text}
            <div id="cart-counter">0</div>
        </a>
    );
}