export default function NavbarLink(props) {
    return <a href={props.href} className="link active text-bold text-ltr-spc-2">{props.text}</a>
}

export function CartLink(props) {
    return (
        <a className="link flex center-vertical text-bold text-ltr-spc-2" id="cart-link">
            <img src={props.imgLink} alt="" />{props.text}
            <div class="flex center-vertical center-horizontal text-center" id="cart-counter">0</div>
        </a>
    );
}