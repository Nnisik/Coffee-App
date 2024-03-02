export default function Mug(props) {
    return (
        <div class="mug">
            <img src={props.img} alt="" class="mug-img" />
            <div class="mug-info">
                <h3 class="mug-info-header">{props.name}</h3>
                <div class="mug-info-price">
                    <p class="text-ltr-spc-2 mug-price">{"$ " + props.price + " USD"}</p>
                </div>
            </div>
        </div>
    );
}