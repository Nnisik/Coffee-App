import Mug, { SaleMug } from "./Mug";
import Offer from "./Offer";
import CuteSubheader from "./Subheader";

export default function ProductBoard() {
    return (
        <div class="products-boards flex center-vertical center-horizontal">
            <div class="products-board">
                <CuteSubheader subclass="text-center" text="FEATURED MUGS"/>
                <div class="products-board-grid-featured">
                    <Mug img="" name="Pink Premium Ceramic" price="99.00" />
                    <SaleMug img="" name="Golden Designer Mugs" new_price="50.00" old_price="99.00" />            
                </div>
            </div>
            <div class="products-board">
                <CuteSubheader subclass="text-center" text="MORE PRODUCTS"/>
                <div class="products-board-grid">
                    <SaleMug img="" name="Red Love Cup" new_price="25.00" old_price="37.00" />
                    <SaleMug img="" name="Black Tea Cup" new_price="15.00" old_price="99.00" />
                    <Mug img="" name="Winter Style Mug" price="19.00" />
                    <Mug img="" name="Pink Premium Ceramic" price="25.00" />
                </div>
            </div>
            <div class="products-board-promos">
                <Offer offer_text="BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE" subheader="PREMIUM OFFER" header="Get our Coffee Magazine" text="The most versatile furniture system ever created. Designed to fit your life."/>
            </div>
        </div>
    );
}