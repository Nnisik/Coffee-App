import NavbarLink from "./NavbarLink";
import linksData from "../../data/data-nav-links.json";

export default function Navbar() {
  return (
    <div id="nav">
      <a href="#home" className="nav-logo">
        CoffeeStyle.
      </a>
      <div id="nav-links">
        {linksData.map((link) => {
          return (
            <NavbarLink
              key={link.id}
              href={link.href}
              text={link.text}
              subclass={link.subclass}
            />
          );
        })}
        <a id="cart-link">
          <img
            src={require("../../assets/icons8-shopping-bag-32.png")}
            alt=""
          />
          CART
          <div id="cart-counter">0</div>
        </a>
      </div>
    </div>
  );
}
