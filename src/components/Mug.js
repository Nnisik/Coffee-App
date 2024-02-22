export function SaleMug(props) {
    return (
        <div class="mug sale-mug">
            <img src={props.img} alt="" class="mug-img" />
            <div class="mug-info">
                <h3 class="mug-info-header">{props.name}</h3>
                <div class="mug-info-price">
                    <p class="mug-price-new">{"$" + props.new_price}</p>
                    <p class="mug-price mug-price-old">{"$" + props.old_price}</p>
                </div>
            </div>
        </div>
    );
}

export default function Mug(props) {
    return (
        <div class="mug">
            <img src={props.img} alt="" class="mug-img" />
            <div class="mug-info">
                <h3 class="mug-info-header">{props.name}</h3>
                <div class="mug-info-price">
                    <p class="mug-price">{"$ " + props.price + " USD"}</p>
                </div>
            </div>
        </div>
    );
}