import CuteSubheader from "./Subheader";

export default function Offer(props) {
    return (
        <div className="offer-container">
            <CuteSubheader subclass="products-board-header" text={props.offer_text}/>
            <div class="offer">
                <div class="offer-info">
                    <CuteSubheader subclass="offer-subheader" text={props.subheader} />
                    <h1 class="offer-header">{props.header}</h1>
                    <p class="offer-desctip">{props.text}</p>
                    <button>START SHOPPING</button>
                </div>
                <div class="offer-gallery"></div>
            </div>
        </div>
    );
}