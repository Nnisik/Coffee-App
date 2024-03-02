import Mug from "./Mug";
import SaleMug from "./SaleMug";
import Offer from "./Offer";
import CuteSubheader from "../Subheader";
import featuredMugsData from "../../data/data-featured-mugs.json";
import mugsData from "../../data/data-mugs-info.json";

export default function ProductBoard() {
  return (
    <div id="products-boards">
      <div class="products-board">
        <CuteSubheader subclass="decor-lines" text="FEATURED MUGS" />
        <div class="products-board-grid-featured">
          {featuredMugsData.map((mug) => {
            let isOnSale = mug.hasOwnProperty("sale");
            if (isOnSale) {
              return (
                <SaleMug
                  key={mug.id}
                  name={mug.name}
                  old_price={mug.price}
                  new_price={mug.sale.price}
                />
              );
            } else {
              return <Mug key={mug.id} name={mug.name} price={mug.price} />;
            }
          })}
        </div>
      </div>
      <div class="products-board">
        <CuteSubheader subclass="decor-lines" text="MORE PRODUCTS" />
        <div class="products-board-grid">
          {mugsData.map((mug) => {
            let isOnSale = mug.hasOwnProperty("sale");
            if (isOnSale) {
              return (
                <SaleMug
                  key={mug.id}
                  name={mug.name}
                  old_price={mug.price}
                  new_price={mug.sale.price}
                />
              );
            } else {
              return <Mug key={mug.id} name={mug.name} price={mug.price} />;
            }
          })}
        </div>
      </div>
      <div class="products-board-promos">
        <Offer
          offer_text="BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE"
          subheader="PREMIUM OFFER"
          header="Get our Coffee Magazine"
          text="The most versatile furniture system ever created. Designed to fit your life."
        />
      </div>
    </div>
  );
}
