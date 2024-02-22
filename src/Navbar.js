import NavbarLink, {CartLink} from "./components/NavbarLink";


export default function Navbar() {
    return (
        <div className="flex center-horizontal center-vertical navbar">
            <a href="#home" className="navbar-logo">CoffeeStyle.</a>
            <div className="navbar-links">
                <NavbarLink href="#home" text="HOME" />
                <NavbarLink href="#products" text="OUR PRODUCTS" />
                <NavbarLink href="#blog" text="BLOG" />
                <NavbarLink href="#about" text="ABOUT" />
                <NavbarLink href="#contact" text="CONTACT" />
                <CartLink img="" text="CART" />
                <button id="navbar-sidebar-btn"></button>
            </div>
        </div>
    );
}