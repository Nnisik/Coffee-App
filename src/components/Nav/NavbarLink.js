export default function NavbarLink(props) {
    return <a href={props.href} className={"nav-link " + props.subclass}>{props.text}</a>
}