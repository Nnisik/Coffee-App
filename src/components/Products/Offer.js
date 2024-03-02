import CuteSubheader from "../Subheader";

export default function Offer(props) {
  return (
    <div className="offer-container">
      <CuteSubheader subclass="decor-lines" text={props.offer_text} />
      <div className="offer">
        <div className="offer-info">
          <CuteSubheader subclass="offer-subheader" text={props.subheader} />
          <h1 className="offer-header">{props.header}</h1>
          <p className="offer-desctip">{props.text}</p>
          <a className="offer-shopping-btn" href="#products-boards">
            START SHOPPING
          </a>
        </div>
        <div class="offer-gallery"></div>
      </div>
    </div>
  );
}
